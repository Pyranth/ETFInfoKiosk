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

	$('.btn-group-years').hide();
	$('#iframe').show();
	$('#back').show();
}

function iframe2Src(year)
{
	if (year == 'first')
		iframe.src = "http://www.etf.unssa.rs.ba/include/studenti/rasporedi/prva_godina_2017_2018_ispiti.pdf";
	else if (year == 'second')
		iframe.src = "http://www.etf.unssa.rs.ba/include/studenti/rasporedi/druga_godina_2017_2018_ispiti.pdf";
	else if (year == 'third')
		iframe.src = "http://www.etf.unssa.rs.ba/include/studenti/rasporedi/treca_godina_2017_2018_ispiti.pdf";
	else if (year == 'fourth')
		iframe.src = "http://www.etf.unssa.rs.ba/include/studenti/rasporedi/cetvrta_godina_2017_2018_ispiti.pdf";

	$('.btn-group-years').hide();
	$('#iframe').show();
	$('#back').show();
}

function back()
{
	$('.btn-group-years').show();
	$('#iframe').hide();
	$('#back').hide();
}