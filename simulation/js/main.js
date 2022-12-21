var mto=0.5;
var menu_score = 0;
var naoh = 25;
var sand = 50;
function dispmenu(val)
{
   val.classList.toggle("change");
  menu_score = menu_score+1;
  if(menu_score==1)
  {
    document.getElementById("navbar").setAttribute("style","display:block");
    document.getElementById("simulation-cont").setAttribute("style","opacity:0.5");
      if(mto!=1)
        document.getElementById("matwork").setAttribute("style","opacity:1");
    menu_score=-1;
    document.body.style.backgroundColor="black";
  }
  else
    {
      if(mto!=1)
        document.getElementById("matwork").setAttribute("style","opacity:10");
         document.body.style.backgroundColor="white";
          document.getElementById("simulation-cont").setAttribute("style","opacity:01");
      document.getElementById("navbar").setAttribute("style","display:none");
	  }
}

function invertedDrag()
{
	document.getElementById("simulation").innerHTML="<img src='images/invertedDrag.gif' width='40%'>";
	document.getElementById("invertedDrag").style.display = "none";
	setTimeout(() => {
	document.getElementById("patternInDrag").style.display = "block";
	}, 3000);
}

function patternInDrag()
{
	document.getElementById("simulation").innerHTML="<img src='images/patternInDrag.gif' width='35%'>";
	document.getElementById("patternInDrag").style.display = "none";
	setTimeout(() => {
	document.getElementById("shovelToSand").style.display = "block";
	}, 3000);
}

function shovelToSand()
{
	document.getElementById("simulation").innerHTML="<img src='images/shovelToSand.gif' width='65%'>";
	document.getElementById("shovelToSand").style.display = "none";
	setTimeout(() => {
	document.getElementById("sandInDrag").style.display = "block";
	}, 3000);
}

function sandInDrag()
{
	document.getElementById("simulation").innerHTML="<img src='images/sandInDrag.gif' width='70%'>";
	document.getElementById("sandInDrag").style.display = "none";
	setTimeout(() => {
	document.getElementById("ramming").style.display = "block";
	}, 3000);
}

function ramming()
{
	document.getElementById("simulation").innerHTML="<img src='images/ramming.gif' width='65%'>";
	document.getElementById("ramming").style.display = "none";
	setTimeout(() => {
	document.getElementById("partingSand").style.display = "block";
	}, 5000);
}

function partingSand()
{
	document.getElementById("simulation").innerHTML="<img src='images/sprinkle.gif' width='50%'>";
	document.getElementById("partingSand").style.display = "none";
	setTimeout(() => {
	document.getElementById("mouldingFlask").style.display = "block";
	}, 5000);
}

function mouldingFlask()
{
	document.getElementById("simulation").innerHTML="<img src='images/cope.gif' width='45%'>";
	document.getElementById("mouldingFlask").style.display = "none";
	setTimeout(() => {
	document.getElementById("sandToFlask").style.display = "block";
	}, 5000);
}

function sandToFlask()
{
	document.getElementById("simulation").innerHTML="<img src='images/sandToFlask.gif' width='55%'>";
	document.getElementById("sandToFlask").style.display = "none";
	setTimeout(() => {
	document.getElementById("sprue").style.display = "block";
	}, 3000);
}

function sprue()
{
	document.getElementById("simulation").innerHTML="<img src='images/downSprue.gif' width='40%'>";
	document.getElementById("sprue").style.display = "none";
	setTimeout(() => {
	document.getElementById("sandToDrag").style.display = "block";
	}, 4000);
}

function sandToDrag()
{
	document.getElementById("simulation").innerHTML="<img src='images/sandToDrag.gif' width='40%'>";
	document.getElementById("sandToDrag").style.display = "none";
	setTimeout(() => {
	document.getElementById("riser").style.display = "block";
	}, 3000);
}

function riser()
{
	document.getElementById("simulation").innerHTML="<img src='images/fixRiser.gif' width='40%'>";
	document.getElementById("riser").style.display = "none";
	setTimeout(() => {
	document.getElementById("sandToMFlask").style.display = "block";
	}, 3000);
}

function sandToMFlask()
{
	document.getElementById("simulation").innerHTML="<img src='images/sandToMFlask.gif' width='50%'>";
	document.getElementById("sandToMFlask").style.display = "none";
	setTimeout(() => {
	document.getElementById("ram").style.display = "block";
	}, 3000);
}

function ram()
{
	document.getElementById("simulation").innerHTML="<img src='images/ram.gif' width='40%'>";
	document.getElementById("ram").style.display = "none";
	setTimeout(() => {
	document.getElementById("removeSprue").style.display = "block";
	}, 5000);
}

function removeSprue()
{
	document.getElementById("simulation").innerHTML="<img src='images/removeSprue.gif' width='40%'>";
	document.getElementById("removeSprue").style.display = "none";
	setTimeout(() => {
	document.getElementById("removeDrag").style.display = "block";
	}, 3000);
}

function removeDrag()
{
	document.getElementById("simulation").innerHTML="<img src='images/removeDrag.gif' width='40%'>";
	document.getElementById("removeDrag").style.display = "none";
	setTimeout(() => {
	document.getElementById("runner").style.display = "block";
	}, 5000);
}

function runner()
{
	document.getElementById("simulation").innerHTML="<img src='images/runner.gif' width='40%'>";
	document.getElementById("runner").style.display = "none";
	setTimeout(() => {
	document.getElementById("joinDrag").style.display = "block";
	}, 6000);
}

function joinDrag()
{
	document.getElementById("simulation").innerHTML="<img src='images/joinDrag.gif' width='40%'>";
	document.getElementById("joinDrag").style.display = "none";
	setTimeout(() => {
	document.getElementById("moltenMetal").style.display = "block";
	}, 3000);
}

function moltenMetal()
{
	document.getElementById("simulation").innerHTML="<img src='images/moltenMetal.gif' width='75%'>";
	document.getElementById("moltenMetal").style.display = "none";
	setTimeout(() => {
	document.getElementById("openDrag").style.display = "block";
	}, 4000);
}

function openDrag()
{
	document.getElementById("simulation").innerHTML="<img src='images/openDrag.gif' width='45%'>";
	document.getElementById("openDrag").style.display = "none";
	setTimeout(() => {
	document.getElementById("casting").style.display = "block";
	}, 5500);
}

function casting()
{
	document.getElementById("simulation").innerHTML="<img src='images/casting.gif' width='50%'>";
	document.getElementById("casting").style.display = "none";
}

function resetfun()
{
	alert("Simulation will get restart.");
	location.reload();
}