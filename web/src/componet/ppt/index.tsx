import React, {useEffect, useState} from 'react';
import {Document, Page, pdfjs} from 'react-pdf';
import _ from 'lodash';

import './index.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface Outline {
    numPages: number,
    setCurrentPage:(page:number)=>void
}

interface MainProps{
    currentPage:number
}

const Outline = (props: Outline) => {
    const renderPage = (value: string, index: number) => {
        return (
            <div className='outlinePage' onClick={()=>{props.setCurrentPage(index+1)}}>
            <span>{index + 1}</span>
            <Page
                className={'page'}
                key={`page-${index + 1}`}
                width={192}
                pageNumber={index + 1}
            />
        </div>)
    }
    return (
        <div className='outline'>
            {_.map(new Array(props.numPages), renderPage)}
        </div>
    )
}


const Main = (props:MainProps) => {
    const [pageWidth, setPageWidth] = useState<number>();
    useEffect(() => {
        const element = document.getElementById('main')
        if (element?.clientWidth) {
            setPageWidth(element.clientWidth - 20);
        }
    }, []);
    return (
        <div className='main' id='main'>
            <Page
                key={`main-page-${props.currentPage}`}
                width={pageWidth}
                pageNumber={props.currentPage}
            />
        </div>
    )
}

const PPT = () => {
    const [numPages, setNumPages] = useState<number>(0);
    const [currentPage,setCurrentPage] = useState(1);


    const onDocumentLoadSuccess = ({numPages}: { numPages: number }) => {
        setNumPages(numPages)
    }

    return (
        <Document
            className='root'
            file="https://ipmar.p2m.net.cn/api/tenant/arsenal/group1/default/20210720/16/20/4/162c92ac50c1f5d2ab61812457ffbcdb.pdf?tenant_id=p2m"
            onLoadSuccess={onDocumentLoadSuccess}
            renderMode={'canvas'}
        >
            <Outline numPages={numPages} setCurrentPage={setCurrentPage}/>
            <Main currentPage={currentPage}/>
        </Document>
    );
}

export default PPT;
