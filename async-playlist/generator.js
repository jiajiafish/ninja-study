function asyncfunc() {
    let ret =100;
    setTimeout(
        ()=>{
            it.next(ret)
        },1000
    )
}

function *gen(){
    let ret = yield asyncfunc()
    console.log(ret)
}

let it = gen()
it.next()