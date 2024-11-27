import Image from "next/image";
import Styles from "./index.module.css";

type Props = {
  title: string;
  sub: string;
};

export default function Hero({ title, sub }: Props) {
  return (
    <section className={Styles.container}>
      <div>
        <h1 className={Styles.title}>{title}</h1>
        <p className={Styles.sub}>{sub}</p>
      </div>
      <Image
        className={Styles.bgimg}
        src="/img-mv.jpg"
        alt=""
        width={4000}
        height={1200}
      />
    </section>
  );
}
