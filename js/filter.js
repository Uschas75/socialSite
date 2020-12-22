let filterInput , div,innerDiv,label,input,span,inputValue,svgElement,useElement,svgDiv,allDelete,allFilter__listsItems ;



document.querySelector('.filter__input-icon').addEventListener('click' ,function (){



    filterInput = document.querySelector('.filter__lists');//get inside what contains
    allFields = filterInput.querySelectorAll(".filter__lists-items");


    div = document.createElement("div");
    div.classList.add('filter__lists-items');

    innerDiv = document.createElement("div");
    innerDiv.classList.add('filter__lists-text');

    label = document.createElement("label");
    label.setAttribute("for", "icon"+allFields.length);
    label.setAttribute("class" , "filter__lists-icon");

    input = document.createElement("input");
    input.setAttribute("type" ,"checkbox");
    input.setAttribute("id" ,"icon"+allFields.length);

    span = document.createElement("span");
    span.setAttribute("class" , "checkMate");

    svgDiv = document.createElement("div");
            svgDiv.setAttribute("class" ,"filter__lists-delete");
            svgDiv.setAttribute("onclick" , "deleteThis()");

    label.appendChild(input);
    label.appendChild(span);
    div.appendChild(label);

    inputValue = document.querySelector(".filter__input-text");

    var i = 0;
    if(inputValue !== ''){
        innerDiv.innerHTML = inputValue.value;
        div.appendChild(innerDiv);
        div.appendChild(svgDiv);
        filterInput.appendChild(div);
        i++;
    }
    if(i !== 0){
        inputValue.value= '';
    }


    console.log(filterInput);
});

function deleteThis() {
    allFilter__listsItems = document.querySelectorAll(".filter__lists-items");
    allDelete = document.querySelectorAll(".filter__lists-delete");
    allDelete.forEach(function deleteFunction(item, index, arr) {

        arr[index].addEventListener("click", function () {
            allFilter__listsItems[index].remove();
        });

    });
}






