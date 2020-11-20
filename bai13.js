//Không dùng ES6
function filterProductBySaleDate(list){
    var products = [];
    var date = new Date();
    list.forEach(function(item){
          if(item.saleDate> date.toDateString() && item.isDelete == false){
              products.push(item);
          }
    });
    return products;
}

//Dùng ES6
function filterProductBySaleDate(list,id){
    var date = new Date();
    var products = list.filter(list => list.saleDate>date.toDateString() && list.isDelete == false);
    return products;
}