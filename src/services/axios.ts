import axios from "axios";
const BASE_URL = "https://sys01.midvietnam.net/api/v1";

export default axios.create({
  baseURL: BASE_URL,
});

