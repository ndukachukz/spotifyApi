import { firebaseApp } from "../config";
import { ref, set, query, } from "firebase/database";

const writeDbData = (
  key: string,
  value: any,
  onCompleteCb: (params: any) => any,
  onErrorCm: (params: any) => any
) => {
  const db = firebaseApp().database;

  const _ref = ref(db, key);

  set(_ref, value).then(onCompleteCb).catch(onErrorCm);
};

export default writeDbData;
