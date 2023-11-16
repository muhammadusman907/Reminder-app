function callBack(nameSelects){
       setTimeout(function (){
        var names  = "usman"
         console.log(nameSelects(names))
       } ,1000)
}
function nameSelect(mill){
    console.log(mill)
}
callBack(nameSelect)