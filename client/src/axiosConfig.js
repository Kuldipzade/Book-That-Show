import axios from "axios";

const instance = axios.create({
  baseURL:
    window.location.hostname === "localhost"
      ? process.env.BOOKTHATSHOW_LOCAL_PATH
      : process.env.BOOKTHATSHOW_API, // Set your default base URL here condition is imosed on live and local port
  timeout: 5000, // Set the default timeout in milliseconds
  // Add any other default configurations you need
});

export default instance;
