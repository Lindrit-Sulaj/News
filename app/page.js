import { roboto, rubik } from "./layout";

import News from "@/components/News";

export const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
export const months = ["January", "February", "March", "April", "May", "June", "July", "August", "Septemer", "October", "November", "December"]

async function getTopHeadlines() {
  const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`);
  if (!res.ok) {
    throw new Error("Error bruh");
  };
  return res.json()
}

export default async function Home() {
  const data = await getTopHeadlines();

  const date = new Date();
  const day = date.getDay();
  const month = date.getMonth();
  const dayOfMonth = date.getDate()


  return (
    <main className={`${roboto.className} mx-auto max-w-4xl xl:max-w-[1100px] py-8`}>
      <div className={` ${roboto.className} mb-6 lg:mb-8 px-4 lg:px-0`}>
        <h1 className="text-2xl md:text-3xl font-semibold dark:text-white-primary">Your briefing</h1>
        <p className={`capitalize mt-1 text-neutral-500 dark:text-neutral-400 ${rubik.className}`}>{`${days[day - 1]}, ${months[month]} ${dayOfMonth}`}</p>
      </div>
      <div className="dark:bg-black-dark rounded-3xl p-6">
        <h3 className={`text-blue-600 dark:text-blue-400 text-xl border-solid dark:border-b-black-light border-b-[2px] pb-4 ${rubik.className}`}>Top Stories</h3>
        <div className="mt-6">
          {data.articles.map((article, index) => (
            <News
              key={index}
              author={article.author}
              title={article.title}
              publishedAt={article.publishedAt}
              description={article.description}
              currentDate={`${days[day - 1]}, ${months[month]} ${dayOfMonth}`} 
              url={article.url}
              />
          ))}
        </div>
      </div>
    </main>
  )
}

