$(function()
{

var nomServicios = [
	                        {
	                            servicio 	: 	"Trae todas las tareas",
	                            urlServicio	: 	"getAllTask",
	                            metodo		: 	"GET"
	                        },
	                        {
	                            servicio 	: 	"Crear una nueva tarea",
	                            urlServicio	: 	"createTask",
	                            metodo		: 	"POST"
	                        },
	                        {
	                            servicio 	: 	"Editar una tarea",
	                            urlServicio	: 	"updateTask",
	                            metodo		: 	"PUT"
	                        },
	                        {
	                            servicio 	: 	"Eliminar Tarea",
	                            urlServicio	: 	"deleteTask",
	                            metodo		: 	"DELETE"
	                        },
	                        {
	                            servicio 	: 	"Trae una sola tarea",
	                            urlServicio	: 	"getTask",
	                            metodo		: 	"GET"
	                        }
	                    ];

	var consumeServicios = function(tipo, val, callback)
	{
	    var servicio = {
	                        url 	: nomServicios[tipo - 1].urlServicio,
	                        metodo	: nomServicios[tipo - 1].metodo,
	                        datos 	: ""
	                    };
	    if(tipo === 4 || tipo === 5)
	    {
	        servicio.url += "/" + val;
	    }
	    else
	    {
	        servicio.datos = val !== "" ? JSON.stringify(val) : "";
	    }
	    //Invocar el servicio...	    
	    $.ajax(
	    {
	        url 		: servicio.url,
	        type 		: servicio.metodo,
	        data 		: servicio.datos,
	        dataType 	: "json",
	        contentType: "application/json; charset=utf-8"
	    }).done(function(data)
	    {
	        listadoLOCALSTORAGE = data;
	    });
	};


	var listadoLOCALSTORAGE = [];
	var cadena=[];
	$(document).keypress(function(e){

		if(e.which == 13){
			var Actividad = $("#Campo_Texto").val();
				var objTMP = eval(localStorage.getItem("LS_Actividad"));
			    listadoLOCALSTORAGE.push({identificador : Actividad});
	            localStorage.setItem("LS_Actividad", JSON.stringify(listadoLOCALSTORAGE));
	            $("#Label").val(Actividad);
			$("#Campo_Texto").val('');
		}
	});

   function imprimeUsuarios(Actividad)
	{
		var datos = $("#Label").val();
		if(datos.length > 0){
			
			$("#Label").val(cadena);
		}else{
			console.log("no hay nada");
			
		}
	}

});