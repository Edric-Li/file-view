import axios from "axios";
import _ from 'lodash';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:7001'
});

/**
 * Convert normal objects to formData
 * @param parameter
 */
function conversionFormData(parameter: Record<string, any>) {
    const formData = new FormData();
    _.forEach(parameter, (value, key) => {
        formData.append(key, value);
    });
    return formData;
}

interface Response {
    success: boolean,
    type: string,
    extname: string;
    html: string;
    fileUrl: string
}

const fileConversion = (url: string) => axiosInstance.get<Response>('/fileConversion', {params: {url}})

const uploadFile = (file: File) => axiosInstance.post('/upload', conversionFormData({file}))

export {
    fileConversion,
    uploadFile
}
