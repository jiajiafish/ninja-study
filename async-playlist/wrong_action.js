function asyncfunc() {
    let ret =100;
    setTimeout(
        ()=>{
            return ret;
        },1000
    )
}

let ret = asyncfunc()
console.log(ret)