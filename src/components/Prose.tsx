import clsx from "clsx";
import React from "react";

export function Prose({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        className,
        "prose prose-sm prose-blue max-w-none prose-p:text-secondary prose-headings:text-primary",
      )}
    >
      {children}
    </div>
  );
}
