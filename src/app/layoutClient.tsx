// components/LayoutClient.tsx
"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import type { ReactNode } from "react";
import { navMenus } from "@/data/navMenus";

const GoogleAnalytics = dynamic(
  () => import("@/components/common/GoogleAnalytics"),
  { ssr: false }
);
const WebVitals = dynamic(() => import("@/components/common/WebVitals"), {
  ssr: false,
});
const FloatingNavbar = dynamic(
  () => import("@/components/navbar/FloatingNavbar")
);
const ScrollToTop = dynamic(() => import("@/components/common/ScrollToTop"));

const isDebug = process.env.NODE_ENV === "development";

export default function LayoutClient({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isComingSoon = pathname.startsWith("/coming-soon");

  return (
    <div className={isDebug ? "debug-screens" : ""}>
      {!isDebug ? <GoogleAnalytics /> : null}
      {isDebug ? <WebVitals /> : null}

      <main>{children}</main>

      {!isComingSoon && (
        <>
          <FloatingNavbar className="app_nav" navItems={navMenus} />
          <ScrollToTop />
        </>
      )}
    </div>
  );
}
