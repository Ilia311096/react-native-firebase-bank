import { FC } from "react";
import { Text, View } from "react-native";
import tw from "tailwind-rn";
import { Padding } from "./Padding";

export const Heading: FC<{ text: string; isCenter?: boolean }> = ({
  text,
  isCenter = false,
}) => {
  return (
    <Padding>
      <Text
        style={tw(
          `text-2xl font-bold text-gray-800 ${isCenter ? "text-center" : ""}`
        )}
      >
        {text}
      </Text>
    </Padding>
  );
};
