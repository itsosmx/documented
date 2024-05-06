"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { trpc } from "@/app/_trpc/client";

export default function AuthCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const origin = searchParams.get("origin") ?? "/";

  const { data } = trpc.authCallback.useQuery(undefined, {
    onSuccess: () => {
      router.push(origin);
    },
  });

  return <div>AuthCallback</div>;
}
