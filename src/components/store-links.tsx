"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

const darkAppStoreUrl =
  "https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us?releaseDate=1761696000";
const lightAppStoreUrl =
  "https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/white/en-us?releaseDate=1761696000";

export const AppStoreLink = ({ link }: { link: string }) => {
  const { theme } = useTheme();

  return (
    <a href={link} style={{ display: "inline-block" }}>
      <Image
        unoptimized
        src={theme === "dark" ? darkAppStoreUrl : lightAppStoreUrl}
        alt="Download on the App Store"
        width={"246"}
        height={"82"}
        style={{
          width: "246px",
          height: "82px",
          verticalAlign: "middle",
          objectFit: "contain",
        }}
      />
    </a>
  );
};
