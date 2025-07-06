function saveDream() {
  const input = document.getElementById('dreamInput').value.trim();
  if (input === "") return alert("¡Escribí algo!");

  let dreams = JSON.parse(localStorage.getItem('dreams')) || [];
  const date = new Date().toLocaleString();
  const meanings = analizarSueno(input);

  dreams.unshift({ text: input, date: date, meanings: meanings });
  localStorage.setItem('dreams', JSON.stringify(dreams));

  document.getElementById('dreamInput').value = "";
  renderDreams();
}

function renderDreams() {
  const dreams = JSON.parse(localStorage.getItem('dreams')) || [];
  const list = document.getElementById('dreamList');
  list.innerHTML = "";

  dreams.forEach(dream => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${dream.date}</strong><br>${dream.text}`;
    
    if (dream.meanings.length > 0) {
      li.innerHTML += `<br><em>🔮 Interpretación sugerida:</em><ul>`;
      dream.meanings.forEach(meaning => {
        li.innerHTML += `<li>${meaning}</li>`;
      });
      li.innerHTML += `</ul>`;
    }

    list.appendChild(li);
  });
}

function analizarSueno(texto) {
  const interpretaciones = [];
  const lowerText = texto.toLowerCase();

  if (lowerText.match(/\bvolar\b/) || lowerText.includes("volé") || lowerText.includes("volaba")) {
    interpretaciones.push("Necesidad de libertad, deseos de superación");
  }
  if (lowerText.match(/\bagua\b/) || lowerText.includes("mar") || lowerText.includes("río") || lowerText.includes("lluvia")) {
    interpretaciones.push("Estado emocional, flujo de la vida");
  }
  if (lowerText.match(/\bfuego\b/) || lowerText.includes("incendio")) {
    interpretaciones.push("Pasiones intensas o conflictos");
  }
  if (lowerText.match(/\bcaer\b/) || lowerText.includes("caí") || lowerText.includes("caía") || lowerText.includes("me caí")) {
    interpretaciones.push("Miedo al fracaso o pérdida de control");
  }
  if (lowerText.match(/\boscuridad\b/) || lowerText.includes("oscuro")) {
    interpretaciones.push("Incertidumbre, miedo a lo desconocido");
  }
  if (lowerText.match(/\bpuente\b/)) {
    interpretaciones.push("Cambio o transición en tu vida");
  }
  if (lowerText.match(/\bperseguir\b/) || lowerText.includes("me perseguían") || lowerText.includes("me seguían")) {
    interpretaciones.push("Estrés, ansiedad, evitar un problema");
  }

  return interpretaciones;
}

renderDreams();
