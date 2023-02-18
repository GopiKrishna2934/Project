function Random_colours()
{
var background_images=["../Asset/Images/a.jpg","../Asset/Images/b.jpg","../Asset/Images/c.jpg","../Asset/Images/d.jpg","../Asset/Images/e.jpg","../Asset/Images/f.jpg","../Asset/Images/g.jpg","../Asset/Images/h.jpg","../Asset/Images/i.jpg","../Asset/Images/j.jpg"]
var n=background_images.length-1;
var ran=Math.random()*n;
var col=Math.round(ran);
document.getElementById("a").style.backgroundImage="url("+background_images[col]+")"
var update_the_time=setTimeout(function(){Random_colours()},2000);
}
function imgK(pic,heading,discription)
{
    document.getElementById("bigscreen").removeAttribute("style")
    document.getElementById("imgheading").innerHTML=heading
    document.getElementById("imgparagraph").innerHTML=discription
    bigscreen.style.display="flex"
    fullImg.src=pic
}
function imgV()
{
    document.getElementById("bigscreen").setAttribute("style","display:none")
}