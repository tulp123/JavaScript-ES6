//Không dùng ES6
function FilterProductByQuality(item){
    var product = [];
    list.forEach(function(item){
        if(item.quality > 0 && item.isDelete == false){
            product.push(item);
        }
    });
    return product;
}

//Dùng ES6
function FilterProductByQuality(list){
   var result = list.filter(list => list.quality >0 && list.isDelete == false);
   return result;
}
