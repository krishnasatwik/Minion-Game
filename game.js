var character=document.getElementById("character");
var block=document.getElementById("block");
startbtn.addEventListener("click",function(){
    block.style.animation="block-ani 3s infinite";
});
function jump(){
    if(character.classList!="animate"){
        character.classList.add("animate");
    }
    setTimeout(function(){character.classList.remove("animate")},500);
}
function myButton(){
    location.reload();
}
var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<150 && blockLeft>30 && characterTop>=180){
        block.style.animation="none";
        block.style.display="none";
        alert("you lost");
    }
},10);