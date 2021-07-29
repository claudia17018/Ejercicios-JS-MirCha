(()=>{
    //Primero instanciar un objeto XMLHttpRequest
    const xhr = new XMLHttpRequest();
  
     const $xhr = document.getElementById("xhr"),
     $fragment = document.createDocumentFragment();
    //Asignar los eventos que se estaran manipulando en la peticiom
     xhr.addEventListener("readystatechange",(e)=>{
        if(xhr.readyState !==4) return;

        if(xhr.status >= 200 && xhr.status<300){
            //console.log(xhr.responseText);
            let json = JSON.parse(xhr.responseText);

            json.forEach(el=>{
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} --${el.phone}`
                $fragment.appendChild($li);
            });

            $xhr.appendChild($fragment);
        }else{
            console.log("error");
            let message = xhr.statusText || "Ocurrio un error";
            $xhr.innerHTML=`Error ${xhr.status}: ${message}`;
        }
     });
  //Abrir la peticion estableciendo el metodo que se realizara y el endpoint
     xhr.open("GET","https://jsonplaceholder.typicode.com/users");
//Envio
     xhr.send();
  })();

(()=>{
   const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")
     .then((res) => (res.ok ? res.json(): Promise.reject(res)))
     .then((json) => {
        //console.log(json);

        json.forEach((el)=>{
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} --${el.phone}`
            $fragment.appendChild($li);
        });

        $fetch.appendChild($fragment);
     })
    .catch((err) => {
        //console.log(err);
        let message = err.status|| "Ocurrió un error";
        $fetch.innerHTML = `Error ${err.status}: ${message}`;
    });
  })();

  (()=>{
    const $fetchAsync = document.getElementById("fetch-async"),
     $fragment = document.createDocumentFragment();
    async function getData(){
     try{
         let res= await fetch("https://jsonplaceholder.typicode.com/users"),
         json=await res.json();

         //console.log(res,json);

         if(!res.ok) throw {status: res.status, statusText: res.statusText};

         json.forEach((el)=>{
             const $li = document.createElement("li");
             $li.innerHTML = `${el.name} -- ${el.email} --${el.phone}`
             $fragment.appendChild($li);
         });
 
         $fetchAsync.appendChild($fragment);

     }catch(err) {
        // console.log(err);
         let message = err.status|| "Ocurrió un error";
         $fetch.innerHTML = `Error ${err.status}: ${message}`;
     }
    }

    getData();
   })();
