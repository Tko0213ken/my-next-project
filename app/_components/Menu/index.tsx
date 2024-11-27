"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import cx from "classnames";
import Styles from "./index.module.css";

export default function Menu() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const open = () => setOpen(true);
  const close = () => setOpen(false);

  return (
    <div>
      <nav className={cx(Styles.nav, isOpen && Styles.open)}>
        <ul className={Styles.items}>
          <li>
            <Link href="/news">ニュース</Link>
          </li>
          <li>
            <Link href="/members">メンバー</Link>
          </li>
          <li>
            <Link href="/contact">お問合せ</Link>
          </li>
        </ul>

        <button className={cx(Styles.button, Styles.close)} onClick={close}>
          <Image src="/close.svg" alt="閉じる" width={24} height={24} />
        </button>
      </nav>
      <button className={Styles.button} onClick={open}>
        <Image src="/menu.svg" alt="メニュー" width={24} height={24} />
      </button>
    </div>
  );
}
