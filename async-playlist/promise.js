function asyncfunc() {
    let ret = 100;
return new Promise(
    function (resolve) {
        setTimeout(
            ()=>{
                resolve(ret)
            },1000
        )
    }
)

}


asyncfunc().then(
    value=>{
        console.log(value)
    }
)