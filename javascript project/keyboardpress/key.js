const insert=document.querySelector(".insert")

window.addEventListener("keydown",(e)=>{
    insert.innerHTML=`
    <table border="1" cellpadding="10" cellspacing="0" color="white"
    <tr>
    <th>key</th>
    <th>code</th>
    <th>keycode</th>
    </tr>
   
    <td>${e.key===" " ?"space":e.key}</td>
    <td>${e.code}</td>
    <td>${e.keyCode}</td>
    </table>`
})