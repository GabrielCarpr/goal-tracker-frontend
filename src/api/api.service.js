import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import AuthService from "@/api/AuthService";
import { API_URL } from "@/api/config";

const ApiService = {
	init() {
		Vue.use(VueAxios, axios);
		Vue.axios.defaults.baseURL = API_URL;
		Vue.axios.defaults.withCredentials = true;
	},

	setHeader() {
		Vue.axios.defaults.headers.common[
			"XSRF-TOKEN"
		] = AuthService.getXsrf();
	},

	get(resource, slug = "", params="") {
		return Vue.axios.get(`${resource}/${slug}`, params);
	},

	post(resource, params) {
		return Vue.axios.post(resource, params);
	},

	put(resource, params) {
		return Vue.axios.put(resource, params);
	},

	delete(resource) {
		return Vue.axios.delete(resource);
	}
};

export default ApiService;

export const GoalService = {
	get RSRC() {return "goals"},

	getAll() {
		ApiService.setHeader();
		return ApiService.get(this.RSRC);
	},

	getOne(id) {
		return ApiService.get(this.RSRC, id);
	},

	create(payload) {
		ApiService.setHeader();
		return ApiService.post(this.RSRC, payload);
	},

	update(id, payload) {
		ApiService.setHeader();
		return ApiService.put(`${this.RSRC}/${id}`, payload);
	},

	delete(id) {
		return ApiService.delete(`${this.RSRC}/${id}`);
	}
};

export const HistoryService = {
	get RSRC() {return "history"},

	getAll() {
		ApiService.setHeader();
		return ApiService.get(this.RSRC);
	},

	getOne(id) {
		return ApiService.get(this.RSRC, id);
	},

	create(goal_id, value) {
		ApiService.setHeader();
		return ApiService.post(this.RSRC, {goal_id: goal_id, value: value});
	},

	update(id, value) {
		ApiService.setHeader();
		return ApiService.put(`${this.RSRC}/${id}`, {value: value});
	},

	delete(id) {
		return ApiService.delete(`${this.RSRC}/${id}`);
	}
};
