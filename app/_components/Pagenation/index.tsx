import { NEWS_LIST_LIMIT } from "../_constants";
import Styles from "./index.module.css";
import Link from "next/link";

type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
};

export default function Pagenation({
  totalCount,
  current = 1,
  basePath = "/news",
}: Props) {
  const pages = Array.from(
    { length: Math.ceil(totalCount / NEWS_LIST_LIMIT) },
    (_, i) => i + 1
  );
  return (
    <nav>
      <ul className={Styles.container}>
        {pages.map((p) => (
          <li className={Styles.list} key={p}>
            {current !== p ? (
              <Link href={`${basePath}/p/${p}`} className={Styles.item}>
                {p}
              </Link>
            ) : (
              <span className={`${Styles.item} ${Styles.current}`}>{p}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
