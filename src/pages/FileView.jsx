import React from 'react'
import { useParams } from 'react-router-dom'


export const FileView = () => {
    
    const { filename } = useParams();

    return (
        <div className='pt-24 h-screen'>
            <iframe src={`/${filename}`} 
            frameborder="0"
            width='100%'
            height='100%'
            title='filename'>
                
            </iframe>
        </div>
    )
}

export default FileView