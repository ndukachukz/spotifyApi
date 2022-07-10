const getReturnedParams = (hash: string) => {
  if (!hash) throw new Error("Pass returned spotify login url");
  const params = hash.split("#")[1];
  const accessToken = params.split("&")[0].split("=")[1];

  const tokenType = params.split("&")[1].split("=")[1];
  const expiresIn = params.split("&")[2].split("=")[1];

  return {
    accessToken,
    tokenType,
    expiresIn,
  };
};

export default getReturnedParams;
