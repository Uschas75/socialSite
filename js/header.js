let AllworkDetails_Div,paraText,imgSource,headerParagraph,headerImage,header__topic, number = 0 , finalHeader,header;

function  windowLoad(){


    setInterval(function timeIntervalFunction(){

        header__topic = document.querySelector(".header__topic");



        AllworkDetails_Div = document.querySelectorAll(".workDetails__Div");//collecting all div

        imgSource = "";
        number =  Math.floor((Math.random() * AllworkDetails_Div.length));//number generator
        console.log(number);


        // header = document.createElement("h1");
        //             header.setAttribute("class" , "primaryHeader");
        //             header.innerHTML = "Others invention : ";
        // header__topic.appendChild(header);
        if(header__topic.childNodes.length > 0){
            for(var c = 0 ; c < header__topic.childNodes.length;c++){
                header__topic.removeChild(header__topic.childNodes[c]);
            }
        }
        
        if(AllworkDetails_Div[number].querySelector(".workDetails__img") !== ""){

            imgSource = AllworkDetails_Div[number].querySelector(".workDetails__img").src;
            headerImage = document.createElement("img");
            headerImage.setAttribute("src" , imgSource);
            headerImage.setAttribute("class" , "header__img");
            header__topic.appendChild(headerImage);
        }

        if( AllworkDetails_Div[number].querySelector(".workDetails__text").innerText !== ""){

            headerParagraph = document.createElement("p");
                    headerParagraph.setAttribute("class" , "primary__heading");
            headerParagraph.innerText = AllworkDetails_Div[number].querySelector(".workDetails__text").innerText;
            header__topic.appendChild(headerParagraph);
        }


    } , 3000);

}
