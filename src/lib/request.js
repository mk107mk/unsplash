import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 6000,
    headers: {
        Authorization: 'Client-ID '  + process.env.REACT_APP_CLIENT_ID
    }
})

export const request = (method, url, data) => {

    const config = {
        url,
        method,
    };

    if(method === 'get'){
        config.params = data
    }else{
        config.data = data
    }

    try {
        return axiosInstance(config)
    }catch(e){
        return e;
    }


}


