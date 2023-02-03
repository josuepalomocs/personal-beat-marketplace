import { useEffect, useState } from "react";
import { User } from "@firebase/auth";
import { auth } from "@/lib/firebase";

export default function useFirebaseAuth() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  return { user };
}
