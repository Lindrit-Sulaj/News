import News from "@/components/News";
import { months, days } from '@/app/page';
import { rubik, roboto } from "@/app/layout";

async function getCategory(category) {
  const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=15&apiKey=5af37869cbaa419e860ecf01977bb419`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error("Couldn't fetch data");
  };

  return res.json();
}

export default async function CategoryPage({ params }) {
  const { slug } = params;
  const data = await getCategory(slug)

  const date = new Date();
  const day = date.getDay();
  const month = date.getMonth();
  const dayOfMonth = date.getDate()

  return (
    <div className="pt-8 mx-auto max-w-4xl xl:max-w-[1100px]">
      <div className="px-4 mb-4">
        <h1 className={`capitalize text-2xl dark:text-white-primary font-medium ${roboto.className}`}>{slug}</h1>
        <p className={`capitalize mt-1 text-neutral-500 dark:text-neutral-400 ${rubik.className}`}>{`${days[day - 1]}, ${months[month]} ${dayOfMonth}`}</p>
      </div>
      <div className="bg-slate-100 dark:bg-black-dark px-6 md:px-6 py-6 md:py-4 rounded-3xl">
        {data.articles.map((article, index) => (
          <News
            key={index}
            author={article.author}
            title={article.title}
            publishedAt={article.publishedAt}
            description={article.description}
            currentDate={`${days[day - 1]}, ${months[month]} ${dayOfMonth}`}
            url={article.url} />
        ))}
      </div>
    </div>
  )
}