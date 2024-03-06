const memeContainer = document.getElementById('meme-container');

// Función para obtener todos los memes de la API
async function getMemes() {
  try {
    const response = await fetch('https://apimemespgh.netlify.app/api/memes');
    const data = await response.json();
    return data.memes;
  } catch (error) {
    console.error('Error al obtener los memes:', error);
  }
}

// Función para mostrar los memes en la página
async function showMemes() {
  const memes = await getMemes();
  memes.forEach(meme => {
    const img = document.createElement('img');
    img.src = meme;
    memeContainer.appendChild(img);
  });
}

showMemes();
