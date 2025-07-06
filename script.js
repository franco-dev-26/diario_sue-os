const diccionarioSuenos = [
  { palabras: ["volar", "volé", "volaba"], significado: "Deseos de libertad o superación", emocion: "positivo" },
  { palabras: ["agua", "mar", "río", "lluvia"], significado: "Estado emocional o fluir de la vida", emocion: "neutral" },
  { palabras: ["fuego", "incendio"], significado: "Pasiones intensas o conflictos", emocion: "intenso" },
  { palabras: ["caer", "caí", "caía"], significado: "Miedo al fracaso o pérdida de control", emocion: "angustiante" },
  { palabras: ["oscuridad", "oscuro"], significado: "Incertidumbre, miedo a lo desconocido", emocion: "angustiante" },
  { palabras: ["puente"], significado: "Cambio o transición en tu vida", emocion: "neutral" },
  { palabras: ["perseguir", "perseguían", "me seguían"], significado: "Estrés, ansiedad, evasión de un problema", emocion: "angustiante" },
  { palabras: ["serpiente"], significado: "Posible traición o tentación", emocion: "tenso" },
  { palabras: ["casa"], significado: "Refugio, identidad propia", emocion: "positivo" },
  { palabras: ["bosque"], significado: "Confusión o búsqueda interior", emocion: "confuso" }
];

function saveDream() {
  const input = document.getElementById('dreamInput').value.trim();
  if (input === "") return alert("¡Escribí algo!");

  let dreams = JSON.parse(localStorage.getItem('dreams')) || [];
  const date = new Date().toLocaleString();
  const analysis = analizarSueno(input);

  const dreamObj = {
    text: input,
    date: date,
    meanings: analysis.interpretaciones,
    emocion: analysis.emocionGeneral,
    combinacion: analysis.combinacion
  };

  dreams.unshift(dreamObj);
  localStorage.setItem('dreams', JSON.stringify(dreams));

  document.getElementById('dreamInput').value = "";
  renderDreams();
}

function renderDreams() {
  const dreams = JSON.parse(localStorage.getItem('dreams')) || [];
  const list = document.getElementById('dreamList');
  list.innerHTML = "";

  let totalClaves = 0;

  dreams.forEach((dream, index) => {
    const li = document.createElement('li');

    let html = `<strong>${dream.date}</strong><br>${dream.text}`;

    if (dream.meanings.length > 0) {
      html += `<br><em>🔮 Interpretación sugerida:</em><ul>`;
      dream.meanings.forEach(meaning => {
        html += `<li>${meaning}</li>`;
      });
      html += `</ul>`;
      totalClaves += dream.meanings.length;
    }

    html += `<br><strong>🌟 Emoción general:</strong> ${dream.emocion}`;
    if (dream.combinacion) {
      html += `<br><strong>🌙 Combinación detectada:</strong> ${dream.combinacion}`;
    }

    li.innerHTML = html;

    const btn = document.createElement('button');
    btn.className = 'delete-btn';
    btn.textContent = '🗑 Eliminar';
    btn.onclick = () => deleteDream(index);

    li.appendChild(btn);
    list.appendChild(li);
  });

  document.getElementById('totalSueños').textContent = dreams.length;
  document.getElementById('totalClaves').textContent = totalClaves;
}

function deleteDream(index) {
  let dreams = JSON.parse(localStorage.getItem('dreams')) || [];
  dreams.splice(index, 1);
  localStorage.setItem('dreams', JSON.stringify(dreams));
  renderDreams();
}

function analizarSueno(texto) {
  const lowerText = texto.toLowerCase();
  const interpretaciones = [];
  const emociones = [];

  diccionarioSuenos.forEach(entry => {
    entry.palabras.forEach(palabra => {
      if (lowerText.includes(palabra)) {
        if (!interpretaciones.includes(entry.significado)) {
          interpretaciones.push(entry.significado);
        }
        emociones.push(entry.emocion);
      }
    });
  });

  const conteo = { positivo: 0, angustiante: 0, neutral: 0, intenso: 0, confuso: 0, tenso: 0 };
  emociones.forEach(e => conteo[e]++);

  let emocionGeneral = "neutral";
  let max = 0;
  for (let clave in conteo) {
    if (conteo[clave] > max) {
      max = conteo[clave];
      emocionGeneral = clave;
    }
  }

  let combinacion = "";
  if (lowerText.includes("agua") && lowerText.includes("oscuridad")) {
    combinacion = "Emociones confusas o turbias";
  }
  if (lowerText.includes("volar") && lowerText.includes("fuego")) {
    combinacion = "Deseos de liberarse de un conflicto";
  }

  return { interpretaciones, emocionGeneral, combinacion };
}

renderDreams();
