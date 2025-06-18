function Mostrali(id) {
  // Esconde todas as listas
  document.getElementById('liCachaca').classList.remove('active');
  document.getElementById('liCerveja').classList.remove('active');
  document.getElementById('liGelo').classList.remove('active');
  document.getElementById('liEnergetico').classList.remove('active');
  document.getElementById('licopao').classList.remove('active');
  // Mostra apenas a selecionada
  document.getElementById(id).classList.add('active');
}
function Bfuncao(id) {
  const destino = document.getElementById(id);
  if (destino) {
    destino.scrollIntoView({ behavior: "smooth" });
  } else {
    console.warn("Elemento com ID '" + id + "' não encontrado.");
  }
}
window.onscroll = function () {
  const btn = document.getElementById("voltar-topo");
  if (window.scrollY > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

document.getElementById("voltar-topo").onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};