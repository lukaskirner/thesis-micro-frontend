// team-product api.js
import axios from "axios";
import { BACKEND_URL } from "../config";

export default class Api {
	static getFromServer(path, withCredentials = false) {
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

