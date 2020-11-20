function listProduct(count){
    var list = [];
    var date = new Date();
    for(var i=1; i<count; i ++){
        var product = new product(i, "list:" +i, i, date, i+10);
        list.push(product);
    }
    return list;
}