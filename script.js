const diccionarioSuenos = [
{ palabras: ["fuego", "fuegos", "incendio", "llamas", "arder", "brasas", "quemar", "quema", "fogata", "explosión"], significado: "Conflictos internos o emociones intensas", emocion: "intenso", consejo: "Buscá calmar tensiones y resolver lo que te preocupa." },
  { palabras: ["agua", "aguas", "mar", "mares", "río", "ríos", "lluvia", "lluvias", "océano", "océanos", "nadar", "inundación", "charco", "laguna", "cascada", "arroyo", "gota", "goteras"], significado: "Estado emocional, cómo fluye tu vida", emocion: "neutral", consejo: "Prestá atención a tus sentimientos y dejá fluir lo que no podés controlar." },
  { palabras: ["volar", "volé", "volaba", "volando", "alas", "planeaba", "despegar", "elevé", "flotar"], significado: "Deseos de libertad o de superar obstáculos", emocion: "positivo", consejo: "Animate a seguir tus sueños y soltar lo que te ata." },
  { palabras: ["muerte", "morir", "muerto", "fallecido", "cementerio", "tumba", "difunto", "funeral", "sepultura"], significado: "Fin de una etapa y comienzo de algo nuevo", emocion: "confuso", consejo: "No temas a los cambios, son oportunidades de crecimiento." },
  { palabras: ["caer", "caí", "caía", "caída", "precipicio", "abismo", "resbalar", "derrumbe", "desmoronar"], significado: "Temor al fracaso o a perder el control", emocion: "angustiante", consejo: "Recordá que equivocarse es parte del aprendizaje." },
  { palabras: ["oscuridad", "oscuro", "tinieblas", "sombra", "noche", "niebla", "sombras", "neblina"], significado: "Incertidumbre o miedo a lo desconocido", emocion: "angustiante", consejo: "Buscá claridad en lo que hoy te genera dudas." },
  { palabras: ["serpiente", "serpientes", "víbora", "víboras", "cobra", "culebra", "reptil", "reptiles"], significado: "Posible traición o peligro oculto", emocion: "tenso", consejo: "Estate atento a las intenciones de los demás." },
  { palabras: ["terremoto", "temblor", "tsunami", "huracán", "tormenta", "desastre", "catástrofe", "tifón", "ciclón"], significado: "Sentís que tu vida está fuera de control", emocion: "intenso", consejo: "Buscá apoyo y aferrate a lo que te da seguridad." },
  { palabras: ["ángel", "ángeles", "ser celestial", "arcángel", "luz divina", "ser de luz"], significado: "Protección y guía espiritual", emocion: "positivo", consejo: "Confiá en que hay fuerzas que te acompañan." },
  { palabras: ["fantasma", "fantasmas", "espíritu", "espíritus", "aparecido", "espectro"], significado: "Asuntos pendientes o recuerdos que vuelven", emocion: "confuso", consejo: "Reflexioná sobre lo que aún necesitás cerrar." },
  { palabras: ["ser querido", "seres queridos", "familiar", "familiares", "amigo", "amiga", "amigos", "abuelo", "abuela", "madre", "padre", "hermano", "hermana", "primo", "prima"], significado: "Necesidad de afecto o nostalgia", emocion: "positivo", consejo: "Valorá tus relaciones y el tiempo con los tuyos." },
  { palabras: ["enemigo", "enemigos", "rival", "rivales", "oponente", "oponentes", "contrincante"], significado: "Conflicto externo o interno", emocion: "tenso", consejo: "Intentá resolver tensiones y buscar la paz." },
  { palabras: ["multitud", "gente", "personas", "masa", "manifestación"], significado: "Sensación de ser parte de algo más grande o de perderse en la multitud", emocion: "confuso", consejo: "Fijate cómo te sentís en lo colectivo, no pierdas tu individualidad." },
  { palabras: ["iglesia", "templo", "misa", "altar", "religión"], significado: "Búsqueda espiritual o cuestionamientos morales", emocion: "neutral", consejo: "Escuchá tus valores y creencias, y buscá coherencia." },
  { palabras: ["policía", "ley", "juez", "cárcel", "prisión"], significado: "Sentimientos de culpa o miedo al castigo", emocion: "tenso", consejo: "Revisá si sentís que te estás juzgando demasiado." },
  { palabras: ["teléfono", "mensaje", "red social", "whatsapp", "facebook"], significado: "Necesidad de comunicarte o miedo a la exposición", emocion: "confuso", consejo: "Cuidá cómo te mostrás y buscá conexiones reales." },
  { palabras: ["robot", "máquina", "inteligencia artificial"], significado: "Miedo o fascinación por el avance tecnológico", emocion: "neutral", consejo: "No dejes que lo nuevo opaque tu esencia." },
  { palabras: ["escuela", "aula", "clase", "maestro", "profesor"], significado: "Necesidad de aprender o miedo al juicio", emocion: "tenso", consejo: "Aprendé sin miedo al error, todo suma." },
  { palabras: ["rascacielos", "ciudad", "tráfico", "metro"], significado: "Sensación de estar atrapado en la rutina o sistema", emocion: "tenso", consejo: "Buscá momentos de calma en lo cotidiano." },
  { palabras: ["boda", "casamiento", "novia", "novio", "anillo"], significado: "Unión, compromiso o deseo de conexión profunda", emocion: "positivo", consejo: "Valorá los lazos que querés fortalecer." },
  { palabras: ["puerta", "portón", "entrada", "salida"], significado: "Oportunidades o cierres de etapas", emocion: "neutral", consejo: "Pensá qué querés abrir o cerrar en tu vida." },
  { palabras: ["puente", "cruce", "pasarela", "encrucijada"], significado: "Transición o cambio en tu vida", emocion: "neutral", consejo: "Aprovechá los momentos de cambio para crecer." },
  { palabras: ["árbol", "árboles", "bosque", "rama", "hoja"], significado: "Crecimiento personal y conexión con la naturaleza", emocion: "positivo", consejo: "Buscá tus raíces y valorá tu desarrollo." },
  { palabras: ["lluvia", "tormenta", "granizo", "nube"], significado: "Liberación de tensiones o emociones", emocion: "neutral", consejo: "Dejá que lo que tenga que salir, salga." },
  { palabras: ["espejo", "reflejo", "imagen"], significado: "Autoobservación, cómo te ves a vos mismo", emocion: "confuso", consejo: "Reflexioná sobre tu imagen y lo que proyectás." },
  { palabras: ["isla", "desierto", "soledad"], significado: "Necesidad de aislarte o sensación de estar solo", emocion: "confuso", consejo: "Buscá momentos de introspección sin desconectarte de los demás." },
  { palabras: ["nieve", "hielo", "frío", "escarcha"], significado: "Frialdad emocional o distanciamiento", emocion: "neutral", consejo: "Reconectate con tus emociones y vínculos." },
  { palabras: ["tesoro", "oro", "joya", "diamante"], significado: "Deseo de encontrar algo valioso o parte de vos", emocion: "positivo", consejo: "Prestá atención a lo que realmente valorás." },
  { palabras: ["moto", "bicicleta", "camioneta", "vehículo"], significado: "Rumbo y control de tu vida", emocion: "neutral", consejo: "Pensá si estás yendo hacia donde querés." },
  { palabras: ["ascensor", "escalera", "subir", "bajar"], significado: "Progreso o retroceso", emocion: "neutral", consejo: "Evaluá si sentís que estás avanzando o estancado." },
  { palabras: ["explosión", "bomba", "estallido"], significado: "Acumulación de tensión que necesita salir", emocion: "intenso", consejo: "Buscá formas sanas de expresar lo que sentís." },
  { palabras: ["libro", "página", "escrito"], significado: "Sabiduría, mensajes o aprendizajes pendientes", emocion: "positivo", consejo: "Estás en un momento de aprender y crecer." },
  { palabras: ["telaraña", "araña"], significado: "Sensación de estar atrapado o manipulado", emocion: "tenso", consejo: "Identificá lo que te limita y liberate." },
  { palabras: ["castillo", "palacio", "mansión"], significado: "Grandes aspiraciones o deseos de protección", emocion: "positivo", consejo: "Cuidá lo que construiste y soñá en grande." },
  { palabras: ["jardín", "flores", "plantas"], significado: "Armonía, crecimiento y belleza interior", emocion: "positivo", consejo: "Disfrutá y cultivá lo bueno que hay en vos." },
  { palabras: ["escuela", "colegio", "universidad"], significado: "Lecciones de la vida, necesidad de aprender", emocion: "neutral", consejo: "Abrite al aprendizaje sin miedo al error." },
  { palabras: ["avión", "vuelo", "aeropuerto"], significado: "Cambios importantes o viajes", emocion: "positivo", consejo: "Aprovechá las oportunidades que se presentan." },
  { palabras: ["tren", "estación", "vagón"], significado: "Rumbo fijo o inevitabilidad del destino", emocion: "neutral", consejo: "Sé consciente del camino que elegís." },
  { palabras: ["teatro", "escenario", "actuar"], significado: "Lo que mostrás a los demás, tu imagen pública", emocion: "confuso", consejo: "Sé auténtico, no actúes solo para agradar." },
  { palabras: ["hospital", "enfermería", "doctor"], significado: "Necesidad de sanación o cuidado", emocion: "tenso", consejo: "Atendé lo que tu cuerpo y alma necesitan." },
  { palabras: ["luz", "claridad", "rayo"], significado: "Esperanza, guía, solución", emocion: "positivo", consejo: "Seguí el camino que te da paz y claridad." },
  { palabras: ["animal", "mascota", "bestia"], significado: "Instintos, fuerza interior", emocion: "neutral", consejo: "Escuchá tus necesidades más profundas." },
  { palabras: ["mariposa", "oruga"], significado: "Transformación, cambio positivo", emocion: "positivo", consejo: "Confiá en los procesos de cambio, traen crecimiento." },
  { palabras: ["montaña", "cerro", "cima"], significado: "Desafíos y metas", emocion: "positivo", consejo: "Paso a paso llegás a tus objetivos." },
  { palabras: ["puñal", "cuchillo", "arma blanca"], significado: "Miedo a traiciones o heridas emocionales", emocion: "tenso", consejo: "Cuidá a quién le das tu confianza." },
  { palabras: ["cadena", "atado", "prisión"], significado: "Sensación de estar atrapado o limitado", emocion: "tenso", consejo: "Identificá lo que te impide avanzar y liberate." },
  { palabras: ["manos", "dedos", "brazos"], significado: "Acciones, capacidades o vínculos", emocion: "neutral", consejo: "Usá tus habilidades para construir lo que querés." },
  { palabras: ["corona", "rey", "reina"], significado: "Deseo de poder o liderazgo", emocion: "positivo", consejo: "Reconocé tu valor y liderá desde la humildad." },
  { palabras: ["caverna", "cueva", "subterráneo"], significado: "Búsqueda interior o enfrentar miedos", emocion: "confuso", consejo: "No temas mirar hacia adentro para entenderte." },
  { palabras: ["perla", "gema", "joya"], significado: "Lo valioso oculto dentro tuyo", emocion: "positivo", consejo: "Buscá lo mejor de vos mismo y hacelo brillar." },
  { palabras: ["circo", "payaso", "carpa"], significado: "Lo absurdo o lo que no tomás en serio", emocion: "confuso", consejo: "Encontrá el equilibrio entre diversión y responsabilidad." },
  { palabras: ["desierto", "arena", "sequía"], significado: "Soledad o etapa árida de la vida", emocion: "confuso", consejo: "Buscá el oasis: aquello que te nutre y da paz." },
  { palabras: ["mercado", "feria", "negocio"], significado: "Intercambios, decisiones económicas", emocion: "neutral", consejo: "Pensá bien antes de dar algo a cambio." },
  { palabras: ["puño", "golpe", "pelea"], significado: "Rabia contenida o conflicto", emocion: "intenso", consejo: "Canalizá esa energía de forma constructiva." },
  { palabras: ["escudo", "armadura"], significado: "Necesidad de protegerte", emocion: "tenso", consejo: "Defendete pero no cierres tu corazón." },
  { palabras: ["cruz", "rosario", "rezo"], significado: "Fe, búsqueda de guía espiritual", emocion: "positivo", consejo: "Conectate con lo que te da paz interior." },
  { palabras: ["puerto", "barco", "vela"], significado: "Viaje emocional o vital", emocion: "positivo", consejo: "Lanzate a lo nuevo con confianza." },
  { palabras: ["nube", "cielo", "firmamento"], significado: "Sueños, metas lejanas o ideales", emocion: "positivo", consejo: "No dejes de soñar, pero mantené los pies en la tierra." },
  { palabras: ["murciélago", "búho", "animal nocturno"], significado: "Conexión con el inconsciente o lo oculto", emocion: "confuso", consejo: "Prestá atención a lo que tu intuición te dice." },
  { palabras: ["laberinto", "pérdida", "callejón"], significado: "Confusión, falta de rumbo", emocion: "confuso", consejo: "Tomate un tiempo para aclarar tus objetivos." },
  { palabras: ["velas", "fuego suave", "luz tenue"], significado: "Esperanza en la oscuridad", emocion: "positivo", consejo: "Aferrate a lo que te da calma y guía." },
  { palabras: ["puente roto", "paso quebrado"], significado: "Obstáculo en un cambio o transición", emocion: "tenso", consejo: "Buscá alternativas, no te estanques." },
  { palabras: ["llaves", "cerradura", "candado"], significado: "Acceso a nuevas oportunidades o secretos", emocion: "neutral", consejo: "Pensá bien antes de abrir nuevas puertas." },
  { palabras: ["carro", "carreta", "caravana"], significado: "Proceso lento pero firme", emocion: "neutral", consejo: "No te apures, cada paso cuenta." },
  { palabras: ["volcán", "lava", "erupción"], significado: "Emociones intensas a punto de explotar", emocion: "intenso", consejo: "Buscá calmarte antes de actuar impulsivamente." },
  { palabras: ["pantano", "barro", "lodazal"], significado: "Dificultad para avanzar", emocion: "confuso", consejo: "Cuidá dónde pisás y elegí bien tu camino." },
  { palabras: ["bandera", "símbolo", "emblema"], significado: "Identidad, pertenencia", emocion: "positivo", consejo: "Honrá lo que representás y defendé tus valores." },
  { palabras: ["campana", "sonido", "alarma"], significado: "Advertencia o anuncio importante", emocion: "tenso", consejo: "Estate atento a lo que pasa a tu alrededor." },
  { palabras: ["globo", "aire", "flotar"], significado: "Sueños, aspiraciones que suben", emocion: "positivo", consejo: "Seguí tus ideales sin perder la base." },
  { palabras: ["piedra", "roca", "peñasco"], significado: "Obstáculos o firmeza", emocion: "neutral", consejo: "Fijate si algo te frena o te sostiene." },
  { palabras: ["faro", "luz guía", "torre"], significado: "Esperanza y dirección", emocion: "positivo", consejo: "Seguí lo que te da luz y claridad." },
  { palabras: ["sombrero", "capucha", "velo"], significado: "Ocultar algo o protegerse", emocion: "confuso", consejo: "Mostrate tal como sos, sin miedos." },
  { palabras: ["parque", "plaza", "espacio verde"], significado: "Necesidad de paz o conexión natural", emocion: "positivo", consejo: "Buscá momentos para relajarte." },
  { palabras: ["cadena rota", "grillete suelto"], significado: "Liberación de ataduras", emocion: "positivo", consejo: "Disfrutá de tu libertad recién lograda." },
  { palabras: ["humo", "niebla densa"], significado: "Confusión, cosas poco claras", emocion: "confuso", consejo: "Esperá a que todo se aclare antes de actuar." },
  { palabras: ["mariposa", "oruga", "capullo"], significado: "Transformación positiva", emocion: "positivo", consejo: "Confiá en el proceso de cambio." },
  { palabras: ["puñetazo", "golpe", "pelea"], significado: "Rabia acumulada", emocion: "intenso", consejo: "Canalizá tu enojo de forma sana." },
  { palabras: ["música", "melodía", "canción"], significado: "Emociones que buscan salir", emocion: "positivo", consejo: "Dejá que lo que sentís se exprese." },
  { palabras: ["puerta cerrada", "candado", "cerradura"], significado: "Bloqueo o falta de acceso", emocion: "tenso", consejo: "Buscá la llave para avanzar." },
  { palabras: ["carretera", "ruta", "camino largo"], significado: "Trayecto de vida, futuro", emocion: "neutral", consejo: "Disfrutá el viaje, no solo la meta." },
  { palabras: ["escalera rota", "peldaño roto"], significado: "Dificultad para progresar", emocion: "tenso", consejo: "Buscá otras formas de avanzar." },
  { palabras: ["llama", "vela encendida"], significado: "Esperanza tenue", emocion: "positivo", consejo: "Aferrate a la luz que aún brilla." },
  { palabras: ["corazón", "latido", "pecho"], significado: "Amor, emociones profundas", emocion: "positivo", consejo: "Escuchá lo que realmente sentís." },
  { palabras: ["barranco", "precipicio", "desnivel"], significado: "Peligro o miedo al vacío", emocion: "angustiante", consejo: "Tené cuidado y avanzá con firmeza." },
  { palabras: ["cascada", "agua que cae"], significado: "Liberación, limpieza emocional", emocion: "positivo", consejo: "Dejá fluir lo que ya no necesitás." },
  { palabras: ["estrella", "cielo estrellado"], significado: "Esperanza, guía lejana", emocion: "positivo", consejo: "Seguí tus sueños más altos." },
  { palabras: ["tren perdido", "salida perdida"], significado: "Oportunidad que sentís que se fue", emocion: "confuso", consejo: "Fijate qué nuevas oportunidades aparecen." },
  { palabras: ["pared", "muro", "barrera"], significado: "Obstáculo emocional o mental", emocion: "tenso", consejo: "Identificá lo que te bloquea y trabajalo." }
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
