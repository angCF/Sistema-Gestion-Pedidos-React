function saludar() {
  alert("HOLA MUNDO");
}

function contar() {
  let i, j
  for (i = 10, j = 0; j < i; j++, i--) {
    console.log('i: ',i);
    console.log('j: ',j);
  }
  let palabra = 'HOLa'
  for (const element of palabra) {
    console.log(element.toLowerCase());
  }
}
const nombre = document.getElementById('dom');
function parrafo(){
    nombre.innerHTML = '<h1> Hola desde el DOM</h1>';
}