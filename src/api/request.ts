import axios from "axios";

const request = axios.create({
  baseURL: "",
  timeout: 8000,
});

// http request 拦截器
request.interceptors.request.use(
  (config) => {
    config.headers = {
      "Content-Type": "application/json",
      ...config.headers,
    };
    return config;
  },
  (error) => {
    alert({ content: error.message });
    return error;
  }
);

// http response 拦截器
request.interceptors.response.use(
  (response) => {
    if (response.status == 200) {
      return response;
    } else {
      alert({ content: response });
    }
  },
  (error) => {
    console.log(error);
    if (!error.response) {
      alert({ content: error.message });
      return;
    }
    switch (error.response.status) {
      case 500:
        alert({ content: error.message });
        break;
      case 404:
        alert({ content: error.message });
        break;
      default:
        alert({ content: error.message });
        break;
    }
    return error;
  }
);

export default request;
