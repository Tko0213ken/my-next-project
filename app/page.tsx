import Styles from "./page.module.css";
import Image from "next/image";
import ButtonLink from "./_components/buttonLink";
import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList";
import { TOP_NEWS_LIMIT } from "./_components/_constants";

export default async function Home() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });

  return (
    <>
      <section className={Styles.top}>
        <div>
          <h1 className={Styles.title}>テクノロジーの力で世界を変える</h1>
          <p className={Styles.description}>
            私たちは世界をリードしているグローバルテックカンパニーです
          </p>
        </div>
        <Image
          className={Styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
        />
      </section>

      <section className={Styles.news}>
        <h2 className={Styles.newsTitle}>News</h2>
        <NewsList news={data.contents} />
        <div className={Styles.newslink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
