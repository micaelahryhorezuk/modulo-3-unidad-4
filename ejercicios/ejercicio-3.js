/**
 * Ejercicio 3: 
 * Dado el siguiente array de alumnos utilizar los métodos de array vistos para generar un array con los alumnos aprobados.
 * Se considera aprobado todo alumno que tenga una nota mayor o igual a 7.
 * 
 * Array: var alumnos = [{ nombre: 'Juan Gomez', nota: 7}, { nombre: 'Pedro Rodriguez', nota: 4 }, { nombre: 'Roxana García', nota: 8 }, { nombre: 'Luciano Lopez', nota: 5 }, { nombre: 'Fernanda Gimenez', nota: 6 }, { nombre: 'Florencia Martinez', nota: 10 }, { nombre: 'Raul Sanchez', nota: 7 }, { nombre: 'Sandra Figueroa', nota: 8 } ];
 */

 var alumnos = [
    { nombre: 'Juan Gomez', nota: 7 },
    { nombre: 'Pedro Rodriguez', nota: 4 },
    { nombre: 'Roxana García', nota: 8 },
    { nombre: 'Luciano Lopez', nota: 5 },
    { nombre: 'Fernanda Gimenez', nota: 6 },
    { nombre: 'Florencia Martinez', nota: 10 },
    { nombre: 'Raul Sanchez', nota: 7 },
    { nombre: 'Sandra Figueroa', nota: 8 }
];
console.warn("alumnos", alumnos);

const getApprovedStudentsWithFor = (array) => {
    if (!Array.isArray(array) || array.length == 0) return [];
    const newArray = [];
    for (let i = 0; i < array.length; i++) if (array[i].nota >= 7) newArray.push(array[i]);
    return newArray;
};
console.warn("getApprovedStudentsWithFor(alumnos)", getApprovedStudentsWithFor(alumnos));

const getApprovedStudentsWithWhile = (array) => {
    if (!Array.isArray(array)) return [];
    const newArray = [];
    let i = 0;
    while (i < array.length) {
        if (array[i].nota >= 7) newArray.push(array[i]);
        i += 1;
    }
    return newArray;
};
console.warn("getApprovedStudentsWithWhile(alumnos)", getApprovedStudentsWithWhile(alumnos));


const getApprovedStudentsWithArrayMap = (array) => {
    if (!Array.isArray(array)) return [];
    return [...array.filter(item => item?.nota >= 7)];
};
console.warn("getApprovedStudentsWithArrayMap(alumnos)", getApprovedStudentsWithArrayMap(alumnos));


const getApprovedStudentsWithForeach = (array) => {
    if (!Array.isArray(array)) return [];
    const newArray = []
    array.forEach(item => { if (item?.nota >= 7) newArray.push(item)});
    return newArray;
};
console.warn("getApprovedStudentsWithForeach(alumnos)", getApprovedStudentsWithForeach(alumnos));

const showDiv = (id) => {
    const div = document.getElementById(id);
    div.style.display = "block";
    div.textContent = `Salida: ${JSON.stringify(getApprovedStudentsWithForeach(alumnos), null, 4)}`;
}