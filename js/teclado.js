const d= document;
let x=0,y=0;

export function moveBall(e,ball,stage){
    const $ball=d.querySelector(ball),$stage=d.querySelector(stage),
    limitsBall=$ball.getBoundingClientRect(),limitsStage=$stage.getBoundingClientRect();

    switch(e.keyCode){
    //izquierda
      case 37:     
        if(limitsBall.left>limitsStage.left){
            e.preventDefault();
            x--;
        }       
        break;
    //Arriba
    case 38:     
        if(limitsBall.top>limitsStage.top){
            e.preventDefault();
            y--;
        }       
        break;
    //Derecha
    case 39:     
        if(limitsBall.right<limitsStage.right){
            e.preventDefault();
            Math.round(x++);
        }        
        break;
    //Abajo
    case 40:
        
        if(limitsBall.bottom <limitsStage.bottom){
            e.preventDefault();
            y++;
        }      
        break;
    default:
        break;
    }
    
    $ball.style.transform=`translate(${Math.round(x*10)}px,${y*10}px)`;
    //console.log(Math.round(x*10));
}

export function shortcuts(e){
 console.log()
}