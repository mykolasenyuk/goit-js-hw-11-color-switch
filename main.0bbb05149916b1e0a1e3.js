(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,e,o){},PgWg:function(t,e){var o=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548","#ADFF2F","#FF0000","#FF4500","#0000CD","#FFFF00","#DA70D6"],n={buttonStart:document.querySelector('[data-action="start"]'),buttonStop:document.querySelector('[data-action="stop"]')},a=void 0;n.buttonStart.addEventListener("click",(function(){n.buttonStop.classList.toggle("deactive"),n.buttonStart.setAttribute("disabled",""),n.buttonStart.classList.toggle("deactive"),a=setInterval((function(){var t,e;document.body.style.backgroundColor=o[(t=0,e=o.length-1,Math.floor(Math.random()*(e-t+1)+t))]}),1e3)})),n.buttonStop.addEventListener("click",(function(){clearInterval(a),n.buttonStart.removeAttribute("disabled",""),n.buttonStop.classList.add("deactive"),n.buttonStart.classList.remove("deactive")})),n.buttonStop.classList.add("deactive")},QfWi:function(t,e,o){"use strict";o.r(e);o("L1EO"),o("PgWg")}},[["QfWi",1]]]);
//# sourceMappingURL=main.0bbb05149916b1e0a1e3.js.map