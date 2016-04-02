function showHome()
{
	$("#homeImg").load(function () { $(this).fadeIn(300); });	
}

function showWork()
{
	for (i = 0; i <= 22; i++)
	{
		var img = $("#pic"+i);
		img.load(function () { $(this).fadeIn(300); });
	}
}

function showShows()
{
	for (i = 0; i <= 9; i++)
	{
		var img = $("#img"+i);
		img.load(function () { $(this).fadeIn(300); });
	}
}

function showContact()
{
	$("#cloImg").load(function () { $(this).fadeIn(300); });	
}
