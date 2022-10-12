import { useNavigation } from "@react-navigation/native";
import { FC } from "react";
import { Text, Touchable, TouchableOpacity, View } from "react-native";
import tw from "tailwind-rn";
import { Avatar } from "../../ui/Avatar";
import { Padding } from "../../ui/Padding";
import { Entypo } from "@expo/vector-icons";
import { useProfile } from "../profile/useProfile";
import { Loader } from "../../ui/Loader";

export const Header: FC = () => {
  const { isLoading, name } = useProfile();
  const { navigate } = useNavigation();
  return isLoading ? (
    <Loader />
  ) : (
    <Padding style={tw("flex-row items-center")}>
      <Avatar name={name} />
      <TouchableOpacity
        style={tw("flex-row items-end")}
        onPress={() => navigate("Profile")}
      >
        <Text style={tw("text-gray-800 text-2xl font-bold")}>{name}</Text>
        <Entypo
          name="chevron-small-right"
          size={28}
          style={tw("text-gray-800")}
        />
      </TouchableOpacity>
    </Padding>
  );
};
