let form = document.getElementById("form");
let input = document.getElementById("input"); //allowing javascript to target the id inside html
let msg = document.getElementById("errmsg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log("button clicked"); //handling submission
    formValidation();
})

let formValidation = () =>{
    if(input.value === ""){
        msg.innerHTML = "Please type an input"; //error msg that is displayed below text area when are is blank
        console.log("failure");
    }else{
        msg.innerHTML = "";
        console.log("success"); 
        acceptData();
    }
};

let data = {};

let acceptData = () =>{
    data["text"] = input.value; //accepting data that is inputted and invoking above
    console.log(data);
    createPost();
 };

 let createPost = () =>{
    posts.innerHTML +=   //the + on the = allows for predefined data to stay current
    `
    <div>
    <p>${data.text}</p>  
    <span class="options">
        <i onClick="editPost(this)" class="fa-solid fa-pen-to-square"></i>
        <i onClick="deletePost(this)" class="fa-solid fa-trash-can"></i>
    </span>
    </div>`;
    input.value = ""; //resets value in the input field after creating a new post
 };


 let deletePost = (e) =>{
    e.parentElement.parentElement.remove(); //back out the span then to div to delete the entire entry
 };


 let editPost = (e) =>{
    input.value = e.parentElement.previousElementSibling.innerHTML; //targets whatever is inside data.text
    e.parentElement.parentElement.remove();
 };

