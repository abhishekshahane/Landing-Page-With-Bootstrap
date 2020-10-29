function init()
{
	// Made for the dropdown(to appear only when clicked on, not otherwise.
	// I think there might be a way to do this using pure CSS but I don't really know.
	
	if (document.getElementById("list").style.display === "block")
	{
		document.getElementById("list").style.display = "none";
	}
	else
	{
		document.getElementById("list").style.display = "block";
	}
}
