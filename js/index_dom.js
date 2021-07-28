import { scrollTopBoton } from "./boton_scroll.js";
import { cuentaRegresiva } from "./cuenta-regresiva.js";
import hamburgerMenu from "./menu.js";
import darkTheme from "./oscuro.js";
import { digitalClock, alarm } from "./reloj.js";
import {moveBall,shortcuts} from "./teclado.js";
import responsiveMedia from "./responsive.js";
import responsiveTester from "./prueba_responsive.js";
import userDeviceInfo from "./dteccion_dispositivo.js";
import newtworkStatus from "./deteccion_red.js";
import webCam from "./deteccion_web.js";
import getGeolocation from "./geolocation.js";
import searchFilter from "./filtro_busquedas.js";
import scrollSpy from "./scroll_espia.js";

const d=document;

d.addEventListener("DOMContentLoaded", (e)=> {
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("assets/alarma.mp3","#activar-alarma","#desactivar-alarma");
    cuentaRegresiva("countdown","May 23,2022","Feliz Dia");
    scrollTopBoton(".scroll-top-btn");
    responsiveMedia("youtube","(min-width:1024px)",`<a href="" target="_blank" rel="noopener">Ver video</a>`,"movil","desktop",`<iframe></iframe>`);
    responsiveMedia("gmap","(min-width:1024px)",`<a href="" target="_blank" rel="noopener">Ver mapa</a>`,"movil","desktop",`<iframe></iframe>`);
    responsiveTester("responsive-tester");  
    userDeviceInfo("user-device");
    webCam("webcam");
    getGeolocation("geolocation");
    searchFilter(".card-filter",".card");
    scrollSpy();
    
});

d.addEventListener("keydown", (e)=>{
 shortcuts(e);
 moveBall(e,".ball",".stage");
});

darkTheme(".dark-theme-btn","<dark-mode></dark-mode>");
newtworkStatus();

