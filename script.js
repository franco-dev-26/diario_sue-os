function saveDream() {
  const input = document.getElementById('dreamInput').value.trim();
  if (input === "") return alert("¡Escribí algo!");

  let dreams = JSON.parse(localStorage.getItem('dreams')) || [];
  const date = new Date().toLocaleString();
  dreams.unshift({ text: input, date: date });

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
    list.appendChild(li);
  });
}


renderDreams()