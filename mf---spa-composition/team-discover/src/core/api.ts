import axios from "axios";
import ApiResponse from "./model/ApiResponse";
import { BACKEND_URL } from "../config";

export default class Api {
  static getFromServer<T>(path: string, withCredentials=false): Promise<ApiResponse<T>> {
    return axios.get(`${BACKEND_URL}/${path}`, {
				withCredentials: withCredentials
			})
      .then(resp => {
        return {
          success: true,
          data: resp.data
        };
      })
      .catch(err => {
        console.log(err)
        return {
          success: false,
          data: undefined
        }
      })
  }
}
