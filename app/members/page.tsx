import Image from "next/image";
import Styles from "./page.module.css";
import { getMemberList } from "../_libs/microcms";
import { MEMBERS_LIST_LIMIT } from "../_components/_constants";

export default async function page() {
  const data = await getMemberList({ limit: MEMBERS_LIST_LIMIT });
  return (
    <div className={Styles.container}>
      {data.contents.length === 0 ? (
        <p className={Styles.empty}>メンバーが登録されていません。</p>
      ) : (
        <ul>
          {data.contents.map((member) => (
            <li key={member.id} className={Styles.list}>
              <Image
                className={Styles.image}
                src={member.image.url}
                alt=""
                width={member.image.width}
                height={member.image.height}
              />
              <dl>
                <dt className={Styles.name}>{member.name}</dt>
                <dd className={Styles.position}>{member.position}</dd>
                <dd className={Styles.profile}>{member.profile}</dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
