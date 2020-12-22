let  newsFeed ,uploadImg , uploadTextareaInput,uploadBtn,uploadCategory,newsFeed_sub,profileDetails,
    profileDetails__img,paragraph,profilePicture,profileDetails__bio,name,locations,workDetails,workDetails__Div,workDetails__img,
    workDetails__reactionCount,reactionsLike,reactionComment,reactionShare,reactionPara,svgElem,icon_like,icon_comment,icon_share,table,
    tr,td,th,reactionDetails,commentDetails,imgSRC,allNewsFeed,totalNewsFeeds,
    profileDetailsDiv,workDetails__reactionCountDiv,reactionDetailsDiv,commentDetailsDiv,spanDivider,workCategoryDiv,loadFile;

uploadBtn = document.querySelector(".upload__btn");


//calling all the  html file
workDetails__reactionCount = document.querySelector(".workDetails__reactionCount").innerHTML;
reactionDetails = document.querySelector(".reactionDetails").innerHTML;
newsFeed = document.querySelector(".newsFeed");
profileDetails = document.querySelector(".profileDetails").innerHTML;
commentDetails = document.querySelector(".commentDetails").innerHTML;

imgSRC = "";
//creating image local link
loadFile = function(event) {
    imgSRC = URL.createObjectURL(event.target.files[0]);
};


uploadBtn.addEventListener("click" ,function (){

//collecting data

    uploadImg = document.getElementById("uploadImage");
    uploadTextareaInput = document.getElementById("inputField").value;
    uploadCategory = document.querySelector(".searchInput").value;



    if(imgSRC  === "" && uploadTextareaInput === ""){
        alert("Please upload something");
    }




    if(imgSRC  !== "" || uploadTextareaInput !=="") {

        var i = 0;
        allcomment = document.querySelectorAll(".comment");
        allcommentDetails = document.querySelectorAll(".commentDetails");
        allCommentBtn = document.querySelectorAll(".commentBtn");
        allCommentInput = document.querySelectorAll(".commentInput");
        allCommentInput__div = document.querySelectorAll(".commentInput__div");


        //creating html file which is needed
        newsFeed_sub = document.createElement("div")
        newsFeed_sub.setAttribute("class", "newsFeed-sub");
        profileDetailsDiv = document.createElement("div");
        profileDetailsDiv.setAttribute("class", "profileDetails");
        profileDetailsDiv.innerHTML = profileDetails;

        workDetails = document.createElement("div");
        workDetails.setAttribute("class", "workDetails");

        workDetails__Div = document.createElement("div");
        workDetails__Div.setAttribute("class", "workDetails__Div");

        workDetails__reactionCountDiv = document.createElement("div");
        workDetails__reactionCountDiv.setAttribute("class", "workDetails__reactionCount");
        workDetails__reactionCountDiv.innerHTML = workDetails__reactionCount;


        workDetails__img = document.createElement("img");
        workDetails__img.setAttribute("class", "workDetails__img");
        workDetails__img.setAttribute("src", imgSRC);

        paragraph = document.createElement("p");
        paragraph.setAttribute("class", "workDetails__text");
        paragraph.innerText = uploadTextareaInput;


        reactionDetailsDiv = document.createElement("div");
        reactionDetailsDiv.setAttribute("class", "reactionDetails");
        reactionDetailsDiv.innerHTML = reactionDetails;

        commentDetailsDiv = document.createElement("div");
        commentDetailsDiv.setAttribute("class", "commentDetails");
        commentDetailsDiv.innerHTML = commentDetails;

        // workCategoryDiv = document.createElement("table");
        //         workCategoryDiv.setAttribute("class" , "workCategory");
        //         tr = document.createElement("tr");
        //         th = document.createElement("th");
        //                 th.innerText = "category";
        //         td = document.createElement("td");
        //
        //         td.innerText = uploadCategory;


        spanDivider = document.createElement("span");
        spanDivider.setAttribute("class", "lineDivider");
        //appending as a child

        //profileDetials div section
        newsFeed_sub.appendChild(profileDetailsDiv);
        //workingDetials div section
        newsFeed_sub.appendChild(workDetails);

        workDetails__Div.appendChild(paragraph);
        workDetails__Div.appendChild(workDetails__img);
        workDetails.appendChild(workDetails__Div);
        workDetails.appendChild(spanDivider);


//reaction coutn
//     workCategoryDiv.appendChild(tr);
//     tr.appendChild(th);
//     tr.appendChild(td);
//     workCategoryDiv.appendChild(workDetails__reactionCountDiv);
        workDetails.appendChild(workDetails__reactionCountDiv);

        //reactionDetails
        newsFeed_sub.appendChild(reactionDetailsDiv);
        //lineDevider
        newsFeed_sub.appendChild(spanDivider);
        //commentDetails
        newsFeed_sub.appendChild(commentDetailsDiv);
        //newsFeed_sub
        newsFeed.appendChild(newsFeed_sub);
    }



    i++;
    if(i>0){
        document.getElementById("inputField").value = "";
        imgSRC = "";
    }


});






// <div class="newsFeed-sub">
//     <div class="profileDetails">
//         <div class="profileDetails__img">
//             <img src="../img/headerImg-1.jpg" alt="nothing to show" class="profilePicture">
//         </div>
//         <div class="profileDetails__bio">
//             <h4 class="name">uschas</h4>
//             <h5 class="location">Gaibandha , Rangpur ,Bangladesh</h5>
//         </div>
//     </div>
//     <div class="workDetails">
//         <div class="workDetails__Div">
//             <img src="../img/headerImg-1.jpg" alt="nothing to show" class="workDetails__img">
//         </div>
//
//         <div class="workDetails__reactionCount">
//             <div class="reactionsLike">
//                 <p class="reactionPara">88</p>
//                 <svg class="reactionIcon">
//                     <use xlink:href="../img/sprite.svg#icon-like"></use>
//                 </svg>
//             </div>
//             <div class="reactionComment">
//                 <p class="reactionPara">23</p>
//                 <svg class="reactionIcon">
//                     <use xlink:href="../img/sprite.svg#icon-comment"></use>
//                 </svg>
//             </div>
//             <div class="reactionShare">
//                 <p class="reactionPara">1</p>
//                 <svg class="reactionIcon">
//                     <use xlink:href="../img/sprite.svg#icon-share"></use>
//                 </svg>
//             </div>
//             <table class="workCategory">
//                 <tr>
//                     <th>category</th>
//                     <td>disney</td>
//                     <td>waterLand</td>
//                     <td>photoShop</td>
//                 </tr>
//             </table>
//         </div>
//     </div>

//     <div class="reactionDetails">
//         <div class="like">
//             <p class="para">like</p>
//             <svg class="commentIcon">
//                 <use xlink:href="../img/sprite.svg#icon-like"></use>
//             </svg>
//         </div>
//         <div class="comment">
//             <p class="para">comment</p>
//             <svg class="commentIcon">
//                 <use xlink:href="../img/sprite.svg#icon-comment"></use>
//             </svg>
//         </div>
//         <div class="share">
//             <p class="para">share</p>
//             <svg class="commentIcon">
//                 <use xlink:href="../img/sprite.svg#icon-share"></use>
//             </svg>
//         </div>
//     </div>
//     <span class="lineDivider"></span>
//
//
//     <div class="commentDetails">
//         <div class="profileBasedComment">
//             <img src="../img/headerImg-1.jpg" alt="nothing to show" class="profilePicture">
//                 <p class="commentText">Lorem ipsum dolor sit amet.</p>
//         </div>
//         <div class="commentInput__div">
//             <input type="text" class="commentInput">
//                 <button class="commentBtn">add</button>
//         </div>
//     </div>
// </div>





// profileDetails = document.createElement("div").setAttribute("class" , "profileDetails");
// profileDetails__img = document.createElement("div").setAttribute("class" , "profileDetails__img");
// profilePicture= document.createElement("img");
// profilePicture.setAttribute("src" , "../img/headerImg-1.jpg");
// profilePicture.setAttribute("class" , "profilePicture");
//
// profileDetails__bio = document.createElement("div").setAttribute("class","profileDetails__bio");
// name = document.createElement("h4").setAttribute("class" , "name");
// locations = document.createElement("h5").setAttribute("class" , "location");

// reactionsLike = document.createElement("div").setAttribute("class","reactionsLike");
// reactionComment = document.createElement("div").setAttribute("class","reactionComment");
// reactionShare = document.createElement("div").setAttribute("class","reactionShare");
//
// reactionPara = document.createElement("div").setAttribute("class","reactionPara");
//
// svgElem = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
//
// icon_like = document.createElementNS('http://www.w3.org/2000/svg', 'use');
// icon_like.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '../img/sprite.svg#icon-like');
//
// icon_comment = document.createElementNS('http://www.w3.org/2000/svg', 'use');
// icon_comment.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '../img/sprite.svg#icon-comment');
//
// icon_share = document.createElementNS('http://www.w3.org/2000/svg', 'use');
// icon_share.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '../img/sprite.svg#icon-share');
//
// table = document.createElement("table").setAttribute("class" ,"workCategory");
// tr = document.createElement("tr");
// td =document.createElement("td");
// th =document.createElement("th");