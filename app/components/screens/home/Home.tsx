import { FC } from "react";
import { Text } from "react-native";
import { Layout } from "../../layout/Layout";
import { Header } from "./Header";
import { Padding } from "../../ui/Padding";
import { Loader } from "../../ui/Loader";
import { Field } from "../../ui/Field";
import { Button } from "../../ui/Button";
import { useAuth } from "../../../hooks/useAuth";
import { logout } from "../../../firebase";

export const Home: FC = () => {
  return (
    <Layout>
      <Header />
    </Layout>
  );
};
