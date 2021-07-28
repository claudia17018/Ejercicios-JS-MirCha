const d=document,
n=navigator;

export default function webCam(id){
    const $video=d.getElementById(id);

    // if(n.mediaDevices.getUserMedia){
    //     n.mediaDevices
    //      .getUserMedia({video:true,audio:false})
    //      .then((stream)=>{
    //          console.log(stream);
    //          $video.scrObject=stream;
    //          $video.play();
             
    //      })
    //      .catch((err)=>{
    //          $video.insertAdjacentElement("beforebegin",`<p>Sucedio el siguiente error:<mark>${err}</mark></p>`);
    //      });
    // }
}