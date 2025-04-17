const fileFormat=(url)=>{

    const fileExt=url.split(".").pop();

    if(fileExt==="mp4"||fileExt=="webm"||fileExt==="ogg"){
        return "video";
    }
 if(fileExt==="mp3"||fileExt==="wav"||fileExt==="aac"){
        return "audio";

    }
   if(fileExt==="jpg"||fileExt==="jpeg"||fileExt==="png"||fileExt==="gif"){
        return "image";

    }
   return "file";





}

const transformImage=(url="",width=100)=>url;


export {fileFormat,transformImage};