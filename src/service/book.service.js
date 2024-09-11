import { Api } from "./baseurl";

export const GetBookData = async (arg) => {
  try {
    const { data } = await Api.get(arg);

    return data;
  } catch (e) {
    throw new Error(e.message);
  }
};
