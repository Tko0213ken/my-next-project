import Image from "next/image";
import Link from "next/link";
import Styles from "./index.module.css";
import { News } from "@/app/_libs/microcms";
import Category from "../Category";
import Date from "../Date";

type Props = { news: News[] };

export default function NewsList({ news }: Props) {
  if (news.length === 0) {
    return <p>記事はありません</p>;
  }
  return (
    <ul>
      {news.map((article) => (
        <li key={article.id} className={Styles.list}>
          <Link href={`/news/${article.id}`} className={Styles.link}>
            <Image
              className={Styles.image}
              src="/no-image.png"
              alt="no-image"
              width={1200}
              height={630}
            />
            <dl className={Styles.content}>
              <dt className={Styles.title}>{article.title}</dt>
              <dd className={Styles.meta}>
                <Category category={article.category} />
                <Date date={article.publishedAt} />
              </dd>
            </dl>
          </Link>
        </li>
      ))}
    </ul>
  );
}
