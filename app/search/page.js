import Link from "next/link";
import { days, months } from "../page";
import { rubik, roboto } from "../layout";

async function getSearchResults(searchParams) {
  let params = Object.entries(searchParams).map((param) => {
    return `${(param[0] === "query" ? "q" : param[0])}=${param[1].split(" ").join("%20")}`
  }).join("&");

  const res = await fetch(`https://newsapi.org/v2/everything?${params}&pageSize=15&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error("Couldn't fetch data");
  };

  return res.json();
}

export default async function SearchPage({ searchParams }) {
  const data = await getSearchResults(searchParams);

  const date = new Date();
  const day = date.getDay();
  const month = date.getMonth();
  const dayOfMonth = date.getDate();

  return (
    <div className={`${roboto.className} mx-auto max-w-4xl xl:max-w-[1100px] py-8 px-2 md:px-0`}>
      <div className="mb-6">
        <h1 className={`text-xl md:text-2xl font-semibold border-solid border-b-2 border-b-neutral-200 dark:border-b-neutral-600 rounded-sm pb-2 dark:text-white-primary`}>News about {searchParams.query}</h1>
      </div>
      <div className="rounded-3xl flex flex-col gap-4">
        {data.articles.map((article, index) => (
          <News
            key={index}
            author={article.author}
            source={article.source.name}
            title={article.title}
            description={article.description}
            url={article.url}
            image={article.urlToImage}
            content={article.content} />
        ))}
      </div>
    </div>
  )
}

function News({ author, source, title, description, url, image, publishedAt, content }) {
  if (description === title) return;

  return (
    <div className="flex items-center gap-4 bg-white-primary dark:bg-black-dark shadow-md dark:shadow-none rounded-lg p-4">
      <div className="w-3/4">
        <h3 className="text-sky-600 font-medium dark:text-sky-400">{source}</h3>
        <a className="text-lg font-medium dark:text-white-primary" href={url}>{title}</a>
        <p className={`mt-2 text-neutral-600 dark:text-neutral-400 ${rubik.className}`}>{description}</p>
      </div>
      <img className="w-1/4 object-cover rounded-xl dark:text-white-primary" src={image}/>
    </div>
  )
}