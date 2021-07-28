const d=document,w=window;

export default function responsiveMedia(id,mq,mobile,desktop){
let breakpoint=w.matchMedia(mq);
    
const responsive=(e)=>{
    if(e.matches){
        d.getElementById(id).innerHTML=desktop;
    }else{
        d.getElementById(id).innerHTML=mobile;
    };
   breakpoint.addListener(responsive);

   responsive(breakpoint);
 }
}