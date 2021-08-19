import React from 'react'
import { FileEarmarkArrowDown } from 'react-bootstrap-icons'


const UploadTip = () => {
    return (
        <div className="upload-tip">
            <FileEarmarkArrowDown size={52} />
            <p>To get started import the <span>.csv</span> file</p>
        </div>
    )
}

export default UploadTip
