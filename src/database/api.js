import APICore from './apiCore';

//
// INIT
//
const api = new APICore(null,'/api/collections/get');

//
// INTERCEPTORS
//
/*
api.axios.interceptors.response.use( response => {
	return response;
}, error => {
	return Promise.reject(error);
});
*/

//
// MODEL FUNCTIONS
//
api.fn.getAll 		= ()				=> api.get('/posts/?per_page=100');
api.fn.getID 			= ( id ) 		=> api.get(`/posts/?filter[id]=${id}`);
api.fn.postForm 	= ( data ) 	=> api.post(`/posts`, data);

export default api.fn;