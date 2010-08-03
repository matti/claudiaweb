$(document).ready(function() {
	if (getUrlVars()["dev"] == null)
		runWelcomeAnimation();
});

function runWelcomeAnimation() {
	$('#logo').hide();
	$('section section').hide();
	$('section#slogans').children().hide();
	
	
	window.setTimeout("$('section#slogans').fadeIn();", 1250);
	window.setTimeout("$('#slogan').fadeIn();", 1750);

	window.setTimeout("$('#logo').show('bounce', {}, 400, logoBounced);", 2750);

}

function logoBounced() {
	$('#polaroid').show();
	$('section section').show();
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
