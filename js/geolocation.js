const d= document,
n=navigator;

export default function getGeolocation(id){
    const $id=d.getElementById(id),
    options={
        enableHighAccuracy:true,
        timeout:5000,
        maxinunAge:0,
    };

    const success=(position)=>{
        let coords=position.coords;
        console.log(position);

        $id.innerHTML=`
        <p>Tu posicion actual es:</p>
         <ul>
          <li>Latitud: <b>${coords.latitude}</b></li>
          <li>Latitud: <b>${coords.longitude}</b></li>
          <li>Latitud: <b>${coords.accuracy}</b></li>
         </ul>
         <a href = "https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank", rel="noopener">Ver en Google Maps</a>
        `;
    };

    const error=(err)=>{
        $id.innerHTML=`<p><mark>Error: ${err.code} ${err.message}</mark></p>`;
    }

    n.geolocation.getCurrentPosition(success,error,options)
}