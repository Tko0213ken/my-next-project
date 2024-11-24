import Styles from "./page.module.css";
import Image from "next/image";
import ButtonLink from "./_components/buttonLink";
import { News } from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList";

const data: {
  contents: News[];
} = {
  contents: [
    {
      id: "1",
      title: "渋谷オフィスを移転しました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/05/09",
      createdAt: "2023/05/19",
    },
    {
      id: "2",
      title: "当社CEOが業界リーダーTOP30に選出されました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/05/09",
      createdAt: "2023/05/19",
    },
    {
      id: "3",
      title: "テストの記事です",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/05/09",
      createdAt: "2023/05/19",
    },
  ],
};

export default function Home() {
  const sliceData = data.contents.slice(0, 2);
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
        <NewsList news={sliceData} />
        <div className={Styles.newslink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}