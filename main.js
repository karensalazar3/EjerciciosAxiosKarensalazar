  // variable global
let users = [];

// petición axios (hago la petición y dentro relleno la variable creada anteriormente)
axios.get('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    users = response.data; // Rellenar la variable global con los datos de usuarios
    console.log('Lista completa de usuarios:', users); // Imprimir la lista completa (puede aparecer vacía inicialmente)
  })
  .catch(error => {
    console.error('Error:', error);
  });

// Función para mostrar los usuarios en el DOM
function showUsers() {
  // Obtener el contenedor donde se mostrarán los nombres
  const usersList = document.getElementById('users-list');

  // Limpiar el contenido previo
  usersList.innerHTML = '';

  // Mostrar los nombres de los usuarios
  users.forEach(user => {
    const userNameElement = document.createElement('p'); // Crear un nuevo elemento <p> para cada nombre
    userNameElement.textContent = user.name; // Establecer el nombre del usuario
    usersList.appendChild(userNameElement); // Añadir el elemento <p> al contenedor
  });
}

// Añadir el evento de clic al botón
document.getElementById('show-users-btn').addEventListener('click', showUsers);


