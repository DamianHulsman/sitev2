function darkmode()
{
    document.getElementById('body').style.backgroundColor = "black";
    document.getElementById('body').style.color = "white";
    document.getElementById('darkmodebutton').style.border = "white 3px solid";
    document.getElementById('lightmodebutton').style.border = "white 3px solid";
}

function lightmode()
{
    document.getElementById('body').style.backgroundColor = "white";
    document.getElementById('body').style.color = "black";
    document.getElementById('darkmodebutton').style.border = "black 3px solid";
    document.getElementById('lightmodebutton').style.border = "black 3px solid";
}