import axios from "axios";
import { BACKEND_URL } from "../config";

export default class Api {
  static getFromServer(path, withCredentials=false) {
    return axios.get(`${BACKEND_URL}/${path}`, {
				withCredentials: withCredentials
			}) // TODO: change default path
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
	
	static postToServer(path, body) {
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
