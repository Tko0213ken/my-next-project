import Styles from "./index.module.css";
import Image from "next/image";
import { formatDate } from "@/app/_libs/utils";

type Props = { date: string | undefined };

export default function Date({ date }: Props) {
  return (
    <span className={Styles.date}>
      <Image src="/clock.svg" alt="" width={16} height={16} priority />
      {formatDate(date) ?? "No date provided"}
    </span>
  );
}
