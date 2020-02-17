import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import AuthService from "@/api/AuthService";
import { API_URL } from "@/api/config";

const ApiService = {
	init() {
		Vue.use(VueAxios, axios);
		Vue.axios.defaults.baseURL = API_URL;
	},

	setHeader() {
		Vue.axios.defaults.headers.common[
			"XSRF-TOKEN"
		] = AuthService.getXsrf();
	},

	get(resource, slug = "", params="") {
		return Vue.axios.get(`${resource}/${slug}`, params).catch(error => {
			throw new Error(`API error [GET] ${error}`);
		});
	},

	post(resource, params) {
		return Vue.axios.post(resource, params);
	},

	put(resource, slug="", params="") {
		return Vue.axios.post(resource, slug, params).catch(error => {
			throw new Error(`API error [PUT] ${error}`);
		});
	},

	delete(resource, slug="", params="") {
		return Vue.axios.delete(resource, slug, params).catch(error => {
			throw new Error(`API error [DELETE] ${error}`);
		});
	}
};

export default ApiService;

export const GoalService = {
	get RSRC() {return "goals"},

	getAll() {
		return ApiService.get(this.RSRC);
	},

	getOne(id) {
		return ApiService.get(this.RSRC, id);
	},

	create(payload) {
		return ApiService.post(this.RSRC, "", payload);
	},

	update(id, payload) {
		return ApiService.put(this.RSRC, id, payload);
	},

	delete(id) {
		return ApiService.delete(this.RSRC, id);
	}
};

export const HistoryService = {
	get RSRC() {return "history"},

	getAll() {
		return ApiService.get(this.RSRC);
	},

	getOne(id) {
		return ApiService.get(this.RSRC, id);
	},

	create(goal_id, value) {
		return ApiService.post(this.RSRC, "", {value: value, goal_id: goal_id});
	},

	update(id, value) {
		return ApiService.put(this.RSRC, id, {value: value});
	},

	delete(id) {
		return ApiService.delete(this.RSRC, id);
	}
};