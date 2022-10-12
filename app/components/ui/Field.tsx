import { FC } from "react";
import { TextInput } from "react-native";
import tw from "tailwind-rn";

interface IField {
  onChange: (val: string) => void;
  val: string;
  placeholder: string;
  isSecure: boolean;
}
export const Field: FC<IField> = ({ isSecure, onChange, placeholder, val }) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChange}
      value={val}
      secureTextEntry={isSecure}
      autoCapitalize="none"
      showSoftInputOnFocus={true}
      style={tw("rounded-xl bg-gray-100 mt-3 p-3 w-full")}
    ></TextInput>
  );
};
