var tablinks = document.getElementsByClassName("tab_links");
var tabcontents = document.getElementsByClassName("tab_contents");
var tablink;
var tabcontent;
function opentab(tabname)
{
    for(tablink of tablinks)
    {
        tablink.classList.remove("active_link");
    }

    for(tabcontent of tabcontents)
    {
        tabcontent.classList.remove("active_tab");
    }
    event.currentTarget.classList.add("active_link");
    document.getElementById(tabname).classList.add("active_tab");
}

document.getElementById("myform").reset();