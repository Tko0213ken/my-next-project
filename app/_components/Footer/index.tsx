import Image from "next/image";
import Link from "next/link";
import Styles from "./index.module.css";

export default function footer() {
  return (
    <footer className={Styles.footer}>
      <nav className={Styles.nav}>
        <ul className={Styles.items}>
          <li className={Styles.item}>
            <Link href="/news">ニュース</Link>
          </li>
          <li className={Styles.item}>
            <Link href="/members">メンバー</Link>
          </li>
          <li className={Styles.item}>
            <Link href="/contact">お問い合わせ</Link>
          </li>
        </ul>
      </nav>
      <p className={Styles.cr}>© SIMPLE. All Rights Reserved 2024</p>
    </footer>
  );
}
