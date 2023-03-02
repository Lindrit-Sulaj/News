import { days, months } from "@/app/page";
import { rubik, roboto } from "@/app/layout";

export default function News({ author, title, url, publishedAt, description, currentDate }) {
  const date = new Date(publishedAt);

  const day = date.getDay();
  const month = date.getMonth();
  const dayOfMonth = date.getDate();

  const formattedDate = `${days[day - 1]}, ${months[month]} ${dayOfMonth}`;

  return (
    <article className="md:px-3 py-3">
      <h3 className="text-sky-600 dark:text-sky-400 font-medium text-[15px]">{author}</h3>
      <a className={`text-lg dark:text-white-primary mt-1 mb-1 ${roboto.className}`} href={url}>{title}</a>
      {description && (
        <p>{description}</p>
      )}
      <p className={`${rubik.className} text-neutral-600 dark:text-neutral-400`}>
        {
          (formattedDate === currentDate) ? "Today" : formattedDate
        }
      </p>
    </article>
  )
}
