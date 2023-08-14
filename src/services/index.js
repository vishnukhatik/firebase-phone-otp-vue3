import Axios from "axios";

const $API_BASE_URL = "https://jsonplaceholder.typicode.com/";
// import Router from '../router/index'

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export function isValidResponse(resp) {
  return resp && resp.status === 200 && resp.data.status === 1;
}
console.log("$API_BASE_URL", $API_BASE_URL);

const config = Axios;
export const CASHTRAX = config.create({
  //   baseURL: process.env.VUE_APP_API_LOCATION !== undefined ? $API_BASE_URL : $API_BASE_URL
  baseURL: $API_BASE_URL,
});

CASHTRAX.interceptors.request.use((config) => {
  const token = localStorage.getItem("cashtrax:access_token");

  config.headers.authorization = `${token}`;
  config.headers["Content-Type"] = "application/json";
  return config;
});

export const methods = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
  PATCH: "PATCH",
};

export class APIError {
  message;

  constructor(msg) {
    this.message = msg;
  }

  get getMessage() {
    return this.message;
  }
}

export const serviceMaker = async (url, method, data = {}) => {
  try {
    let result;
    const APIInstance = CASHTRAX;

    switch (method) {
      case "GET": {
        result = await APIInstance.get(url);
        break;
      }
      case "POST": {
        result = await APIInstance.post(url, data);
        break;
      }
      case "PUT": {
        result = await await APIInstance.put(url, data);
        break;
      }
      case "PATCH": {
        result = await await APIInstance.patch(url, data);
        break;
      }
      case "DELETE": {
        result = await APIInstance.delete(url);
        break;
      }
      default: {
        // eslint-disable-next-line no-throw-literal
        throw "InvalidMethod";
      }
    }
    if (!isValidResponse) {
      // eslint-disable-next-line no-throw-literal
      throw "InvalidResponse";
    }
    return result.data;
  } catch (err) {
    if (err.response.status === 401) {
      console.log("error", err.response.data);
      setTimeout(() => {
        location.reload();
      }, 1500);
    }
    // tslint:disable-next-line:no-console
    throw new APIError(
      err.response.data ? err.response.data : "Something went wrong"
    );
  }
};
