import {
  collection,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useMemo, useState } from "react";
import { db } from "../../../firebase";
import { useAuth } from "../../../hooks/useAuth";

interface IProfile {
  _id: string;
  displayName: string;
  docId: string;
}

export const useProfile = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const [profile, setProfile] = useState<IProfile>({} as IProfile);
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "users"), where("_id", "==", user?.uid), limit(1)),
        (snapshop) => {
          const profile = snapshop.docs.map((d) => ({
            ...(d.data() as IProfile),
            docId: d.id,
          }))[0];
          setProfile(profile);
          setName(profile.displayName);
          setIsLoading(false);
        }
      ),
    []
  );

  const value = { profile, isLoading, name, setName };

  return value;
};
