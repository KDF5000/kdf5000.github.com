function hasMobileUA(){var e=window.navigator.userAgent;return/iPad|iPhone|Android|Opera Mini|BlackBerry|webOS|UCWEB|Blazer|PSP|IEMobile|Symbian/g.test(e)}function isMobile(){return window.screen.width<767&&hasMobileUA()}function loadjscssfile(e,t){if("js"==t)(i=document.createElement("script")).setAttribute("type","text/javascript"),i.setAttribute("src",e);else if("css"==t){var i;(i=document.createElement("link")).setAttribute("rel","stylesheet"),i.setAttribute("type","text/css"),i.setAttribute("href",e)}void 0!==i&&document.getElementsByTagName("head")[0].appendChild(i)}