let fs=require("fs");
let path=require("path");
( function(){
    let dirName=process.argv[2];
    filenames=fs.readdirSync(dirName);
    let dest=path.join(dirName,"FileOrganizer");
    if(!fs.existsSync(dest)){
        fs.mkdirSync(dest);
    }
    console.log(filenames);
    for(let i=0;i<filenames.length;i++){
        let ext=getFileExtension(filenames[i]);
        let src=path.join(dirName,filenames[i]);
        //console.log(src);
        if(ext=="txt"){
           moveFile(src,"TextFiles",dest);
        }else if(ext=="mp3"){
            moveFile(src,"Music",dest); 
        }else if(ext=="mp4"){
            moveFile(src,"Videos",dest);
        }else if(ext=="jpg"||ext=="jpeg"){
            moveFile(src,"Images",dest);
        }else if(ext=="pdf"){
            moveFile(src,"Documents",dest);
        }
    }
}) ();
function getFileExtension(filename){
  let ext=filename.split(".").pop();
  return ext;
}
function moveFile(src,type,dest){
  let newDest=path.join(dest,type);
  if(!fs.existsSync(newDest)){
     fs.mkdirSync(newDest);
    }
  let fname=path.basename(src);
  let cfpath=path.join(newDest,fname);
  fs.copyFileSync(src,cfpath);

}
