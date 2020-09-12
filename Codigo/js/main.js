console.log("bienvenidos")

var refParrafo = document.getElementById('parrafo')
refParrafo.innerText='Text'
refParrafo.style.backgroundColor = 'black'
console.log(refParrafo.innerText)

var refTitulo = document.getElementById('titulo')
refTitulo.innerText='Lo cambie'

console.log(refTitulo.innerText)


var refLista = document.getElementById('lista')
refLista.innerHTML = '<ul>'+
                        '<li></li> 
