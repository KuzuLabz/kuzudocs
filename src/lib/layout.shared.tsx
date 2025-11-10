import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { BookIcon, BookText } from "lucide-react";
import Image from "next/image";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    githubUrl: "https://github.com/KuzuLabz",
    nav: {
      title: (
        <>
          <Image src={"/favicon.png"} width={24} height={24} alt="logo" />
          KuzuLabz
        </>
      ),
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [
      {
        icon: <BookText />,
        text: "Projects",
        url: "/docs",
      },
      {
        icon: <BookIcon />,
        text: "Blog",
        url: "/blog",
        // secondary items will be displayed differently on navbar
        secondary: false,
      },
    ],
  };
}
