import React from 'react'
import { transformImage } from '../../lib/features';
import { FileOpen as FileOpenIcon } from '@mui/icons-material';
const RenderAttachment = (file,url) => {
  switch(file){
    case "video":
      return  <video
            src={url}
            controls
            width={"200px"}
            preload='none'
        />;
        
    case "image":
         return <img  
        src={transformImage(url,200)}  
        alt="Attachement"
        width={"200px"}
        height={"150px"}
        style={{
            objectFit:"contain"
        }}
        />  ;
       
    case "audio":
          return  <audio
                src={url}
                controls
                
                preload='none'
            />;
              
    default:
       return <FileOpenIcon />;
           
}
}

export default RenderAttachment