var container;
var canvas;
var timer = 0;

//初期化
function init() {
    // canvas = document.getElementById('unity-canvas');
    // container = document.createElement('div');
    // container.style.width = window.innerWidth + 'px';
    // container.style.height = window.innerHeight + 'px';
    // container.style.overflow = 'hidden';
    // container.appendChild(canvas);
    // document.body.appendChild(container);
    // document.body.style.margin = '0px'

    var viewFullScreen = document.getElementById('unity-canvas');

    var ActivateFullscreen = function()
    {
        console.log("call fullscreen");
        if (viewFullScreen.requestFullscreen) /* API spec */
        {  
            viewFullScreen.requestFullscreen();
        }
        else if (viewFullScreen.mozRequestFullScreen) /* Firefox */
        {
            viewFullScreen.mozRequestFullScreen();
        }
        else if (viewFullScreen.webkitRequestFullscreen) /* Chrome, Safari and Opera */
        {  
            viewFullScreen.webkitRequestFullscreen();
        }
        else if (viewFullScreen.msRequestFullscreen) /* IE/Edge */
        {  
            viewFullScreen.msRequestFullscreen();
        }

        // viewFullScreen.removeEventListener('click', ActivateFullscreen);
    }

    viewFullScreen.addEventListener('click', ActivateFullscreen, false);
    
}

// //サイズ変更処理
// function resize() {
//     container.style.width = window.innerWidth + 'px';
//     container.style.height = window.innerHeight + 'px';
//     canvas.width = window.innerWidth * window.devicePixelRatio;
//     canvas.height = window.innerHeight * window.devicePixelRatio;
// }

window.onload = function () {
    init();
    // resize();
};

//ブラウザの大きさが変わった時に行う処理
// (function () {
//     var timer = 0;
//     window.onresize = function () {
//         if (timer > 0) {
//             clearTimeout(timer);
//         }
//         timer = setTimeout(function () {
//             resize();
//         }, 200);
//     };
// }());