import { NAME } from "@/constants";

import type { AvatarProps } from "./ui";
import { Avatar } from "./ui";

export type EmilyProps = AvatarProps;

export const Emily = ({ ...props }: EmilyProps) => (
  <Avatar
    colorPalette="purple"
    name={NAME}
    outlineColor="colorPalette.500"
    outlineOffset="2"
    outlineStyle="solid"
    outlineWidth="medium"
    shape="rounded"
    src="emily.png"
    _dark={{
      outlineColor: "colorPalette.700",
    }}
    {...props}
  />
);
