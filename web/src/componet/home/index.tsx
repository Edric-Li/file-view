import './index.css';
import {Button, Table} from "antd";
import {uploadFile} from "../app/api";
import {useState} from "react";


const columns: any = [
    {
        title: '文件名',
        dataIndex: 'name',
        key: 'name',
    }, {
        title: '操作',
        key: 'operation',
        fixed: 'right',
        render: (value: any) => {
            console.log(value,)
            return (<a href={`?url=${value.url}`}>预览</a>)
        },
    },
];

const Home = () => {
    const [dataSource, setDataSource] = useState<{ name: string, url: string }[]>([]);

    const handleUploadFile = () => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.multiple = false;
        fileInput.addEventListener('change', async (event: any) => {
            const file = event.target.files[0];
            const r = await uploadFile(file)
            if (r.data.fileUrl) {
                setDataSource([
                    ...dataSource,
                    {name: file.name, url: r.data.fileUrl}
                ])
            }
        });
        fileInput.click();
    };


    return (
        <div className='home-root'>
            <div className='home-content'>
                <h1>文件预览项目接入和测试界面</h1>
                <div>
                    <h2>预览测试</h2>
                    <Button onClick={handleUploadFile}>上传文件</Button>
                </div>
                <Table dataSource={dataSource} columns={columns}/>
            </div>
        </div>
    )
}

export default Home;
