const countries =[
    {name: 'usa'},
    {name: 'india'},
    {name: 'bangladesh'},
    {name: 'bulgeria'}
]

const  searchInput = document.querySelector('.searchInput');
const suggestionPanel = document.querySelector('.suggestion');

document.getElementById('categoryInput').onfocus = function (){addingClass()};
function addingClass(){
    document.getElementById('paddingClass').classList.add('paddingClass');
};
document.getElementById('categoryInput').onblur = function (){removingClass()};
function removingClass(){
    document.getElementById('paddingClass').classList.remove('paddingClass');
};




searchInput.addEventListener('keyup' , function (){

    const input = searchInput.value;
    const suggestions = countries.filter(function (country){
       return country.name.toLowerCase().startsWith(input);
    });

    suggestionPanel.innerHTML = '';
  suggestions.forEach(function (suggested){
     const div =document.createElement('div');
     div.innerHTML = suggested.name;//this is for to create a div element
      suggestionPanel.appendChild(div);//this is where the div element will be created
  });
if(input === ''){
    suggestionPanel.innerHTML = '';
}



//putting value by on click
    let z = [];//to make the outcome result into an array from getelementsByTagName;
    let x = suggestionPanel.getElementsByTagName("div");//collecting all the div(s) in there
    for (var i =0 ; i<x.length;i++){
      z[i] = x[i].innerText;//making another array cause it was total form

    }
    console.log(z);
    z.forEach(function myfunction(item ,index){//here checking each item
       x[index].addEventListener("click", function (){//when the item was clicked the value is inserted in the value
          searchInput.value = item;
           suggestionPanel.innerHTML = '';
       });
    });


});






