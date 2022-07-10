import { User } from "firebase/auth";

export interface AuthField {
  email: string;
  password: string;
}

export default User;
