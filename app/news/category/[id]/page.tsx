import { getCategoryDetail, getNewsList } from "@/app/_libs/microcms";
import Pagenation from "@/app/_components/Pagenation";
import { notFound } from "next/navigation";
import NewsList from "@/app/_components/NewsList";
import Category from "@/app/_components/Category";

type Props = {
  params: {
    id: string;
  };
};

export default async function page({ params }: Props) {
  const category = await getCategoryDetail(params.id).catch(notFound);

  const { contents: news, totalCount } = await getNewsList({
    filters: `category[equals]${category.id}`,
  });

  return (
    <>
      <p>
        <Category category={category} />
        一覧
      </p>
      <NewsList news={news} />
      <Pagenation
        totalCount={totalCount}
        basePath={`/news/category/${category.id}`}
      />
    </>
  );
}
