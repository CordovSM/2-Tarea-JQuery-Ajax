function agregarTodo(){
	if (document.getElementById("todoInput").value == "") {
		alert("Ingrese un to-do en el campo");
		return;
	}//Primero se verifica si hay text en el camo de agregar un todo, esto es una validacion 
	 //campos vacios.
 
//Declaramos las variables con que agregamos los todo.
	var tarea = document.getElementById('todoInput');
	var textNodo = document.createElement("p");
	textNodo.innerHTML = tarea.value;
	textNodo.setAttribute("class", "alert alert-info todo-item");
	var lista = document.getElementById('list');
	lista.appendChild(textNodo);
	var btnCerrar = document.createElement("span");
	btnCerrar.innerHTML ="&times;";
	btnCerrar.setAttribute("class", "align-right");
	textNodo.appendChild(btnCerrar);
	tarea.value="";
	
	textNodo.onclick = function(){
		marcar(this);
	}

	btnCerrar.onclick = function(){
		eliminar(this);
	}
}

//Creacion de las funciones de borrado y funcion de marcado de todo 

function marcar(e){
	e.style.backgroundColor = "green";
	e.style.color = "white";
	e.style.textDecoration="line-through";

}

function eliminar(e){
	var r = confirm("Esta seguro que desea eliminar este item de la lista");// pregunta si el usuario esta seguro de eliminar el task de la lista y si confirma lo
	if(r == true ){
	var lista = document.getElementById("list");
	lista.removeChild(e.parentNode);
	}else{
		alert("No se eliminara el task");
	}
}
