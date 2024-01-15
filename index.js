var data = [{
    name: "Mika",
    src: "https://images.pexels.com/photos/3619947/pexels-photo-3619947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
{
    name: "Emilia",
    src: "https://images.pexels.com/photos/3214729/pexels-photo-3214729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
{
    name: "Mikko",
    src: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
},
{
    name: "Timo",
    src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}
]

var pers = '';
data.forEach(function(elem){
     pers += ` <div class="person">
    <div class="img">
        <img src="${elem.src}">
    </div>
    <h4>${elem.name}</h4>
</div>
    `

});
   
document.querySelector(".people").innerHTML = pers;
