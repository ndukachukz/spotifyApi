import { firebaseApp } from "../config";
import { ref, set } from "firebase/database";

const writeDbData = (
  key: string,
  value: any,
  onCompleteCb: (params: any) => any,
  onErrorCm: (params: any) => any
) => {
  const db = firebaseApp().database;
  set(ref(db, key), value).then(onCompleteCb).catch(onErrorCm);
};

export default writeDbData;
