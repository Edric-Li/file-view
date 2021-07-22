import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:7001'
});

interface Response {
    success:boolean,
    type:string,
    extname:string;
    html:string;
    fileUrl:string
}

const fileConversion = (url: string) => axiosInstance.get<Response>('/fileConversion', {params: {url}})

export {fileConversion}
