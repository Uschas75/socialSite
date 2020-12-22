let chatPopUp,chatFooter,container,navSection,headerSection, uploadSection, filterSection,newsFeedSection;


chatPopUp = document.querySelector(".chatPopUp");
chatClose = document.querySelector(".chatClose");
chatFooter =document.querySelector(".chatFooter2");
navSection = document.querySelector(".navigation");
headerSection = document.querySelector(".header");
uploadSection =document.querySelector(".upload");
filterSection = document.querySelector(".filter");
newsFeedSection = document.querySelector(".newsFeed");



function popUpFunction(){


    navSection.style.filter = "blur(50px)";
    headerSection.style.filter = "blur(50px)";
    uploadSection.style.filter = "blur(50px)";
    filterSection.style.filter = "blur(50px)";
    newsFeedSection.style.filter = "blur(50px)";


    chatFooter.style.display = "grid";
    chatFooter.style.position = "fixed";
    chatFooter.style.top = "5vh";
    chatFooter.style.right ="25vw";
    chatFooter.style.backgroundColor = "#C8C8C8";
    chatFooter.style.width = "50vw";
    chatFooter.style.height = "90vh";
    chatFooter.style.zIndex = "100";
    chatFooter.style.overflow = "auto";
    // chatPopUp.style.display = "none";
    chatClose.style.display= "block";
}


    chatClose.addEventListener("click" , function (){
        navSection.style.filter = "none";
        headerSection.style.filter = "none";
        uploadSection.style.filter = "none";
        filterSection.style.filter = "none";
        newsFeedSection.style.filter = "none";
        chatClose.style.display= "none";
        // chatPopUp.style.display = "initial";
        //
       chatFooter.style.display = "none";
        // chatFooter.style.gridColumn = "chatFooter-start / chatFooter-end";
        // chatFooter.style.gridTemplateRows = "[chat-start] 80vh [chat-end footer-start] min-content [footer-end]";
        // chatFooter.style.gridTemplateRows = "1fr";
        // chatFooter.style.gridRowGap = ".4rem";
        //
        // if (phoneQuery.matches) { // If media query matches <600px
        //     chatFooter.style.display = "none";
        // }
    });

