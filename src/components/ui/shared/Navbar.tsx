import React from "react";
import Container from "./Container";
import Link from "next/link";
import { buttonVariants } from "../button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-20 w-full border-b border-b-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <Container>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link className="flex z-50 font-bold capitalize" href="/">
            Documented <span className="text-primary">.</span>
          </Link>
          <div className="hidden items-center space-x-4 sm:flex">
            <Link href="/dashboard" className={buttonVariants({ variant: "ghost", size: "sm" })}>
              Dashboard
            </Link>
            <Link href="/pricing" className={buttonVariants({ variant: "ghost", size: "sm" })}>
              Pricing
            </Link>
            <Link href="/about" className={buttonVariants({ variant: "ghost", size: "sm" })}>
              About
            </Link>
            <Link href="/contact" className={buttonVariants({ variant: "ghost", size: "sm" })}>
              Contact
            </Link>
            <LoginLink className={buttonVariants({ variant: "ghost", size: "sm" })}>Sign In</LoginLink>
            <RegisterLink className={buttonVariants({ size: "sm" })}>
              Start for free <ArrowRight className="ml-1.5 h-5 w-5" />
            </RegisterLink>
          </div>
        </div>
      </Container>
    </nav>
  );
}
