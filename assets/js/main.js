// Función que nos permitirá recuperar los datos del usuario
function saveData(){
  var name = document.getElementById('name').value;
  var clave = document.getElementById('clave').value;
  sessionStorage.setItem(name,clave);
}

// Recorremos con for nuestro sessionStorage donde con getItem decimos que nos recupere los datos guardados anteriormente.

function recoverData(){
  for(var i = 0; i < sessionStorage.length; i++){
    var name = sessionStorage.key(i);
    var clave = sessionStorage.getItem(name);
    document.getElementById('data').innerHTML = '<div>' + 'Nombre : ' + name + '<br/> Clave: ' + clave + '</div>';
  }
}

// Limpiaremos los datos. Si volvemos a consultarlos se mostrarán nuevamente en pantalla.
function cleanData(){
  document.getElementById('data').innerHTML = "Limpiada vista. Los datos permanecen.";
}

function borrarTodo(){
  sessionStorage.clear();
  recoverData();
}
