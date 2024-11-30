import { getNewsDetail } from "@/app/_libs/microcms";
import Article from "@/app/_components/Articre";
import ButtonLink from "@/app/_components/buttonLink";
import Styles from "./page.module.css";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  const data = await getNewsDetail(params.slug).catch(notFound);
  return (
    <>
      <Article data={data} />
      <div className={Styles.footer}>
        <ButtonLink href={"/news"}>ニュース一覧へ</ButtonLink>
      </div>
    </>
  );
}
