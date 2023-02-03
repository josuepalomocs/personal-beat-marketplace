import { createContext, ReactNode } from "react";
import { User } from "@firebase/auth";
import useFirebaseAuth from "@/hooks/useFirebaseAuth";

interface FirebaseAuthProviderProps {
  children: ReactNode;
}

interface IFirebaseAuthContext {
  user: User | null;
}

export const FirebaseAuthContext = createContext<IFirebaseAuthContext>({
  user: null,
});

export default function FirebaseAuthProvider({
  children,
}: FirebaseAuthProviderProps) {
  const { user } = useFirebaseAuth();

  return (
    <FirebaseAuthContext.Provider value={{ user }}>
      {children}
    </FirebaseAuthContext.Provider>
  );
}
