var estudiantes =["fernando","Marcelo","Nahir","Dana"];

function saludarestudiantes (estudiantes){
    console.log('Hola, ${Estudiante}');
}

while(estudiantes.length>0){
    console.log(estudiantes)
    var estudiante = estudiantes.shift();
    saludarestudiantes(estudiante);
}



var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiante(estudiante) {
    console.log(`Hola ${estudiante}`);
}

var i = 0;

//do-while
do {
    saludarEstudiante(estudiantes[i]);
    i++;
} while (i < estudiantes.length)

//while
while (estudiantes.length > 0) {
    var estudiante = estudiantes.shift();
    saludarEstudiante(estudiante);
}


//El código del While podría no ejecutarse si la condición no se cumple
// Do While tu código se ejecuta al menos una vez.