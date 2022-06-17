function show(val){
    document.getElementById("outp").value=document.getElementById("outp").value+val
}
function clearal(cl){
    document.getElementById("outp").value=""
}
function theresult(){
    var temp=document.getElementById("outp").value
    var resul=eval(temp)
    document.getElementById("outp").value=resul
    }