import { getNewsList } from "../_libs/microcms";
import SearchField from "../_components/SearchFIeld";
import NewsList from "../_components/NewsList";
import Pagenation from "@/app/_components/Pagenation";

export const revalidate = 60;

export default async function Page() {
  const { contents: news, totalCount } = await getNewsList();
  return (
    <>
      <SearchField />
      <NewsList news={news} />
      <Pagenation totalCount={totalCount} />
    </>
  );
}
