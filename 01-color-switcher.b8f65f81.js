const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");t.disabled=!0,e.addEventListener("click",(()=>{timerId=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.disabled=!0,t.disabled=!1})),t.addEventListener("click",(()=>{timerId&&(clearInterval(timerId),e.disabled=!1,t.disabled=!0)}));
//# sourceMappingURL=01-color-switcher.b8f65f81.js.map