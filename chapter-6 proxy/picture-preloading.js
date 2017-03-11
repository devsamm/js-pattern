// 不用代理
var MyImage = (function() {
    var imgNode = document.createElement('img')
    document.body.appendChild(imgNode)
    var img = new Image

    img.onload = function() {
        imgNode.src = img.src
    }

    return {
        setSrc: function(src) {
            imgNode.src = 'file:// /C:/Users/gps/Desktop/loading.gif'
            img.src = src
        }
    }
})()

// 使用代理
var myImage = (function() {
    var imgNode = document.createElement('img')
    document.body.appendChild(imgNode)

    return {
        setSrc: function(src) {
            imgNode.src = src
        }
    }
})()

var proxyImage = (function() {
    var img = new Image
    img.onload = function() {
        myImage.setSrc(this.src)
    }

    return {
        setSrc: function(src) {
            myImage.setSrc('file:// /C:/Users/gps/Desktop/loading.gif')
            img.src = src
        }
    }
})()