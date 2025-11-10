import { getPageImage, source } from "@/lib/source";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { getMDXComponents } from "@/mdx-components";
import { PlatformChip } from "@/components/platform-chip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAndroid,
  faApple,
  faAppStoreIos,
  faWindows,
  faLinux,
} from "@fortawesome/free-brands-svg-icons";
import { Globe } from "lucide-react";
import { LLMCopyButton, ViewOptions } from "@/components/page-actions";

const platformIcons = {
  android: (
    <PlatformChip
      title="Android"
      icon={<FontAwesomeIcon icon={faAndroid} size="sm" color="#34aa54" />}
    />
  ),
  ios: (
    <PlatformChip
      title={"iOS"}
      icon={<FontAwesomeIcon icon={faAppStoreIos} size="sm" color="#0070c9" />}
    />
  ),
  mac: (
    <PlatformChip
      title={"MacOS"}
      icon={<FontAwesomeIcon icon={faApple} size="sm" color="#fff" />}
    />
  ),
  web: (
    <PlatformChip title={"Web"} icon={<Globe size="sm" color="#1082ebff" />} />
  ),
  windows: (
    <PlatformChip
      title={"Windows"}
      icon={<FontAwesomeIcon icon={faWindows} size="sm" color="#00BCF2" />}
    />
  ),
  linux: (
    <PlatformChip
      title="Linux"
      icon={<FontAwesomeIcon icon={faLinux} size="sm" />}
    />
  ),
};
const validPlatforms = Object.keys(platformIcons);

const Platforms = ({ platforms }: { platforms?: string[] }) => {
  return (
    platforms && (
      <div
        className="mb-8"
        style={{ display: "flex", flexDirection: "row", gap: 12 }}
      >
        {platforms.map(
          (plat, idx) =>
            validPlatforms.includes(plat) && (
              <div key={idx}>
                {platformIcons[plat as keyof typeof platformIcons]}
              </div>
            )
        )}
      </div>
    )
  );
};

export default async function Page(props: PageProps<"/docs/[...slug]">) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDXContent = page.data.body;

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      lastUpdate={
        page.data.lastModified ? new Date(page.data.lastModified) : undefined
      }
      tableOfContent={{ style: "clerk" }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className={page.data.platforms ? "mb-0" : "mb-8"}>
        {page.data.description}
      </DocsDescription>
      <Platforms platforms={page.data.platforms} />
      {!params.slug.includes("apps") && !params.slug.includes("games") && (
        <div className="flex flex-row gap-2 items-center border-b pt-2 pb-6">
          <LLMCopyButton markdownUrl={`${page.url}.mdx`} />
          <ViewOptions
            markdownUrl={`${page.url}.mdx`}
            githubUrl={`https://github.com/KuzuLabz/kuzudocs/blob/dev/apps/docs/content/docs/${page.path}`}
          />
        </div>
      )}
      <DocsBody>
        <MDXContent
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  props: PageProps<"/docs/[...slug]">
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
  };
}
