function agregarTodo(){
	if (document.getElementById("todoInput").value == "") {
		alert("Add task in the field");
		return;
	}

	var tarea = document.getElementById('todoInput');
	var textNodo = document.createElement("p");
	textNodo.innerHTML = tarea.value;
	textNodo.setAttribute("class", "alert alert-dark todo-item");
	var lista = document.getElementById('list');
	lista.appendChild(textNodo);
	var btnCerrar = document.createElement("span");
	btnCerrar.innerHTML ="&times;";
	btnCerrar.setAttribute("class", "rg");
	textNodo.appendChild(btnCerrar);
	tarea.value="";
	
	textNodo.onclick = function(){
		marcar(this);
	}

	btnCerrar.onclick = function(){
		eliminar(this);
	}
}

function marcar(e){
	e.style.backgroundColor = "black";
	e.style.color = "white";
	e.style.textDecoration="line-through";

}

function eliminar(e){
	var r = confirm("Are you sure to delete this item?");// pregunta si el usuario esta seguro de eliminar el task de la lista y si confirma lo
	if(r == true ){
	var lista = document.getElementById("list");
	lista.removeChild(e.parentNode);
	}
}


$(document).ready(function(){
	$("#importante").click(function(){
	  $("p").css("background-color", "red");
	});
  });

  $(document).ready(function(){
	$("#esconder").click(function(){
		$("#list").hide();
	});
	$("#mostrar").click(function(){
		$("#list").show();
	});
});

$(document).ready(function(){
	$("#desplegar").click(function(){
		
		$("#opciones").fadeIn(3000);
	});
});