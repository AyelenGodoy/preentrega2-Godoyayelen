// array de servicios con nombre y precio
const serviciosDeDepilacion = [
    { nombre: "Pierna", precio: 3000 },
    { nombre: "Rostro", precio: 2000 },
    { nombre: "Cavado", precio: 2500 },
    { nombre: "Axilas", precio: 1500 },
    { nombre: "Bozo", precio: 1000 },
    { nombre: "Perfilado de Cejas", precio: 1200 },
  ];
  
  // Función para buscar un servicio por nombre
  function buscarServicioPorNombre(nombre) {
    return serviciosDeDepilacion.find(servicio => servicio.nombre.toLowerCase() === nombre.toLowerCase());
  }
  
  // Array de turnos disponibles con hora y día
  const turnosDisponibles = [
    { hora: "10:00 AM", dia: "Lunes" },
    { hora: "10:30 AM", dia: "Lunes" },
    { hora: "11:00 AM", dia: "Lunes" },
    { hora: "11:30 AM", dia: "Lunes" },
    { hora: "12:00 PM", dia: "Lunes" },
    { hora: "12:30 AM", dia: "Lunes" },
    { hora: "10:00 AM", dia: "Martes" },
    { hora: "10:30 AM", dia: "Martes" },
    { hora: "11:00 AM", dia: "Martes" },
    { hora: "11:30 AM", dia: "Martes" },
    { hora: "12:00 PM", dia: "Martes" },
    { hora: "12:30 AM", dia: "Martes" },
    { hora: "10:00 AM", dia: "Miercoles" },
    { hora: "10:30 AM", dia: "Miercoles" },
    { hora: "10:30 AM", dia: "Miercoles" },
    { hora: "11:00 AM", dia: "Miercoles" },
    { hora: "11:30 AM", dia: "Miercoles" },
    { hora: "12:00 PM", dia: "Miercoles" },
    { hora: "12:30 AM", dia: "Miercoles" },
    { hora: "10:00 AM", dia: "Jueves" },
    { hora: "10:30 AM", dia: "Jueves" },
    { hora: "10:30 AM", dia: "Jueves" },
    { hora: "11:00 AM", dia: "Jueves" },
    { hora: "11:30 AM", dia: "Jueves" },
    { hora: "12:00 PM", dia: "Jueves" },
    { hora: "12:30 AM", dia: "Jueves" },
    { hora: "10:00 AM", dia: "Viernes" },
    { hora: "10:30 AM", dia: "Viernes" },
    { hora: "11:00 AM", dia: "Viernes" },
    { hora: "11:30 AM", dia: "Viernes" },
    { hora: "12:00 PM", dia: "Viernes" },
    { hora: "12:30 AM", dia: "Viernes" },
  ];
  
  // Función para buscar un turno por hora y día
  function buscarTurno(hora, dia) {
    return turnosDisponibles.find(turno => turno.hora === hora && turno.dia === dia);
  }
  
  // Solicitar al usuario seleccionar un servicio de un menú desplegable
  const menuServicios = serviciosDeDepilacion.map(servicio => servicio.nombre);
  const servicioSeleccionado = prompt("Seleccione un servicio:\n" + menuServicios.join("\n"));
  
  // Buscar el servicio por nombre
  const servicioElegido = buscarServicioPorNombre(servicioSeleccionado);
  
  if (servicioElegido) {
    // Solicitar al usuario ingresar la hora y el día del turno
    const horaTurno = prompt("Ingrese la hora del turno (por ejemplo, 10:00 AM):");
    const diaTurno = prompt("Ingrese el día del turno (por ejemplo, Lunes):");
  
    // filter para buscar turnos disponibles
    const turnosDisponiblesFiltrados = turnosDisponibles.filter(turno => turno.hora === horaTurno && turno.dia === diaTurno);
  
    if (turnosDisponiblesFiltrados.length > 0) {
      alert(`Turno confirmado para ${diaTurno} a las ${horaTurno} para el servicio de ${servicioElegido.nombre}. Precio: $${servicioElegido.precio}`);
    } else {
      alert("No se encontraron turnos disponibles para la hora y día especificados.");
    }
  } else {
    alert("El servicio ingresado no está disponible.");
  }
  