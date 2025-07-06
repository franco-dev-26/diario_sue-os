function storageDisponible() {
  try {
    const prueba = "__prueba__";
    localStorage.setItem(prueba, prueba);
    localStorage.removeItem(prueba);
    return true;
  } catch (e) {
    return false;
  }
}

if (!storageDisponible()) {
  alert("⚠️ Tu navegador tiene bloqueado el almacenamiento local. Algunas funciones no funcionarán correctamente.");
}

function saveDream() {
  if (!storageDisponible()) return alert("⚠️ No se puede guardar el sueño porque el almacenamiento está bloqueado.");

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
  if (!storageDisponible()) return;

  const dreams = JSON.parse(localStorage.getItem('dreams')) || [];
  const list = document.getElementById('dreamList');
  list.innerHTML = "";

  dreams.forEach((dream, index) => {
    const li = document.createElement('li');

    let html = `<strong>${dream.date}</strong><br>${dream.text}`;
    
    if (dream.meanings.length > 0) {
      html += `<br><em>🔮 Interpretación sugerida:</em><ul>`;
      dream.meanings.forEach(meaning => {
        html += `<li>${meaning}</li>`;
      });
      html += `</ul>`;
    }

    li.innerHTML = html;

    const btn = document.createElement('button');
    btn.textContent = '🗑 Eliminar';
    btn.onclick = () => deleteDream(index);

    li.appendChild(btn);
    list.appendChild(li);
  });

  updateStats(dreams);
}

function updateStats(dreams) {
  let totalClaves = 0;
  dreams.forEach(dream => {
    totalClaves += dream.meanings.length;
  });

  document.getElementById('totalSueños').textContent = dreams.length;
  document.getElementById('totalClaves').textContent = totalClaves;
}

function deleteDream(index) {
  if (!storageDisponible()) return;

  let dreams = JSON.parse(localStorage.getItem('dreams')) || [];
  dreams.splice(index, 1);
  localStorage.setItem('dreams', JSON.stringify(dreams));
  renderDreams();
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
