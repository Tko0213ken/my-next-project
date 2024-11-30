import { News } from "@/app/_libs/microcms";
import Image from "next/image";
import Styles from "./index.module.css";
import Category from "../Category";
import Date from "../Date";

type Props = {
  data: News;
};

export default function Article({ data }: Props) {
  return (
    <main>
      <h1 className={Styles.title}>{data.title}</h1>
      <p className={Styles.description}>{data.description}</p>
      <div className={Styles.meta}>
        <Category category={data.category} />
        <Date date={data.publishedAt ?? data.createdAt} />
      </div>
      {data.thumbnail && (
        <Image
          src={data.thumbnail.url}
          alt=""
          className={Styles.thumbnail}
          width={data.thumbnail.width}
          height={data.thumbnail.height}
        />
      )}
      <div
        className={Styles.content}
        dangerouslySetInnerHTML={{
          __html: data.content,
        }}
      />
    </main>
  );
}
