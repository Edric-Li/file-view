import './index.css';

interface Props {
    fileUrl: string
}

const Iframe = (props: Props) => {
    return (
        <div className='iframe-root'>
            <iframe
                frameBorder={0}
                src={props.fileUrl}
                className='iframe'
            />
        </div>
    )
}

export default Iframe;
