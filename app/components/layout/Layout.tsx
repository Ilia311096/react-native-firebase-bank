import { FC } from "react";
import { ScrollView, View } from "react-native";
import tw from "tailwind-rn";

interface ILayout {
  isScrollView?: boolean;
  children: React.ReactNode;
}
export const Layout: FC<ILayout> = ({ children, isScrollView = true }) => {
  return (
    <View style={tw("h-full w-full bg-white pt-16")}>
      {isScrollView ? <ScrollView>{children}</ScrollView> : children}
    </View>
  );
};
