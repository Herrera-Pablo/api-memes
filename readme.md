API de Memes
¡Bienvenido a la API de Memes! Esta API proporciona endpoints para acceder a una colección de memes divertidos.

Base URL
La URL base para acceder a la API es: https://apimemespgh.netlify.app/

Endpoints Disponibles
Obtener un Meme Aleatorio   //////  GET /api/memes/random

Este endpoint devuelve un meme aleatorio de la colección de memes.

Ejemplo de respuesta:
{
  "meme": "https://apimemespgh.netlify.app/memes/meme1.jpg"
}

Obtener Todos los Memes //////  GET /api/memes
Este endpoint devuelve todos los memes disponibles en la colección.

Ejemplo de respuesta:
{
  "memes": [
    "https://apimemespgh.netlify.app/memes/meme1.jpg",
    "https://apimemespgh.netlify.app/memes/meme2.jpg",
    "https://apimemespgh.netlify.app/memes/meme3.jpg",
    ...
  ]
}

Uso
Puedes usar esta API en tu aplicación web, aplicación móvil o cualquier otro proyecto donde necesites acceder a una colección de memes divertidos.

Ejemplo de uso en JavaScript:
fetch('https://apimemespgh.netlify.app/api/memes/random')
  .then(response => response.json())
  .then(data => {
    console.log(data.meme); // URL del meme aleatorio
  });
