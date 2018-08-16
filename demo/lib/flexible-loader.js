/**
 * 入口文件
 * 用于判断设备类型加载不同css和js
 */
(function(){
    var createScript = function (url, callback) {
        var body = document.getElementsByTagName("body")[0];
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.onload = function () {
            if (callback) {
                callback();
            }
        };
        body.appendChild(script);
    };

    var createScriptHead = function (url, callback) {
        var head = document.getElementsByTagName("head")[0];
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.onload = function () {
            if (callback) {
                callback();
            }
        };
        head.appendChild(script);
    };

    var createStyle = function (url, callback) {
        var head = document.getElementsByTagName('head')[0],
            style = document.createElement('link');

        style.rel = 'stylesheet';
        style.href = url;
        style.onload = function () {
            if (callback) {
                callback();
            }
        };
        head.appendChild(style);
    };

    var IS_IPAD = navigator.userAgent.match(/iPad/i) != null,
        IS_IPHONE = !IS_IPAD && ((navigator.userAgent.match(/iPhone/i) != null) || (navigator.userAgent.match(/iPod/i) != null)),
        IS_IOS = IS_IPAD || IS_IPHONE,
        IS_ANDROID = !IS_IOS && navigator.userAgent.match(/android/i) != null,
        IS_MOBILE = IS_IOS || IS_ANDROID;

    /**
     * 
     * 判断是否为移动端访问
     * 加载flexible.js
     */
    if(IS_MOBILE){
        createScriptHead('static/js/flexible.min.js', function () {});
    }




})();