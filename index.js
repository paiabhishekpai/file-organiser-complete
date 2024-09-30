import fs from "fs/promises"
import fsn from "fs"
import path from "path"
import { json } from "stream/consumers"

const basepath = "C:\\Users\\abhishek pai\\OneDrive\\Desktop\\projects\\file organiser"

let files = await fs.readdir(basepath)

for (const item of files) {
    //getting the extensions
    let ext=item.split(".")[item.split(".").length-1];
    //ensuring that we odnt move folders and excluding .js and .json
    if(ext!="js" && ext!="json" && item.split(".").length>1){
    //checking if directory exists or making directorires for each extension
    if(fsn.existsSync(path.join(basepath,ext))){
        //move files here
        fs.rename(path.join(basepath,item), path.join(basepath,ext,item))
    }
    else{
        //make a directory and move files
        fs.mkdir(ext);
        fs.rename(path.join(basepath,item), path.join(basepath,ext,item))
    }
}
}

