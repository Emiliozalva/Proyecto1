class estudiante{
    // atributos privados
    #nombre;
    #apellido;
    #dni;
    #estado;
    #nota;
    /// constructor
    constructor(ape, nom, DNI,nota){
        this.#nombre = nom;
        this.#apellido = ape;
        this.#dni = parseInt(DNI);
        this.#estado = 0;
        this.#nota = parseFloat(nota);
    }
    /// metodos publicos
    verNombre(){
        return this.#nombre;
    }
    verDni(){
        return this.#dni;
    }
    verNota(){
        return this.#nota;
    }
    verApellido(){
        return this.#apellido;
    }
    verEstado(){
        return this.#estado;
    }
    actualizarNota(x){
        this.#nota = x;
    }
    actualizarEstado(x){
        this.#estado = x;
    }
}

class materia{
    #nombre; ///atributos privados
    #iD;
    #listado;
    constructor(nom,id){///constructor
        this.#nombre = nom;
        this.#iD = id;
        this.#listado = [];
    }
    ///metodos utiles
    verID(){return this.#iD;}
    verNombre(){return this.#nombre}
asignarAlumno(x) {
    this.#listado.push(x);
    this.#listado.sort((a, b) => a.verApellido().localeCompare(b.verApellido()));
}
    asignarGrupoAlumnos(x){
        this.#listado.push(x);
        this.#listado.sort((a, b) => a.verApellido.localeCompare(b.verApellido));
    }
    mostrarListado(){
        if(this.#listado.length <= 0){
            console.log("Aun no hay almunos en esta materia")
        }else{
            for(let i = 0; i<this.#listado.length;i++){
            console.log(this.#listado[i].verApellido()+", "+this.#listado[i].verNombre())
            }
        }
    }
    getMejorNota(){
    let aux = 0;
    for(let i = 0; i < this.#listado.length; i++){
        if(this.#listado[i].verNota() > aux){
            aux = this.#listado[i].verNota();
        }
    }
    return aux;
}
    getAlumnoMejorNota(){
        let aux = 0;
        let ind = 0;
        for(let i = 0; i < this.#listado.length; i++){
            if(this.#listado[i].verNota() > aux){
                aux = this.#listado[i].verNota();
                ind = i;
            }
        }
    return this.#listado[ind];
}
    Quitaralumno(eliminado){
        let x=eliminado.toLowerCase();
        let aux = this.#listado.length;
        for(let i = 0; i<this.#listado.length;i++){
            if(x == this.#listado[i].verApellido().toLowerCase()){
                this.#listado.splice(i,1);
            }
        }
        if(aux == this.#listado.length){
            console.log("no se encontor al almuno");
        }
    }
    getPromedio(){
        let aux = 0;
        let promedio = 0;
        if(this.#listado.length<=0){
            console.log("La materia aun no tiene alumnos");
        }else{
            for(let i = 0; i<this.#listado.length;i++){
            aux = aux + this.#listado[i].verNota();
            promedio = aux/(i+1);
        }
        }
        return promedio; 
    }
}



materia1 = new materia("Algoritmo y Estructura de Datos","AED25");
materia1.asignarAlumno(new estudiante("Zalva","Emilio",56498651,10));
materia1.asignarAlumno(new estudiante("Perez","Juan",56492981,7));
console.log("Opciones disponibles:");
console.log("1. Ver ID de la materia");
console.log("2. Ver nombre de la materia");
console.log("3. Agregar un alumno");
console.log("4. Mostrar listado de alumnos");
console.log("5. Ver mejor nota");
console.log("6. Ver alumno con mejor nota");
console.log("7. Quitar alumno por apellido");
console.log("8. Obtener promedio de la materia");
console.log("9. Salir");
/// la funcion asignar grupo de alumnos no hubo forma de hacerla funcionar bien 
let b = 1;

while (b === 1) {

    let a = parseInt(prompt("Ingrese una opción:"));

    switch (a) {
        case 1:
            console.log("ID de la materia:", materia1.verID());
            break;
        case 2:
            console.log("Nombre de la materia:", materia1.verNombre());
            break;
        case 3:
            let apellido = prompt("Apellido del alumno:");
            let nombre = prompt("Nombre del alumno:");
            let dni = prompt("DNI del alumno:");
            let nota = prompt("Nota del alumno:");
            let nuevo = new estudiante(apellido, nombre, dni, nota);
            materia1.asignarAlumno(nuevo); 
            console.log("Alumno agregado.");
            break;
        case 4:
            materia1.mostrarListado();
            break;
        case 5:
            console.log("Mejor nota:", materia1.getMejorNota());
            break;
        case 6:
            let mejor = materia1.getAlumnoMejorNota();
            console.log("Alumno con mejor nota:");
            console.log(mejor.verApellido() + ", " + mejor.verNombre() + " - Nota: " + mejor.verNota());
            break;
        case 7:
            let apellidoEliminar = prompt("Apellido del alumno a eliminar:");
            materia1.Quitaralumno(apellidoEliminar);
            break;
        case 8:
            console.log("Promedio de la materia:", materia1.getPromedio());
            break;
        case 9:
            console.log("Saliendo...");
            b = 0;
            break;
        default:
            console.log("Opción inválida.");
    }

    if (b == 1) {
        b = parseInt(prompt("¿Desea realizar otra operación? 1 (sí) - 0 (no)"));
    }
}