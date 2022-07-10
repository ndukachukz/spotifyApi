import { firebaseApp } from "../config/index";
import { createUserWithEmailAndPassword, User } from "firebase/auth";

async function register(email: string, password: string): Promise<User> {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      firebaseApp().auth,
      email,
      password
    );
    return userCredentials.user;
  } catch (error: any) {
    throw new Error(error);
  }
}

export default register;
