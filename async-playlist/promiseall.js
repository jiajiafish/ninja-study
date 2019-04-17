async function doubleAndAdd(a, b) {
    [a,b]= await Promise.all([doubleAfter1Sec(a),doubleAfter1Sec(b)])
    console.log(a)
    return a + b
}

function doubleAfter1Sec(param) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(param * 2)
        }, 1000)
    })
}
doubleAndAdd(1,3).then(console.log)