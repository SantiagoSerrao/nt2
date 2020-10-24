console.log('Ajax encadenado')

const url = 'https://jsonplaceholder.typicode.com/posts/'


// peticion asincronica usando con ajax NO anidado (desorden)
function getPost(id){
    //se crea instancia de comunicacion
    let xhr = new XMLHttpRequest
    //se configura
    xhr.open('get',url+id)
    // se configura un listener
    xhr.addEventListener('load',()=>{
        if (xhr.status ==200 ){
            //parseamos el json asi queda como objetos
            let respuesta = JSON.parse(xhr.response)
            console.log(respuesta)
        }
    })
    xhr.send()
}

function getPosts(){
    console.log('inicio')
    getPost(1)
    getPost(2)
    getPost(3)
    console.log('fin')

}

//getPosts()

// ajax usando peticiones anidadas , osea es orden!
// pero se cae en el callback hell

function getPostCb(id,cb){
    let xhr = new XMLHttpRequest
    xhr.open('get',url+id)
    xhr.addEventListener('load',()=>{
        if (xhr.status ==200 ){
            let respuesta = JSON.parse(xhr.response)
            console.log(respuesta)
            if (cb) cb(respuesta)
        }
    })
    xhr.send()
}


function getPostsCb(){
    console.log('inicio de peticiones')
    // se anida la funcion. Se cae en el callback hell
    getPostCb(1 , () => {
        //anido funcion y paso un callback
        getPostCb(2,() => {
            //anido funcion y paso un callback
            getPostCb(3, () => {

            })
        })
    })
    
    
    console.log('fin de peticiones')

}
//getPostsCb()

// peticion anidada con promises , nos saca del callback hell

function getPostPromise(id,nodebug){
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest
        xhr.open('get',url+id)
        xhr.addEventListener('load',()=>{
            if (xhr.status ==200 ){
                let respuesta = JSON.parse(xhr.response)
                if(!nodebug) console.log(respuesta)
                resolve(respuesta)
                
            }else {
                // hay que crear un objeto porque reject y resolve solo pueden devolver 1 parametro
                let error = {
                    type: 'error status',
                    body: xhr.status
                }
                reject(error)
            }
        })
        xhr.addEventListener('error', e =>{
            let error = {
                type: 'error ajax',
                body: e
            }
            reject(error)
        })
        xhr.send()
    })   
}
// promesas con console.log interno (con sintaxis then catch)


function getPostsPromiseThenCatch1(){
    console.log('inicio de peticiones')
    
    getPostPromise(1)
    .then(respuesta => getPostPromise(2))
    .then(respuesta => getPostPromise(3))
    .then(respuesta => getPostPromise(4))
    .then(respuesta => getPostPromise(5))
    .then(respuesta => getPostPromise(6))
    .then(respuesta => getPostPromise(7))
    .catch(error => console.log(error))    
    console.log('fin de peticiones')
}

// promesas sin console.log interno (con sintaxis then catch)

function getPostsPromiseThenCatch2(){
    console.log('inicio de peticiones')
    
    getPostPromise(1,true)
    .then(respuesta => {
        console.log(respuesta)
        return getPostPromise(2,true)
        })
    .then(respuesta => {
        console.log(respuesta)
        return getPostPromise(3,true)
        })
    .then(respuesta => {
        console.log(respuesta)
        return getPostPromise(4,true)
        })
    .then(respuesta => {
        console.log(respuesta)
        return getPostPromise(5,true)
        })
    .then(respuesta => {
        console.log(respuesta)
        return getPostPromise(6,true)
        })            



    .catch(error => console.log(error))    
    console.log('fin de peticiones')
}

//getPostsPromiseThenCatch1()
//getPostsPromiseThenCatch2()

// promesas con console.log interno (con sintaxis async await)

// para poder usar async la funcion tiene que ser async!
async function getPostsPromiseAsyncAwait1(){
    console.log('inicio de peticiones')
    // await significa espera asincronicamente
    try {
        await getPostPromise(1)
        await getPostPromise(2)
        await getPostPromise(3)
        await getPostPromise(4)
        await getPostPromise(5)
        await getPostPromise(6)
        await getPostPromise(7)
    }
    catch (error){
        console.log(error)
    }   
    console.log('fin de peticiones')
}

//getPostsPromiseAsyncAwait1()

async function getPostsPromiseAsyncAwait2(){
    console.log('inicio de peticiones')
    // await significa espera asincronicamente
    try {
        for(let i=1;i<=9;i++){
            let respuesta= await getPostPromise(i,true)
        console.log(respuesta)
        }
        
        //respuesta=await getPostPromise(2,true)
        //console.log(respuesta)
        //respuesta=await getPostPromise(3,true)
        //console.log(respuesta)
        //respuesta=await getPostPromise(4,true)
        //console.log(respuesta)
        //respuesta=await getPostPromise(5,true)
        //console.log(respuesta)
        //respuesta=await getPostPromise(6,true)
        //console.log(respuesta)
        //respuesta=await getPostPromise(7,true)
        //console.log(respuesta)
    }
    catch (error){
        console.log(error)
    }   
    console.log('fin de peticiones')
}
//getPostsPromiseAsyncAwait2()

// peticion asincronica usando ajax con fetch (dedorden pero con fetch no anidado , no bloqueante)
function getPostFetch(id){
    // fetch devuelve promesas
    fetch(url+id)
    .then(response => response.json())
    .then(datos => console.log(datos))

}

getPostFetch(1)
getPostFetch(2)
getPostFetch(3)