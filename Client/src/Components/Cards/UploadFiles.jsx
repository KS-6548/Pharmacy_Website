import React, { useState } from 'react'
import upload from '../../assets/upload.png'

function UploadFiles({title, desc, text, size}) {
    const [file, setFile] = useState(null)

    const handleDragOver = (e)=>{
        e.preventDefault();
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile.name)
        }

    }

    const handleClearFiles = (e)=>{
        setFile(null);
    }
  return (
    <>
       <label id='inputFile' className="relative w-[100%] h-[100%] flex justify-center items-center cursor-pointer border-dashed border-2 border-secondary p-5 rounded-xl bg-[#f5f7f9] text-secondary">
            {file ? 
            (
                <>
                <span>Files Name:{" "}</span>
                    {file}
                </>
            )
            :
            ( 
                <>
                    <h1 className={`absolute top-10 left-9 w-[50%] font-bold ${text} tracking-tighter cursor-pointer`}>{title}</h1>
                    <div className="absolute top-36 md:top-28 left-9 w-72">
                        {desc ? 
                        <p>{desc}</p>
                        : null}
                    </div>
                    <img src={upload} alt="upload" className={`hidden md:block absolute right-12 ms-6 ${size}`}/>
                    <input type="file" className='hidden' name='inputFile' onChange={handleDragOver}/>
                </>
            )}   
       </label>
    </>
  )
}

export default UploadFiles