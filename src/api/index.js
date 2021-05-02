import {request} from '../lib/request';


const API = {
    getPhotos: (data) => request('get', '/photos', data),
    searchPhotos : (data) => request('get', '/search', data),
    getTopics: (data) => request('get', '/topics', data),
    getTopicBySlug: (slug) => request('get', `/topics/${slug}`),
    getPhotoById:(id) => request('get', `photos/${id}`),
    getPhotoRelated:(id) => request('get', `photos/${id}/related`),
}


export default API;