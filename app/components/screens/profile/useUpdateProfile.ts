import { onAuthStateChanged, User } from "firebase/auth";
import { createContext, useEffect, useMemo, useState, FC } from "react";
import { Alert } from "react-native";
import { db } from "../../../firebase";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { useAuth } from "../../../hooks/useAuth";

export const useUpfateProfile = (name: string, docId: string) => {
  const { user } = useAuth();

  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const updateProfile = async () => {
    setIsLoading(true);
    if (!user) return;
    try {
      const docRef = doc(db, "users", docId);
      await updateDoc(docRef, {
        displayName: name,
      });
      setIsSuccess(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    } catch (error: any) {
      Alert.alert("error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { updateProfile, isLoading, isSuccess };
};
