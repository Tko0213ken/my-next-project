import Image from "next/image";
import Styles from "./index.module.css";

export default function footer() {
  return (
    <footer className={Styles.footer}>
      <nav className={Styles.nav}>
        <ul className={Styles.items}>
          <li className={Styles.item}>
            <a href="/news">ニュース</a>
          </li>
          <li className={Styles.item}>
            <a href="/members">メンバー</a>
          </li>
          <li className={Styles.item}>
            <a href="/contact">お問い合わせ</a>
          </li>
        </ul>
      </nav>
      <p className={Styles.cr}>© SIMPLE. All Rights Reserved 2024</p>
    </footer>
  );
}
