import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}
export default function Container({ children, ...props }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-screen-xl px-2.5 md:px-20", props.className)} {...props}>
      {children}
    </div>
  );
}
