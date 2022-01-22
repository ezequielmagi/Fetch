let url = 'https://jsonplaceholder.typicode.com/albums' // 1-Esta es la url de nuestra API
const main = document.querySelector('.main')

fetch(url) //2-Con esta funcion realizamos la solicitud a la url de nuestra API
.then(Response => Response.json()) //3-Resolvemos la promesa, al obtener la respuesta la convierte a un formato determinado con la funcion correspondiente. En este caso, en formato JSON
// .then(data => console.log(data))//4-Leemos este objeto y lo mostramos esa informacion por consola
.then(data => console.log(data))//4-Leemos este objeto y lo mostramos esa informacion por consola
.then(data => {
  main.innerHTML = data.title
})
.then(error => console.log(error))//5-En caso de error se muestra el mismo.