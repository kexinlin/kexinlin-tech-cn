import axios from "axios";

export const sendEmail = (data) => {
  console.log(data);
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  return axios
    .post(
      "https://service-4izxngpy-1257138158.gz.apigw.tencentcs.com/send_email",
      data,
      config
    )
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error.response);
    });
};
