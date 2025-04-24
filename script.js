const form = document.getElementById("lyricsForm");
const result = document.getElementById("result");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const artist = document.getElementById("artist").value.trim();
  const song = document.getElementById("song").value.trim();

  result.textContent = "Buscando letra... 🎶";

  try {
    const res = await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
    const data = await res.json();

    if (data.lyrics) {
      result.textContent = data.lyrics;
    } else {
      result.textContent = "No se encontró la letra. 😢";
    }
  } catch (error) {
    result.textContent = "Error al buscar la letra. Inténtalo de nuevo.";
    console.error(error);
  }
});
