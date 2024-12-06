import { getNewsDetail } from "@/app/_libs/microcms";
import Article from "@/app/_components/Articre";
import ButtonLink from "@/app/_components/buttonLink";
import Styles from "./page.module.css";
import { notFound } from "next/navigation";

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    dk?: string;
  };
};

export default async function Page({ params, searchParams }: Props) {
  const data = await getNewsDetail(params.slug, {
    draftKey: searchParams.dk,
  }).catch(notFound);
  return (
    <>
      <Article data={data} />
      <div className={Styles.footer}>
        <ButtonLink href={"/news"}>ニュース一覧へ</ButtonLink>
      </div>
    </>
  );
}
