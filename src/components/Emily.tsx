import type { AvatarProps } from "@/components/ui";
import { Avatar } from "@/components/ui";

export type EmilyProps = AvatarProps;

export const Emily = ({ ...props }: EmilyProps) => (
  <Avatar
    colorPalette="purple"
    name="Emily Steed"
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
