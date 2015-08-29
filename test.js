
function functionstart(id)
{
document.getElementById("smallscreen").style.backgroundImage = "url('controlroom.png')";
var e = document.getElementById(id); //start button gone
    if(e.style.display == "none")
    e.style.display = "block";
	else
    e.style.display = "none";
var d = document.getElementById("intro"); //start button gone
    if(d.style.display == "none")
    d.style.display = "block";
	else
    d.style.display = "none";
var d = document.getElementById("nasapic"); //start button gone
    if(d.style.display == "none")
    d.style.display = "block";
	else
    d.style.display = "none";
$('#pleasework').show(); return false;
}