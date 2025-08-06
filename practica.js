class estudiante{
    // atributos privados
    #nombre;
    #apellido;
    #dni;
    #estado;
    #nota;
    /// constructor
    constructor(apellido, nombre, DNI,nota){
        this.#nombre = nombre;
        this.#apellido = apellido;
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
    }
    ///metodos utiles
    verID(){return this.#iD;}
    verNombre(){return this.#nombre}
    asingarAlumno(x){
        this.#listado.push(x);
        this.#listado.sort((a, b) => a.verApellido.localeCompare(b.verApellido));
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
            console.log(this.#listado[i].verApellido+", "+this.#listado[i].verNombre)
            }
        }
    }
    getMejorNota(){
    let aux = 0;
    for(let i = 0; i<this.#listado.length;i++){
        if(this.#listado.length[i].verNota() >aux){
            aux = this.#listado.length.verNota();
        }
    }
    return aux;
    }
    getAlumnoMejorNota(){
    let aux = 0;
    let ind = 0;
    for(let i = 0; i<this.#listado.length;i++){
        if(this.#listado.length[i].verNota() >aux){
            aux = this.#listado.length.verNota();
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

const mi_arreglo_de_prueba = [new estudiante("Zalva","Emilio",43233635,10),new estudiante("Perez","Juan",43236635,9)];

materia1 = new materia("Algoritmo y Estructura de Datos","AED25");
materia1.asignarGrupoAlumnos(mi_arreglo_de_prueba);


const x = parseInt(prompt());
switch(x){
    case 1:
        
}