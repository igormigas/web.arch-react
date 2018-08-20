import axios from 'axios';
import axiosCache from './cache/axiosCache';

const GET_FROM_LOCAL = false;

const axiosBaseURL = GET_FROM_LOCAL
	? 'http://localhost/wordpress/wp-json/wp/v2'
	: 'http://api1.migasiewicz.pl/wp-json/wp/v2d';
const instance = axios.create({
	baseURL: axiosBaseURL
});

instance.interceptors.response.use( response => {
	const url = response.config.url;
	const suffix = url.replace(axiosBaseURL, '');
	axiosCache.set(
		suffix,
		response.data
	);
	return response;
}, error => {
	return Promise.reject(error);
});

export default instance;