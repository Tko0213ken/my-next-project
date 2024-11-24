import Styles from "./index.module.css";
import Image from "next/image";

type Props = { date: string };

export default function Date({ date }: Props) {
  return (
    <span className={Styles.date}>
      <Image src="/clock.svg" alt="" width={16} height={16} priority />
      {date}
    </span>
  );
}