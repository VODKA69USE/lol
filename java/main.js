var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea, su tiempo de aparición en segundos y su duración en segundos
var lyricsData = [
  { text: "Esta noche hay luna llena 🌕 cargo energías buenas ♡", time: 25, duration: 6 },
  { text: "Pero hay una pena que no me deja ser", time: 32, duration: 10 },
  { text: "Ay,ay,ay esa mujer ♡♡", time: 40, duration: 10 },
  { text: "No la veo por abstinencia ", time: 50, duration: 9 },
  { text: "De tenerla cerca ♡, me puse una meta ", time: 54, duration: 8 },
  { text: "De lejos es mejor", time: 60, duration: 6 },
  { text: "No por mí, esto es por los dos ♡", time: 65, duration: 7 },
  { text: "Y nado entre lagunas de mi mente ♡", time: 74, duration: 5 },
  { text: "Que se hacen por saber qué se siente ", time: 78, duration: 6 },
  { text: "Volver a besar tu frente ♡", time: 81, duration: 7 },
  { text: "Tal vez en otra galaxia sí fue diferente ♡🌌♡", time: 84, duration: 6 },
  { text: "Tal vez ahí sí se nos dio lo que quisimos siempre, eh ♡♡", time: 90, duration: 7 },
  { text: "Na-na-na-na-na-na-na 🎶", time: 104, duration: 6 },
  { text: "Na-na-na-na-na-na-na 🎶", time: 109, duration: 6 },
  { text: "Na-na-na-na-na-na (eh) 🎵", time: 115, duration: 5 },

  { text: "No la veo por abstinencia", time: 124, duration: 9 },
  { text: "De tenerla cerca ♡, me puse una meta ", time: 129, duration: 9 },
  { text: "De lejos es mejor ♡♡", time: 135, duration: 6 },
  { text: "No por mí, esto es por los dos ♡", time: 140, duration: 6 },
  { text: "Y nado entre lagunas de mi mente ♡", time: 149, duration: 5 },
  { text: "Que se hacen por saber qué se siente 🤔", time: 152, duration: 6 },
  { text: "Volver a besar tu frente ♡", time: 155, duration: 7 },
  { text: "Tal vez en otra galaxia sí fue diferente ♡🌌♡", time: 158, duration: 7 },
  { text: "Tal vez ahí sí se nos dio lo que quisimos siempre, eh ♡♡", time: 165, duration: 7 },
  { text: "Na-na-na-na-na-na-na 🎶", time: 177, duration: 6 },
  { text: "Na-na-na-na-na-na-na 🎶", time: 184, duration: 6 },
  { text: "Na-na-na-na-na-na (eh) 🎵", time: 191, duration: 6 },
  
  { text: "♡♡♡♡♡♡♡♡♡", time: 195, duration: 8 }, // Corazones
  { text: "🏞️🏞️🏞️🏞️🏞️", time: 199, duration: 8 }, // Lagunas
  { text: "Sr. Vodka Smith 69 ", time: 203, duration: 8 } // Créditos
];

function updateLyrics() {
  var time = audio.currentTime;
  var currentLine = lyricsData.find(
    (line, index) => time >= line.time && (index === lyricsData.length - 1 || time < lyricsData[index + 1].time)
  );

  if (currentLine) {
    var fadeInDuration = 0.5; // Duración del efecto de aparición en segundos
    var timeSinceLineStart = time - currentLine.time;
    var opacity = Math.min(1, timeSinceLineStart / fadeInDuration);
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }

  requestAnimationFrame(updateLyrics);
}
audio.addEventListener("play", function() {
  lyrics.style.animationPlayState = "running"; // Iniciar la animación al reproducir el audio
});

audio.addEventListener("pause", function() {
  lyrics.style.animationPlayState = "paused"; // Pausar la animación al pausar el audio
});
audio.addEventListener("play", function() {
  requestAnimationFrame(updateLyrics);
});

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(function() {
    titulo.style.display = "none";
  }, 3000);
}

setTimeout(ocultarTitulo, 216000);
