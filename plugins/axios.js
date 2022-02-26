export default function ({ $axios, redirect, $accessor }) {
	$axios.onRequest(config => {
	  	config.headers.common['Authorization'] = `Bearer token`;
	  	config.headers.common['Accept'] = `application/json`;
	})

	$axios.setToken($accessor.session.getToken, 'Bearer')
}