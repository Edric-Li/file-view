import React, {useEffect, useState} from "react";
import $ from 'jquery'
import _ from 'lodash';
import {Table} from 'antd';

import './index.css';

interface ExcelProps {

    html?: string
}

const Excel = (props: ExcelProps) => {

    const [sheets, setSheets] = useState<string[]>([]);
    const [selectedTab, setSelectedTab] = useState(0);

    const renderTabs = () => {
        const renderTab = (name: string, index: number) => {
            return (
                <div
                    className='tab'
                    onClick={() => setSelectedTab(index)}
                >
                    {name}
                </div>)
        }

        return (
            <div className='tabs'>
                {sheets.map(renderTab)}
            </div>
        )
    }

    const renderTable = () => {

        const y = document.body.clientHeight - 40 - 52;
        const table = $('#html_container').find('table')[selectedTab]
        const tr_list = $(table).find('tr');
        const header_td_list = $(tr_list[0]).find('td');
        const header = _.map(header_td_list, td => td.innerText);

        const dataSource: any = []


        let max = 0;
        _.map(tr_list, tr => {
            const len = $(tr).find('td').length;
            if (len > max) {
                max = len;
            }
        })

        _.forEach(tr_list, (tr, index) => {
            if (!index) {
                return;
            }
            const obj: any = {};
            const td_list: any[] = _.map($(tr).find('td'));
            _.map(_.times(max), (index) => {
                const td = td_list[index] || {colSpan: 1};
                obj[index] = {
                    text: td.innerText,
                    rowSpan: td.rowSpan,
                    colSpan: td.colSpan
                };
            })
            dataSource.push(obj)
        })

        const columns: any[] = _.map(header, (text, index) => {
            let width = text.length * 40 || 150;
            return {
                title: text,
                width: width,
                dataIndex: index,
                key: index,
                render: (value: { text: string, rowSpan: number, colSpan: number }) => {
                    if (!value) {
                        return;
                    }
                    return {
                        children: (<div>{value?.text}</div>),
                        props: {
                            rowSpan: value.rowSpan || 0,
                            colSpan: value.colSpan || 0
                        }
                    }
                }
            }
        })


        return (
            <Table
                scroll={{y, x: '100%'}}
                columns={columns}
                dataSource={dataSource}
                pagination={false}
                className='table'
                bordered={true}
            />
        )
    }

    useEffect(() => {
        if (!props.html) {
            return;
        }

        const tables = $('#html_container').find('table');

        setSheets(_.map(tables, (value, index) => $(`a[name=table${index}]`)?.find('em')?.html() || `Sheet${Number(index) + 1}`))
    }, [props.html]);

    return (
        <div className='root'>
            <div dangerouslySetInnerHTML={{__html: props.html || ''}} style={{display: 'none'}} id='html_container'/>
            {renderTable()}
            {renderTabs()}
        </div>
    )
}


export default Excel;
