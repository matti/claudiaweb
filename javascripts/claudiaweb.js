$(document).ready(function() {
	if (getUrlVars()["dev"] == null)
		runWelcomeAnimation();
	else
		$('#slogan').hide();
});

function runWelcomeAnimation() {
	$('#main').hide();
	$('#logo').hide();
	$('#polaroid').hide();
	$('#content').hide();
	
	window.setTimeout("$('#main').fadeIn();", 1000);
	
	window.setTimeout("$('#slogan').fadeIn();", 1500);
	window.setTimeout("$('#slogan').fadeOut();", 2500);
	
	window.setTimeout("$('#logo').show('bounce', {}, 300, logoBounced);", 3200);
	window.setTimeout("$('#polaroid').show();", 3200);
}

function logoBounced() {
	$('#content').show();
}

function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
