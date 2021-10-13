function receivesAFunction(param){
    param();
}

function returnsANamedFunction() {
    return function test(){
    } 
}

function returnsAnAnonymousFunction() {
    return function(){
    }
}