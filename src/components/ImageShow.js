function ImageShow({image}){
    console.log("imageshow");
    console.log(image.id);
    return(
        //console.log(image.id);
       // <div> {image.alt_description}</div>
       <img src ={image.urls.small} alt ={image.alt_description}/>
    
       
    ) 

}


export default ImageShow;