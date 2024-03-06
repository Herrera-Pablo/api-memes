const express = require('express');
const app = express();

const arrayMemes = [
    'https://codeplaydevs.netlify.app/Assets/img/meme1.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme2.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme3.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme4.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme5.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme6.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme7.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme8.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme9.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme10.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme11.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme12.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme13.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme14.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme15.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme16.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme17.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme18.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme19.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme20.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme21.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme22.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme23.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme24.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme25.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme26.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme27.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme28.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme29.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme30.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme31.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme32.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme33.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme34.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme35.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme36.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme37.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme38.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme39.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme40.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme41.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme42.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme43.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme44.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme45.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme46.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme47.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme48.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme49.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme50.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme51.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme52.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme53.jpg',
    'https://codeplaydevs.netlify.app/Assets/img/meme54.jpg'
];

// Endpoint para obtener un meme aleatorio
app.get('/api/memes/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * arrayMemes.length);
  const randomMeme = arrayMemes[randomIndex];
  res.json({ meme: randomMeme });
});

// Endpoint para obtener todos los memes
app.get('/api/memes', (req, res) => {
  res.json({ memes: arrayMemes });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
