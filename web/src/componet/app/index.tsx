import React, {useEffect, useState} from 'react';
import PPT from '../ppt';
import './index.css';
import Excel from "../excel";
import 'antd/dist/antd.css';
import * as queryString from "querystring";
import {fileConversion} from "./api";


const App = () => {
    const str = window.location.search.substr(1)
    const [html, setHtml] = useState<string>();
    const [fileUrl, setFileUrl] = useState<string>();
    const [extname, setExtname] = useState<string>();
    const {url} = queryString.parse(str);

    const init = async () => {
        const res = await fileConversion(url.toString());
        const {success, type, ...others} = res.data;
        if (!success) {
            console.error('转换错误');
            return;
        }
        setExtname(others.extname);

        if (others.html) {
            setHtml(others.html)
        }
        if (others.fileUrl) {
            setFileUrl(others.fileUrl)
        }
    }

    useEffect(() => {
        init();
    }, [])

    const renderContent = () => {
        if (extname?.includes('.xls')) {
            return (<Excel html={html}/>)
        }
        if (extname?.includes('.ppt')) {
            return fileUrl ? (<PPT fileUrl={fileUrl}/>) : null
        }
        return null;
    }

    return (
        <div className="App">
            {renderContent()}
        </div>
    );
}

export default App;
