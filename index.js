//METHOD NUMBER 1.........................................................!!...................................................................
//I USED A JSON FILE WHERE THE DATA OF THE PEOPLE IS KEPT!!!!
var input = document.querySelector("input");

// Fetch data from the JSON file
//The fetch('data.json') initiates a GET request to the 'data.json' file.
//The first .then() handles the response by converting it to JSON format using response.json().
//The second .then() processes the parsed JSON data. In this case, it dynamically generates HTML for each person in the 'data' array.
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Dynamically generate HTML for each person in the 'data' array
    var pers = '';
    data.forEach(function(elem) {
      pers += `
        <div class="person">
          <div class="img">
            <img src="${elem.src}">
          </div>
          <h4>${elem.name}</h4>
        </div>
      `;
    });

    document.querySelector(".people").innerHTML = pers;

    input.addEventListener("input", function() {
      var inputValue = input.value.toLowerCase();

      var matchingName = data.filter(function(e) {
        return e.name.toLowerCase().startsWith(inputValue);
      });

      var newUsers = '';
      matchingName.forEach(function(elem) {
        newUsers += `
          <div class="person">
            <div class="img">
              <img src="${elem.src}">
            </div>
            <h4>${elem.name}</h4>
          </div>
        `;
      });

      document.querySelector(".people").innerHTML = newUsers;
    });
  })
  .catch(error => console.error('Error fetching data:', error));



  //METHOD NUMBER 2................................!!!!!!!!!!
  //This is normal method without loading data from json file...
  //var input = document.querySelector("input");

// Sample data array representing people with names and image sources
/* var data = [{
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
    name: "Myicahel",
    src: "https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
{
    name: "Timo",
    src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
{
    name: "Yasmin",
    src: "https://images.pexels.com/photos/157661/young-woman-shooting-model-157661.jpeg"
},
{
    name: "Emma",
    src: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
{
    name: "Charlotte",
    src: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
{
    name: "Ava",
    src: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
{
    name: "Oliver",
    src: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
{
    name: "Sophia",
    src: "https://images.pexels.com/photos/764529/pexels-photo-764529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
{
    name: "Elijah",
    src: "https://images.pexels.com/photos/141651/people-portrait-child-poverty-141651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},{
    name: "Benjamin",
    src: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},{
    name: "David",
    src: "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
{
    name: "Jasmine",
    src: "https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}
] */


// Dynamically generate HTML for each person in the 'data' array
/* var pers = '';

data.forEach(function(elem){
     pers += ` <div class="person">
        <div class="img">
        <img src="${elem.src}">
    </div>
    <h4>${elem.name}</h4>
</div>
    `
}); */
   
/* document.querySelector(".people").innerHTML = pers;


input.addEventListener("input", function(){
    var inputValue = input.value.toLowerCase(); //To make the search case-insensitive, converting both the input value and the names in data array to lowercase before comparing them.
    var matchingName = data.filter(function(e){
    return e.name.toLowerCase().startsWith(inputValue); //To make the search case-insensitive, converting both the input value and the names in data array to lowercase before comparing them.
});

var newUsers = '';
matchingName.forEach(function(elem){
    newUsers += ` <div class="person">
       <div class="img">
       <img src="${elem.src}">
   </div>
   <h4>${elem.name}</h4>
</div>`;
});

document.querySelector(".people").innerHTML = newUsers;
}); */



 

