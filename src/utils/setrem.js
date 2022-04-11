function doRem() {
    function setRem() {
        let wiW = document.documentElement.clientWidth
        let uiW = 375

        let rate = wiW / uiW
        document.documentElement.style.fontSize = rate * 16 + 'px'

    }
    setRem()
    window.onresize = function () {
        setRem()
    }
}


module.exports = {
    doRem
}