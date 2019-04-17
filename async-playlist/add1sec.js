async function doubleAndAdd(a, b) {
    a = await doubleAfter1Sec(a);
    b = await doubleAfter1Sec(b);
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