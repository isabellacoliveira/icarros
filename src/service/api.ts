import axios from 'axios'; 

export const Api = axios.create({
    baseURL: "http://localhost:3000/"
})

Api.defaults.headers.post['Content-Type'] = 'application/json'
Api.defaults.headers.common['Accept'] = 'application/json'

export const http = {
	get: Api.get,
	post: Api.post,
	put: Api.put,
	patch: Api.patch,
	delete: Api.delete,
}
