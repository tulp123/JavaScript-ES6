//k dùng ES6
function isHaveProductInCategory(list, categoryId){
        var check = 0;
        list.forEach(function(item) {
            if(item.categoryId = categoryId){
                check ++;
            }
        });
        if(check == 0){
            return false;
        }
        else {
            return true;
        }
}

//Dùng ES6
function isHaveProductInCategory(list, categoryId){
    var check = list.find(item => item.categoryId = categoryId);
    list.every(check);
}