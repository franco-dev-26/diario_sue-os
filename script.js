const diccionarioSuenos = [
  { palabras: ["volar", "volé", "volaba", "alas", "planeaba"], significado: "Deseos de libertad o ganas de superarte", emocion: "positivo", consejo: "Animate a tomar decisiones que te acerquen a tus sueños." },
  { palabras: ["agua", "mar", "río", "lluvia", "océano", "nadar", "inundación"], significado: "Refleja tus emociones y el rumbo de tu vida", emocion: "neutral", consejo: "Prestá atención a cómo te sentís y dejá fluir lo que no podés controlar." },
  { palabras: ["fuego", "incendio", "llamas", "arder", "quemar"], significado: "Muestra que hay conflictos o emociones intensas", emocion: "intenso", consejo: "Buscá calmar tensiones y resolver lo que te preocupa." },
  { palabras: ["caer", "caí", "caía", "precipicio", "abismo", "resbalar"], significado: "Temor a fracasar o perder el control", emocion: "angustiante", consejo: "Confiá en vos mismo y recordá que todos nos caemos alguna vez." },
  { palabras: ["oscuridad", "oscuro", "tinieblas", "sombra", "noche"], significado: "Incertidumbre o miedo a lo desconocido", emocion: "angustiante", consejo: "Enfrentá lo que no entendés y buscá apoyo si lo necesitás." },
  { palabras: ["puente", "cruce", "pasarela"], significado: "Cambio o transición en tu vida", emocion: "neutral", consejo: "Aprovechá las oportunidades que trae el cambio." },
  { palabras: ["perseguir", "perseguían", "me seguían", "huir", "escapar", "correr"], significado: "Sentís ansiedad o que escapás de un problema", emocion: "angustiante", consejo: "Enfrentá lo que evitás y liberate de esa carga." },
  { palabras: ["serpiente", "víbora", "cobra", "culebra"], significado: "Posible traición o tentación", emocion: "tenso", consejo: "Mantené los ojos abiertos ante posibles engaños." },
  { palabras: ["casa", "hogar", "vivienda", "departamento", "habitación"], significado: "Tu refugio o tu identidad", emocion: "positivo", consejo: "Valorá lo que te hace sentir seguro y en paz." },
  { palabras: ["bosque", "selva", "jungla", "árboles"], significado: "Confusión o necesidad de encontrarte a vos mismo", emocion: "confuso", consejo: "Date tiempo para reflexionar y buscar tu camino." },
  { palabras: ["bebé", "niño", "recién nacido", "hijo", "embarazo"], significado: "Nuevos comienzos o proyectos en tu vida", emocion: "positivo", consejo: "Cuidá y hacé crecer esas nuevas ideas o proyectos." },
  { palabras: ["auto", "coche", "vehículo", "conducir", "camioneta", "autobús"], significado: "Control sobre el rumbo de tu vida", emocion: "neutral", consejo: "Pensá si estás manejando tus decisiones o si algo te frena." },
  { palabras: ["examen", "prueba", "evaluación", "test", "estudiar"], significado: "Inseguridad o miedo a no cumplir expectativas", emocion: "tenso", consejo: "Confiá en lo que sabés y no seas tan duro con vos mismo." },
  { palabras: ["montaña", "cerro", "colina", "pico", "cima"], significado: "Desafíos y metas que querés alcanzar", emocion: "positivo", consejo: "Seguí esforzándote, cada paso te acerca a la cima." },
  { palabras: ["sangre", "herida", "corte", "lastimadura"], significado: "Dolor emocional o pérdida de energía", emocion: "intenso", consejo: "Cuidá tu bienestar y alejate de lo que te hace daño." },
  { palabras: ["muerte", "morir", "muerto", "fallecido", "cementerio"], significado: "Fin de una etapa y comienzo de otra", emocion: "confuso", consejo: "No temas a los cambios, son parte de la vida." },
  { palabras: ["luz", "brillo", "claridad", "iluminación"], significado: "Esperanza o guía en momentos difíciles", emocion: "positivo", consejo: "Seguí ese camino que te da paz y confianza." },
  { palabras: ["animal", "perro", "gato", "caballo", "león", "tigre"], significado: "Instintos y emociones básicas", emocion: "neutral", consejo: "Escuchá tus necesidades más profundas y auténticas." },
  { palabras: ["escalera", "subir", "bajar", "peldaños"], significado: "Progreso o retroceso en tus objetivos", emocion: "neutral", consejo: "Fijate si estás avanzando hacia donde querés." },
  { palabras: ["enfermedad", "hospital", "médico", "clínica"], significado: "Preocupación por tu salud o la de alguien", emocion: "tenso", consejo: "Cuidate y prestá atención a lo que tu cuerpo o mente piden." },
  { palabras: ["dinero", "billete", "moneda", "plata"], significado: "Preocupación por lo material o por la seguridad", emocion: "neutral", consejo: "Recordá que el bienestar no depende solo de lo material." },
  { palabras: ["reloj", "hora", "tiempo", "minutos"], significado: "Ansiedad por el paso del tiempo o por cumplir plazos", emocion: "tenso", consejo: "Respirá y tratá de disfrutar el presente sin tanta presión." },
  { palabras: ["avión", "despegar", "aterrizar"], significado: "Grandes cambios o viajes en tu vida", emocion: "positivo", consejo: "Aprovechá las nuevas oportunidades que se presentan." },
  { palabras: ["llorar", "lágrimas", "tristeza"], significado: "Liberación de emociones contenidas", emocion: "intenso", consejo: "Permitite sentir y soltar lo que te duele." },
  { palabras: ["beso", "abrazar", "caricia"], significado: "Necesidad de afecto o cercanía", emocion: "positivo", consejo: "Buscá compartir momentos con quienes querés." }
];

function saveDream() {
  const input = document.getElementById('dreamInput').value.trim();
  if (input === "") return alert("¡Escribí algo!");
  if (input.length < 5) return alert("Escribí un poco más para analizar el sueño.");

  let dreams = JSON.parse(localStorage.getItem('dreams')) || [];
  const date = new Date().toLocaleString();
  const analysis = analizarSueno(input);

  const dreamObj = {
    text: input,
    date: date,
    meanings: analysis.interpretaciones.length ? analysis.interpretaciones : ["🔍 No se detectaron palabras clave conocidas."],
    consejos: analysis.consejos.length ? analysis.consejos : ["💡 Consejo general: Reflexioná sobre lo que sentiste en el sueño y cómo se conecta con tu vida real."],
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
  let totalConsejos = 0;
  let totalCombinaciones = 0;
  let emocionSet = new Set();

  dreams.forEach((dream, index) => {
    const li = document.createElement('li');

    let html = `<strong>${dream.date}</strong><br>${dream.text}`;

    if (dream.meanings.length > 0) {
      html += `<br><em>🔮 Interpretación sugerida:</em><ul>`;
      dream.meanings.forEach(meaning => {
        html += `<li>${meaning}</li>`;
      });
      html += `</ul>`;
      totalClaves += dream.meanings.filter(m => m !== "🔍 No se detectaron palabras clave conocidas.").length;
    }

    if (dream.consejos.length > 0) {
      html += `<br><em>💡 Consejo:</em><ul>`;
      dream.consejos.forEach(c => {
        html += `<li>${c}</li>`;
      });
      html += `</ul>`;
      totalConsejos += dream.consejos.filter(c => !c.startsWith("💡 Consejo general")).length;
    }

    html += `<br><strong>🌟 Emoción general:</strong> ${dream.emocion}`;
    emocionSet.add(dream.emocion);

    if (dream.combinacion) {
      html += `<br><strong>🌙 Combinación detectada:</strong> ${dream.combinacion}`;
      totalCombinaciones++;
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
  document.getElementById('totalConsejos').textContent = totalConsejos;
  document.getElementById('totalCombos').textContent = totalCombinaciones;
  document.getElementById('totalEmociones').textContent = emocionSet.size;
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
