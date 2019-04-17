function asyncfunc() {
    let ret = 100;
    return new Promise(
        function (resolve) {
            setTimeout(
                () => {
                    resolve(ret)
                }, 1000
            )
        }
    )

}
test = async function () {
    let ret = await asyncfunc()
    console.log(ret)
}

test()


