import type { ReactNode } from "react";

export default function ComingSoonLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <main>{children}</main>;
}
