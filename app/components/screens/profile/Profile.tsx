import { FC } from "react";
import { Text, View } from "react-native";
import { Layout } from "../../layout/Layout";
import { useProfile } from "./useProfile";
import { Heading } from "../../ui/Heading";
import { Padding } from "../../ui/Padding";
import { Loader } from "../../ui/Loader";
import { Field } from "../../ui/Field";
import { Button } from "../../ui/Button";
import tw from "tailwind-rn";
import { useAuth } from "../../../hooks/useAuth";
import { useUpfateProfile } from "./useUpdateProfile";

export const Profile: FC = () => {
  const { logout } = useAuth();

  const { isLoading: isProfileLoading, name, setName, profile } = useProfile();
  const { isLoading, isSuccess, updateProfile } = useUpfateProfile(
    name,
    profile.docId
  );
  return (
    <Layout>
      <Heading text={"Profile"} isCenter={true} />
      <Padding>
        {isSuccess && (
          <View style={tw("bg-green-500 p-3 py-2 rounded-lg")}>
            <Text style={tw("text-white text-center")}>updated</Text>
          </View>
        )}
        {isProfileLoading || isLoading ? (
          <Loader />
        ) : (
          <>
            <Field
              isSecure={false}
              onChange={setName}
              val={name}
              placeholder={"enter name"}
            />
            <Button onPress={updateProfile} title={"update profile"} />
            <Button
              onPress={logout}
              title={"logout"}
              colors={["bg-gray-200", "#D6D8DB"]}
            />
          </>
        )}
      </Padding>
    </Layout>
  );
};
