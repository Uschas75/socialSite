let changedAllcomment , changedAllcommentDetails , innerCommentDiv , p ,img,commentInputValue,allcomment
    ,allCommentInput__div,allCommentInput
    ,allCommentBtn,allcommentDetails ;


function onclickFunction() {


// AllcommentDiv = document.querySelectorAll(".commentDetails");

    allcomment = document.querySelectorAll(".comment");
    allcommentDetails = document.querySelectorAll(".commentDetails");


    allcomment.forEach(function commentFunction(item, index, arr) {
        arr[index].addEventListener("click", function () {
            allcommentDetails[index].classList.toggle("displayBlock");
        });
    });

    allCommentBtn = document.querySelectorAll(".commentBtn");
    allCommentInput = document.querySelectorAll(".commentInput");
    allCommentInput__div = document.querySelectorAll(".commentInput__div");


// allLike = document.querySelectorAll(".like");
// allReactionLikes = document.querySelectorAll(".likeCount");
// allLike.forEach(function likeFunction(item , index ,arr){
//     arr[index].addEventListener("click" ,function (){
//         var  i = allReactionLikes[index].valueOf();
//         i +=1;
//     });
// });


    allCommentBtn.forEach(function btnCommentFunction(item, index, arr) {

        arr[index].addEventListener("click", function () {
            innerCommentDiv = document.createElement("div");
            innerCommentDiv.setAttribute("class", "profileBasedComment");

            p = document.createElement("div");
            p.setAttribute("class", "commentText");

            img = document.createElement("img");
            img.setAttribute("class", "profilePicture");
            img.setAttribute("src", "../img/headerImg-1.jpg");

            console.log(allCommentInput__div);
            console.log(document.querySelector(".commentInput__div"));

            var i = 0;
            if (allCommentInput[index].value !== '') {
                p.innerText = allCommentInput[index].value;
                innerCommentDiv.appendChild(img);
                innerCommentDiv.appendChild(p);
                allcommentDetails[index].insertBefore(innerCommentDiv, allCommentInput__div[index]);
                i++;
            }

            if (i !== 0) {
                allCommentInput[index].value = '';
            }

        });

    });

}
/*
* commentSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    commentSvg.setAttribute("class" , "profilePicture");

    commentUse = document.createElementNS("http://www.w3.org/2000/svg","use");
    commentUse.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href" ,"../img/sprite.svg#icon-like")


*
*
* */

