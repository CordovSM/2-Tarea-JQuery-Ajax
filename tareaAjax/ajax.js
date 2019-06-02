$("#listar").click(function(){
	getProducts();
});

function getProducts(){
    $.ajax({
        url:"https://mini-shop-rg.herokuapp.com/products",
        type:"GET",
        dataType: "json",
        success: function(resultado){
            var collectionProducts = resultado;
            var listaProductos = $("#listaproductos");
        
            for(var i=0; i < collectionProducts.length; i++){

                var productos = collectionProducts[i];
                listaProductos.append(
                    "<div class='column'><div class='card'><img src="+ productos.image +  " />"+
                   "<strong><br><h4>" + productos.name + "</strong></h4>"+
                   "<strong><h5>" + "$" + productos.price + "</strong></h5>"+
                   "<p>" + "Stock:" + " " + productos.stock + "</p>"+
                   "<p class='txt'>" + productos.description + "</p></div></div>",

                );

            }
        
        },
    });
};