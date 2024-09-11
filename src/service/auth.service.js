import { Api } from "./baseurl";

const auth = async (arg, formData) => {
  try {
    const { data } = await Api.get(arg);
    const finder = data.find((el) => el.email === formData.email);
    if (!finder) {
      throw new Error("Email not correct");
    }
    const comparePassword = finder.password === formData.password;
    if (!comparePassword) {
      throw new Error("Password not correct");
    }

    return finder;
  } catch (e) {
    throw new Error(e.message);
  }
};
export default auth;
