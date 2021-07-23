import React, {useEffect, useState} from 'react';
import PPT from '../ppt';
import './index.css';
import Excel from "../excel";
import 'antd/dist/antd.css';
import * as queryString from "querystring";
import {fileConversion} from "../../apis";
import {Spin} from "antd";
import Iframe from "../iframe";
import Home from "../home";

const OfficeType = [
    'xls',
    'xlsx',
    'doc',
    'docx',
    'ppt',
    'pptx',
];

const VideoType = ['flv', 'ts', 'asf'];

const TypeOfFileToBeTranscode = [
    ...OfficeType,
    ...VideoType,
];

const filterFileType = (fileUrl: string) => {
    const lowerCaseFileUrl = fileUrl.toLowerCase();
    for (let i = 0; i < TypeOfFileToBeTranscode.length; i++) {
        if (lowerCaseFileUrl.includes(TypeOfFileToBeTranscode[i])) {
            return true;
        }
    }
    return false;
}

const App = () => {
    const str = window.location.search.substr(1)
    const [html, setHtml] = useState<string>();
    const [fileUrl, setFileUrl] = useState<string>();
    const [extname, setExtname] = useState<string>();
    const url = queryString.parse(str)?.url?.toString();

    const init = async () => {

        if (!url) {
            return;
        }
        // todo
        if (!filterFileType(url)) {
            setFileUrl(url)
            return;
        }
        const res = await fileConversion(url);
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
        if (!url) {
            return (<Home/>)
        }
        if (extname?.includes('.xls')) {
            return (<Excel html={html}/>)
        }
        if (extname?.includes('.ppt')) {
            return fileUrl ? (<PPT fileUrl={fileUrl}/>) : null
        }
        if (fileUrl) {
            return (<Iframe fileUrl={fileUrl}/>)
        }
        return <Spin/>;
    }

    return (
        <div className="App">
            {renderContent()}
        </div>
    );
}

export default App;
