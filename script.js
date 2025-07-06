const diccionarioSuenos = [
  { 
    palabras: ["volar", "volé", "volaba"], 
    significado: "Deseos de libertad o superación", 
    emocion: "positivo",
    consejo: "Animate a tomar decisiones que te acerquen a tus metas en la vida real."
  },
  { 
    palabras: ["agua", "mar", "río", "lluvia"], 
    significado: "Estado emocional o fluir de la vida", 
    emocion: "neutral",
    consejo: "Prestá atención a cómo te sentís emocionalmente y dejá fluir lo que no podés controlar."
  },
  { 
    palabras: ["fuego", "incendio"], 
    significado: "Pasiones intensas o conflictos", 
    emocion: "intenso",
    consejo: "Reflexioná sobre qué situaciones te están generando tensión y buscá formas sanas de resolverlas."
  },
  { 
    palabras: ["caer", "caí", "caía"], 
    significado: "Miedo al fracaso o pérdida de control", 
    emocion: "angustiante",
    consejo: "Recordá que equivocarse es parte de aprender. No temas perder el control a veces."
  },
  { 
    palabras: ["oscuridad", "oscuro"], 
    significado: "Incertidumbre, miedo a lo desconocido", 
    emocion: "angustiante",
    consejo: "Intentá identificar qué aspectos de tu vida te generan inseguridad y buscá apoyo."
  },
  { 
    palabras: ["puente"], 
    significado: "Cambio o transición en tu vida", 
    emocion: "neutral",
    consejo: "Abrazá los cambios como oportunidades de crecimiento personal."
  },
  { 
    palabras: ["perseguir", "perseguían", "me seguían"], 
    significado: "Estrés, ansiedad, evasión de un problema", 
    emocion: "angustiante",
    consejo: "Enfrentá esos problemas que venís evitando, aunque cueste. Te va a traer paz."
  },
  { 
    palabras: ["serpiente"], 
    significado: "Posible traición o tentación", 
    emocion: "tenso",
    consejo: "Mantené los ojos abiertos ante posibles engaños o situaciones poco claras."
  },
  { 
    palabras: ["casa"], 
    significado: "Refugio, identidad propia", 
    emocion: "positivo",
    consejo: "Valorá tus espacios y las personas que te hacen sentir en casa."
  },
  { 
    palabras: ["bosque"], 
    significado: "Confusión o búsqueda interior", 
    emocion: "confuso",
    consejo: "Date un tiempo para reflexionar sobre tus objetivos y prioridades."
  }
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
    consejos: analysis.consejos,
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

    if (dream.consejos.length > 0) {
      html += `<br><em>💡 Consejo:</em><ul>`;
      dream.consejos.forEach(c => {
        html += `<li>${c}</li>`;
      });
      html += `</ul>`;
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
  const consejos = [];
  const emociones = [];

  diccionarioSuenos.forEach(entry => {
    entry.palabras.forEach(palabra => {
      if (lowerText.includes(palabra)) {
        if (!interpretaciones.includes(entry.significado)) {
          interpretaciones.push(entry.significado);
        }
        if (!consejos.includes(entry.consejo)) {
          consejos.push(entry.consejo);
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

  return { interpretaciones, consejos, emocionGeneral, combinacion };
}

renderDreams();
