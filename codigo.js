const materias = {
  fisica: [90, 6, 4, `fisica`],
  matematica: [84, 8, 4, `matemáticas`],
  logica: [92, 8, 4, `lógica`],
  quimica: [96, 8, 4, `química`],
  calculo: [91, 6, 3, `cálculo`],
  programacion: [79, 7, 4, `programación`],
  biologia: [75, 9, 2, `biología`],
  bbdd: [98, 9, 1, `bases de datos`],
  algebra: [100, 10, 4, `álgebra`],
};

const aprobo = () => {
  for (materia in materias) {
    let asistencias = materias[materia][0];
    let promedio = materias[materia][1];
    let trabajosPracticos = materias[materia][2];

    console.log(materias[materia][3]);

    if (asistencias >= 90) {
      console.log(`%c   Asistencias en orden`, `color:green`);
    } else {
      console.log(`%c   Falta de asistencias`, `color:red`);
    }

    if (promedio >= 7) {
      console.log(`%c   Promedio en orden`, `color:green`);
    } else {
      console.log(`%c   Promedio insuficiente`, `color:red`);
    }

    if (trabajosPracticos >= 3) {
      console.log(`%c   Trabajos Prácticos en orden`, `color:green`);
    } else {
      console.log(`%c   Faltan Trabajos Prácticos`, `color:red`);
    }
  }
};

aprobo();
