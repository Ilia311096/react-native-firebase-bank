import { FC } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import tw from "tailwind-rn";

interface IButton {
  onPress: () => void;
  title: string;
  colors?: [string, string];
}
export const Button: FC<IButton> = ({
  onPress,
  title,
  colors = ["bg-yellow-300", "#FBBF24"],
}) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={colors[1]}
      style={tw(`${colors[0]} text-gray-800 rounded-xl w-full my-4 py-3`)}
    >
      <Text style={tw("text-center")}>{title}</Text>
    </TouchableHighlight>
  );
};
