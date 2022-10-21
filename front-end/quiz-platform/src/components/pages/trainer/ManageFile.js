import React from 'react'
import Axios from "axios";
import FileDownload from 'js-file-download'; 

export const DownloadFile = (props) => {
    Axios ({
        url :'/api/tests/download/testfile', 
        method:'GET',
        responseType:'blob'
    }).then((res)=>{
        FileDownload(res.data, "questions_template.json");
    })
}




