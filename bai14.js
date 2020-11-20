//Không dùng reducer
function totalQuality(list) {
    var total = 0;
    list.forEach(function(item){
        total += item.qulity;
    })
    return total;
}

//dùng reduce
function totalQuality(list){
    var reducer = (accumlator, currrentValue) => accumlator + currrentValue.qulity;
    return list.reducer(reducer, 0);
}