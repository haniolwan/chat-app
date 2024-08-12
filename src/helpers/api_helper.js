import axios from "axios"
import { store } from "../redux/store"
import { resetUser } from "../redux/auth/authSlice"

// const { REACT_APP_URL } = process.env;

const appAxios = axios

// default
appAxios.defaults.baseURL = "http://localhost"
// content type
appAxios.defaults.headers.post["Content-Type"] = "application/json"

// content type
const authUser = localStorage.getItem("authUser") ?? "{}"
const token = JSON.parse(authUser) ? JSON.parse(authUser)?.Login : null
// const { token_type, access_token } = token;
if (token)
  appAxios.defaults.headers.common["Authorization"] = token?.token_type + " " + token?.access_token

// intercepting to capture errors
appAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    const { status } = error.response
    if (status === 401) {
      store.dispatch(resetUser())
    }
    return Promise.reject(error)
  }
)
/**
 * Sets the default authorization
 * @param {*} token
 */
const setAuthorization = (token) => {
  appAxios.defaults.headers.common["Authorization"] = "Bearer " + token
}

class APIClient {
  /**
   * Fetches data from given url
   */

  get = (url, config = {}) => {
    return appAxios.get(url, config)
  }
  /**
   * post given data to url
   */
  create = (url, data, config = {}) => {
    return appAxios.post(url, data, config)
  }
  /**
   * Updates data
   */
  update = (url, data) => {
    return appAxios.patch(url, data)
  }

  put = (url, data) => {
    return appAxios.put(url, data)
  }
  /**
   * Delete
   */
  delete = (url, config) => {
    return appAxios.delete(url, { ...config })
  }
}
const getLoggedUser = () => {
  const user = localStorage.getItem("authUser")
  if (!user) {
    return null
  } else {
    return JSON.parse(user)
  }
}

export { APIClient, setAuthorization, getLoggedUser }
