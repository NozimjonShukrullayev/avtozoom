import axios from "axios";

import { toast } from "react-toastify";
import { GLOBALURL } from "../components";

const AxiosRequestId = async (path,id) => {
  try {
    const response = await axios.get(`${GLOBALURL}${path}?${id}`);
    return response.data;
  } catch (error) {
    const statusCode = error.status;
    if (statusCode !== undefined) {
      if (statusCode >= 500) {
        toast.error("Ошибка на стороне сервера");
      }
    } else if (error.message === "Network Error") {
      toast.error("Проверьте подключение к интернету.");
    }
  }
};
export default AxiosRequestId;
