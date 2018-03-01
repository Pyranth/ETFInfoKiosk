$('#iframe').hide();
$('#back').hide();

function iframeSrc(year)
{
	if (year == 'first')
		iframe.src = "http://www.etf.unssa.rs.ba/include/studenti/rasporedi/rasporedi_prva_godina_1718_ljs.pdf";
	else if (year == 'second')
		iframe.src = "http://www.etf.unssa.rs.ba/include/studenti/rasporedi/rasporedi_druga_godina_1718_ljs.pdf";
	else if (year == 'third')
		iframe.src = "http://www.etf.unssa.rs.ba/include/studenti/rasporedi/rasporedi_treca_godina_1718_ljs.pdf";
	else if (year == 'fourth')
		iframe.src = "http://www.etf.unssa.rs.ba/include/studenti/rasporedi/rasporedi_cetvrta_godina_1718_ljs.pdf";

	$('.center').hide();
	$('#iframe').show();
	$('#back').show();
}

function back()
{
	$('.center').show();
	$('#iframe').hide();
	$('#back').hide();
}