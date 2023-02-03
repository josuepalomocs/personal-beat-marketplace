import { useContext } from "react";
import { FirebaseAuthContext } from "@/context/FirebaseAuthProvider";

interface CheckoutProps {}

export default function Checkout({}: CheckoutProps) {
  const { user } = useContext(FirebaseAuthContext);

  if (!user) {
    return <>User not logged in</>;
  }

  return <div>User logged in</div>;
}
