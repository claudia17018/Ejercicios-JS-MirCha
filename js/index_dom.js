import { cuentaRegresiva } from "./cuenta-regresiva.js";
import hamburgerMenu from "./menu.js";
import { digitalClock, alarm } from "./reloj.js";
import {moveBall,shortcuts} from "./teclado.js";

const d=document;

d.addEventListener("DOMContentLoaded", (e)=> {
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("assets/alarma.mp3","#activar-alarma","#desactivar-alarma");
    cuentaRegresiva("countdown","May 23,2022","Feliz Dia");
});

d.addEventListener("keydown", (e)=>{
 shortcuts(e);
 moveBall(e,".ball",".stage");
});

