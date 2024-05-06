import { Container } from "@/components";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <Container className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
        Chat with your <span className="text-primary">Documents</span> right away
      </h1>
      <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg mb-5">
        <span className="text-primary font-bold">Documented</span> allows you to have conversations with any PDF document. Simply upload your file and
        start asking questions right away.
      </p>
      <Link href="/dashboard" className={cn(buttonVariants())}>
        Get started <ArrowRight className="ml-2 h-5 w-5" />
      </Link>

      {/* Hero Section */}
      <section className="mt-8">
        <div className="my-8">
          <h2 className="lg:text-4xl text-2xl font-bold underline">Start chatting in seconds.</h2>
          <p className="font-semibold text-secondary-foreground text-xs lg:text-lg">What's more than just read your document, is chatting with it 😍</p>
        </div>

        <div className="flex gap-4">
          <div className="border-b-2 border-primary rounded-lg pb-2 p-4 shadow-lg">
            <span className="text-sm text-primary font-semibold">Step 1</span>
            <h3 className="font-bold text-md">Sign up for an account</h3>
            <p className="text-sm">It's just once click before the TNT explode</p>
          </div>
          <div className="border-b-2 border-primary rounded-lg pb-2 p-4 shadow-lg">
            <span className="text-sm text-primary font-semibold">Step 2</span>
            <h3 className="font-bold text-md">Upload your document</h3>
            <p className="text-sm">Drag and drop your document to the uploader</p>
          </div>
          <div className="border-b-2 border-primary rounded-lg pb-2 p-4 shadow-lg">
            <span className="text-sm text-primary font-semibold">Step 3</span>
            <h3 className="font-bold text-md">Start chatting</h3>
            <p className="text-sm">Ask questions, highlight text, and more</p>
          </div>
        </div>
      </section>
    </Container>
  );
}
