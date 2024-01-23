import axios from "axios";

const URL: string = "http://localhost:3210/single";
const URL1: string = "http://localhost:3210/multiple";

export const uploadSingleImage = async (data: any) => {
  try {
    const config: any = {
      "Content-Type": "multipart/form-data",
    };
    return axios.post(URL, data, config).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);

    return error;
  }
};
export const uploadMultipleImage = async (data: any) => {
  try {
    const config: any = {
      "Content-Type": "multipart/form-data",
    };
    return await axios.post(URL1, data, config).then((res) => {
      return res.data.picture;
    });
  } catch (error) {
    console.log(error);

    return error;
  }
};
