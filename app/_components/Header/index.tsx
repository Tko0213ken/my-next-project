import Image from "next/image";
import Link from "next/link";
import Menu from "../Menu";
import Styles from "./index.module.css";

export default function Header() {
  return (
    <header className={Styles.header}>
      <Link href="/" className={Styles.logoLink}>
        <Image
          className={Styles.logo}
          src="/logo.svg"
          alt="SIMPLE"
          width={348}
          height={133}
          priority
        />
      </Link>
      <Menu />
    </header>
  );
}
