// Today's date
const d = new Date ();
let doutput = d.toLocaleDateString();
document.getElementById("todaysDate").innerHTML = doutput;

function slide(x)
{
    let slideValue = x;
    if (slideValue == 1)
    {
        document.getElementById("sliderValue").innerHTML=x + " day"
    }
    else
    {
        document.getElementById("sliderValue").innerHTML=x + " days";
    }
}
