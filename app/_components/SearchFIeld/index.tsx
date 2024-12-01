"use client";

import Image from "next/image";
import Styles from "./index.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SearchFieldCompornent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = e.currentTarget.elements.namedItem("q");
    if (q instanceof HTMLInputElement) {
      const params = new URLSearchParams();
      params.set("q", q.value.trim());
      router.push(`/news/search?${params.toString()}`);
    }
  };

  return (
    <form className={Styles.form} onSubmit={handleSubmit}>
      <label className={Styles.search}>
        <Image
          src="/search.svg"
          alt="検索"
          width={16}
          height={16}
          loading="eager"
        />
        <input
          type="text"
          name="q"
          defaultValue={searchParams.get("q") ?? undefined}
          placeholder="キーワードを入力"
          className={Styles.searchInput}
        />
      </label>
    </form>
  );
}

export default function SearchField() {
  return (
    <Suspense>
      <SearchFieldCompornent />
    </Suspense>
  );
}
