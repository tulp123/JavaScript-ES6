//Không dùng ES6
function filterProductByID(id, listProduct){
    var result = [];
    listProduct.forEach(function(item) {
        if(item.id = id){
            result.push(item);
        }
    });
    return result[0].name;
}

//dùng es6
function filterProductByID(id,listProduct){
    var result = listProduct.find(listProduct => listProduct.id = id);
    return result.name;
}