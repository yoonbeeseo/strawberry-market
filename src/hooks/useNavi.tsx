//! router/navigation   헷갈리지 않아도 됨

"use client";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function useNavi() {
  const router = useRouter();
  const navi = useCallback(
    (path: string) => {
      router.push(path, { scroll: true });
    },
    [router]
  );
  return { navi, router };
}
