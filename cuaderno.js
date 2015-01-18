function AlumnosController($scope){
    $scope.alumnos=[
        {nombre:"Juan Blanco", telefono: "123456789", curso: "Segundo ESO"},
        {nombre:"Rosa Blanco", telefono: "123456789", curso: "Segundo ESO"},
        {nombre:"Pepe Blanco", telefono: "123456789", curso: "Primero ESO"},
        {nombre:"Julian Blanco", telefono: "123456789", curso: "Primero ESO"}
    ];
    
$scope.Save = function(){
    $scope.alumnos.push({nombre:$scope.nuevoAlumno.nombre, telefono:$scope.nuevoAlumno.telefono, curso:$scope.nuevoAlumno.curso});   
    $scope.formVisibility = false;
}

$scope.ShowForm = function(){
    $scope.formVisibility = true;   
}

}

