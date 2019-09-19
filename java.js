

var trick = function()
{
var button=document.createElement("button")
    button.setAttribute("onclick","thot()");
    button.innerText="The Haunted Mansion"
    document.querySelector("body").append(button);
    
var button=document.createElement("button")
    button.setAttribute("onclick","yomama()");
    button.innerText="The Suburban Area"
    document.querySelector("body").append(button);
var trick=document.querySelector("#trick")
trick.setAttribute("onclick",null)
}

var stay = function()
{
var paragraph=document.createElement("p")
    paragraph.innerText="Watch TV: Story Ends"
    document.querySelector("body").append(paragraph);
var stay=document.querySelector("#stay")
    stay.setAttribute("onclick",null)
}

var thot=function()
{
  var paragraph=document.createElement("p")
  paragraph.innerText="Zombie Eats You: Story Ends"
    document.querySelector("body").append(paragraph)
var thot=document.querySelector("#thot")
stay.setAttribute("onclick",null)
    
}

var yomama=function()
{
    var button=document.createElement("button")
    button.innerText="You Are Safe"
    button.setAttribute("onclick","End()")
    document.querySelector("body").append(button)
var yomama=document.querySelector("#yomama")
yomama.setAttribute("onclick",null)
}

var End=function()
{
    var paragraph=document.createElement("p")
    paragraph.innerText="Yeeet You Get Clapped"
    document.querySelector("body").append(paragraph)
var End=document.querySelector("#End")
End.setAttribute("onclick",null)
}

