import axios from "./axios";

export const loginUser = async (params: AccountProp) => {
  try {
    const response = await axios.post("/users/login", params, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(error as string);
  }
};
