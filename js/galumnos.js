
const alumnos = [
    { id: 1, nombre: 'Brito Cinthia' },
    { id: 2, nombre: 'Brito' },
    
  ];
  
  
  function inicializarLista() {
    const listaAlumnos = document.getElementById('listaAlumnos');
  
    
    listaAlumnos.innerHTML = '';
  
    
    alumnos.forEach(alumno => {
      const fila = document.createElement('tr');
      fila.innerHTML = `
        <td>${alumno.nombre}</td>
        <td>
          <button onclick="editarAlumno(${alumno.id})">Editar</button>
          <button onclick="eliminarAlumno(${alumno.id})">Eliminar</button>
        </td>
      `;
      listaAlumnos.appendChild(fila);
    });
  }
  
 
  function agregarAlumno() {
    const nombre = prompt('Ingrese el nombre del nuevo alumno:');
    if (nombre) {
      const nuevoAlumno = { id: alumnos.length + 1, nombre };
      alumnos.push(nuevoAlumno);
      inicializarLista();
    }
  }
  
  
  function editarAlumno(id) {
    const nuevoNombre = prompt('Ingrese el nuevo nombre para el alumno:');
    if (nuevoNombre) {
      const alumnoEditado = alumnos.find(alumno => alumno.id === id);
      if (alumnoEditado) {
        alumnoEditado.nombre = nuevoNombre;
        inicializarLista();
      }
    }
  }
  
  
  function eliminarAlumno(id) {
    const confirmacion = confirm('¿Está seguro de eliminar este alumno?');
    if (confirmacion) {
      const indice = alumnos.findIndex(alumno => alumno.id === id);
      if (indice !== -1) {
        alumnos.splice(indice, 1);
        inicializarLista();
      }
    }
  }
  
  
  function actualizarLista() {
    inicializarLista();
  }
  
  
  window.onload = function () {
    inicializarLista();
  };
  