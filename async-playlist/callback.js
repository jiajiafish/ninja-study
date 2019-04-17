function asyncfunc(callback) {
    let ret = 100;
    setTimeout(
        ()=> {
callback(ret)
        },1000)

}

function callback(ret){
    console.log(ret)

}
asyncfunc(callback)