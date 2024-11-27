import Image from "next/image";
import Styles from "./page.module.css";

const data = {
  contents: [
    {
      id: "1",
      image: {
        url: "/img-member1.jpg",
        width: 240,
        height: 240,
      },
      name: "デイビット・チャン",
      position: "CEO",
      profile:
        "グローバルテクノロジー企業での豊富な経験を持つリーダー。以前は大手ソフトウェア企業の上級幹部として勤務し、新市場進出や収益成長に成功。自身の経験と洞察力により、業界のトレンドを見極めて戦略的な方針を策定し、会社の成長を牽引している。",
    },
    {
      id: "2",
      image: {
        url: "/img-member2.jpg",
        width: 240,
        height: 240,
      },
      name: "エミリー・サンダース",
      position: "COO",
      profile:
        "グローバル企業での運営管理と組織改革の経験豊富なエグゼクティブ。以前は製造業界でC00として勤務し、生産効率の向上や品質管理の最適化に成功。戦略的なマインドセットと組織の能力強化に対する専門知識は、会社の成長と効率化に大きく貢献している。",
    },
    {
      id: "3",
      image: {
        url: "/img-member3.jpg",
        width: 240,
        height: 240,
      },
      name: "ジョン・ウィルソン",
      position: "CTO",
      profile:
        "先進技術の研究開発と製品イノベーションの分野で優れた経歴を持つテクノロシーエキスパート。以前は、大手テクノロジのお茶の時期で主任エンジニアとして勤めにこ、新的な製品の開発に携わのたするためにリサーチと開発さり、当社の製品ポートフォ』本を考かつ多カのあるものにするためにリサーチと関をリートしてい",
    },
  ],
};

export default function page() {
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
