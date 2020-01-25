import axios from "axios";
import { BACKEND_URL } from "../config";
import ApiResponse from "./model/ApiResponse";

export default class Api {
  static getFromServer<T>(path: string): Promise<ApiResponse<T>> {
    return axios.get(`${BACKEND_URL}/${path}`, {
      withCredentials: true
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

  static postToServer<T>(path: string, body: any): Promise<ApiResponse<T>> {
    return axios.post(`${BACKEND_URL}/${path}`, JSON.stringify(body), {
        withCredentials: true
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
