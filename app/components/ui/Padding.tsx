import { FC } from "react";
import { Text, View } from "react-native";
import tw from "tailwind-rn";

export const Padding: FC<{ children: React.ReactNode; style?: any }> = ({
  children,
  style,
}) => {
  return <View style={{ ...tw("px-4"), ...style }}>{children}</View>;
};
