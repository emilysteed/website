import { Metadata } from "next";

import { NAME, URL as URL_CONSTANT } from "@/constants";

export type CreateMetadataProps = Partial<Metadata>;

export const createMetadata = ({
  description,
  title,
  ...props
}: CreateMetadataProps): Metadata => ({
  description: description,
  metadataBase: new URL(URL_CONSTANT),
  openGraph: {
    description: description || "",
    images: [
      {
        height: 630,
        url: `/api/og?description=${description || ""}&title=${title || ""}`,
        width: 1200,
      },
    ],
    locale: "en-US",
    siteName: NAME,
    title: title || "",
    type: "website",
    url: URL_CONSTANT,
  },
  robots: {
    follow: true,
    index: true,
  },
  title: title,
  twitter: {
    card: "summary_large_image",
    title: title || "",
  },
  ...props,
});
