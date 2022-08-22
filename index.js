function today(){
    return new Date();
}
function receivesAFunction(today){
    return today()
}

function addNumbers(a,b){
    return a + b
}

function returnsANamedFunction(){
    return addNumbers
}
function returnsAnAnonymousFunction(){
return ()=>{ console.log("This is the way")}
}