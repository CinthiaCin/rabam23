function guardarAsistencia() {
  const fechaSeleccionada = document.getElementById('fecha').value;
  const checkboxes = document.querySelectorAll('.asistenciaCheckbox');

  checkboxes.forEach((checkbox, index) => {
    const nombreAlumno = `Alumno ${index + 1}`;
    const asistencia = checkbox.checked ? 'Presente' : 'Ausente';
    console.log(`Fecha: ${fechaSeleccionada}, Nombre: ${nombreAlumno}, Asistencia: ${asistencia}`);
  });

}

function marcarTodos() {
  const checkboxes = document.querySelectorAll('.asistenciaCheckbox');
  checkboxes.forEach(checkbox => checkbox.checked = true);
}

function desmarcarTodos() {
  const checkboxes = document.querySelectorAll('.asistenciaCheckbox');
  checkboxes.forEach(checkbox => checkbox.checked = false);
}


