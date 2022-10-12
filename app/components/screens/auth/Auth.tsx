import { FC, useState } from "react";
import { Pressable, Text, View } from "react-native";
import tw from "tailwind-rn";
import { useAuth } from "../../../hooks/useAuth";
import { Button } from "../../ui/Button";
import { Field } from "../../ui/Field";
import { Loader } from "../../ui/Loader";

interface IData {
  email: string;
  password: string;
}

export const Auth: FC = () => {
  const [data, setData] = useState<IData>({} as IData);
  const { isLoading, register, login } = useAuth();
  const [isReg, setIsReg] = useState(false);
  const authHandler = async () => {
    const { email, password } = data;
    if (isReg) await register(email, password);
    else await login(email, password);
    setData({} as IData);
  };
  return (
    <View style={tw("h-full w-full bg-white pt-16")}>
      <View style={tw("mx-5 justify-center items-center h-full")}>
        <View style={tw("w-9/12")}>
          <Text style={tw("text-center text-gray-800 text-2xl font-bold mb-2")}>
            {isReg ? "Sing up" : "Sing in"}
          </Text>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Field
                isSecure={false}
                val={data.email}
                placeholder={"enter email"}
                onChange={(val) => setData({ ...data, email: val })}
              />
              <Field
                isSecure={true}
                val={data.password}
                placeholder={"enter password"}
                onChange={(val) => setData({ ...data, password: val })}
              />
              <Button onPress={authHandler} title={"Let's go"} />
              <Pressable onPress={() => setIsReg(!isReg)}>
                <Text style={tw("opacity-30 text-right text-gray-800 text-sm")}>
                  {isReg ? "Login" : "Register"}
                </Text>
              </Pressable>
            </>
          )}
        </View>
      </View>
    </View>
  );
};
