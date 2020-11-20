//Không dùng es6
function filterProductBySaleDate(list){
    var product = [];
    var date = new Date();
    list.forEach(function(item) {
        if(item.saleDate> date.toDateString() && item.quility >0){
            var result = [item.id, item.name];
            product.push(result);
        }
    });
    return product;
}

//Dùng ES6
function filterProductBySaleDate(list){
    var date = new Date();
    var product = list.filter(item => item.saleDate>date.toDateString() && item.quility >0);
    var result = product.map(item => item.id && item.name);
    return result;
}