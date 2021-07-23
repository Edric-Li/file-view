import React, {useEffect, useState} from 'react';
import {Document, Page, pdfjs} from 'react-pdf';
import _ from 'lodash';

import './index.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface Outline {
    numPages: number,
    setCurrentPage: (page: number) => void
}

interface MainProps {
    currentPage: number
}

interface PPTProps {
    fileUrl: string
}

const Outline = (props: Outline) => {
    const renderPage = (value: string, index: number) => {
        return (
            <div className='ppt-outlinePage' onClick={() => {
                props.setCurrentPage(index + 1)
            }}>
                <span>{index + 1}</span>
                <Page
                    className='ppt-page'
                    key={`page-${index + 1}`}
                    width={192}
                    pageNumber={index + 1}
                />
            </div>)
    }
    return (
        <div className='ppt-outline'>
            {_.map(new Array(props.numPages), renderPage)}
        </div>
    )
}

const Main = (props: MainProps) => {
    const [pageWidth, setPageWidth] = useState<number>();
    useEffect(() => {
        const element = document.getElementById('ppt-main')
        if (element?.clientWidth) {
            setPageWidth(element.clientWidth - 20);
        }
    }, []);
    console.log('pageWidth', pageWidth, props)
    return (
        <div className='ppt-main' id='ppt-main'>
            <Page
                key={`main-page-${props.currentPage}`}
                width={pageWidth}
                pageNumber={props.currentPage}
            />
        </div>
    )
}

const PPT = (props: PPTProps) => {
    const [numPages, setNumPages] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState(1);

    const onDocumentLoadSuccess = ({numPages}: { numPages: number }) => {
        setNumPages(numPages)
    }

    return (
        <Document
            className='ppt-root'
            file={props.fileUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            renderMode={'canvas'}
        >
            <Outline numPages={numPages} setCurrentPage={setCurrentPage}/>
            <Main currentPage={currentPage}/>
        </Document>
    );
}

export default PPT;
