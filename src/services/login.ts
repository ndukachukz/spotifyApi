import { signInWithEmailAndPassword, User } from "firebase/auth";
import { firebaseApp } from "../config/index";

async function login(email: string, password: string): Promise<User> {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      firebaseApp().auth,
      email,
      password
    );
    return userCredentials.user;
  } catch (error: any) {
    throw new Error(error);
  }
}

export default login;
