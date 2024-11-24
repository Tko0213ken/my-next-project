import Image from "next/image";
import Styles from "./index.module.css";

export default function Header() {
  return (
    <header className={Styles.header}>
      <a href="/" className={Styles.logoLink}>
        <Image
          className={Styles.logo}
          src="/logo.svg"
          alt="SIMPLE"
          width={348}
          height={133}
          priority
        />
      </a>
    </header>
  );
}
