// add Archive banner on top of the page
document.addEventListener('DOMContentLoaded', function() {
    var elemDiv = document.createElement('div');
    elemDiv.className = 'banner-archive';
    elemDiv.innerHTML = "<details><summary>Toto je archívna stránka a nie je aktualizovaná.</summary><p>Aktuálne informácie nájdete na adrese <a href=\"https://mirri.gov.sk/sekcie/informatizacia/\">https://mirri.gov.sk/sekcie/informatizacia</a>.<br/>Pre informácie o archívnom obsahu kontaktujte <a href=\"mailto:tlacove@mirri.gov.sk?subject=Web informatizacia.sk\">tlacove@mirri.gov.sk</a> alebo <a href=\"mailto:informatizacia@mirri.gov.sk?subject=Web informatizacia.sk\">informatizacia@mirri.gov.sk</a></p></details><span class=\"closebtn\" onclick=\"this.parentElement.style.display='none';\">Skryť tento banner</span>";
    const mainDiv = document.getElementsByClassName("main-holder")[0];
    document.body.insertBefore(elemDiv, mainDiv);
});


function otvor (theURL,wx,wy,okno) {
	mx = Math.round((screen.width-wx)/2);
	if (okno=='') okno='tab';
	window.open(theURL,okno,"width="+wx+",height="+wy+",toolbar=no,directories=no,scrollbars=yes,location=no,resizable=yes,menubar=no,left="+mx+",top=10").focus();
}

function otvor_search (theURL,wx,wy) {
	mx = Math.round((screen.width-wx)/2);
	tab = window.open(theURL,"search","width="+wx+",height="+wy+",toolbar=no,directories=no,scrollbars=yes,location=no,resizable=yes,menubar=no,left="+mx+",top=10");
	if (tab) tab.focus();
}

var actual_chng_box;
	var actBox;
	var boxes = 3;
	function chng_load(){//sets first box visible
		var maxHeight = 100;
		boxes--;
		box = new Array(3);
		for (i=0;i<=boxes;i++) {//zistujem najvyssi div
			boxId = document.getElementById('chng_box_content_' + (i+1));
			boxHeight=boxId.offsetHeight;		
			if (maxHeight < boxHeight) maxHeight=boxHeight;		
			boxId.style.display='none'; 					
			document.getElementById('chng_box_zal_' + (i+1)).style.background='url(../images/chng_'+(i+1)+'.gif)'; 
   			
			
		}		
		for (i=0;i<=boxes;i++) {//zvacsim vsetky na najvyssi aby neskakal obsah pod nim
			boxId = document.getElementById('chng_box_content_' + (i+1))
			boxId.style.height = maxHeight;
		}	
	
		actual_chng_box = document.getElementById('chng_box_zal_1');
		actual_chng_box.style.backgroundPosition='0px -33px';			
		actBox = document.getElementById('chng_box_content_1');
		actBox.style.display="block";		
		
		
							
	}	
	
	function chng_box(targt){
		if (actual_chng_box!=targt) {
			targt.style.backgroundPosition='0px -33px';				
			actual_chng_box.style.backgroundPosition='0px 0px';					
			actual_chng_box = targt; 
			}			
		cntBox = document.getElementById('chng_box_content_'+targt.id.substr(13));
		actBox.style.display="none";
		cntBox.style.display="block";
		actBox = cntBox;		
	}
	
	function box_event(targt,act){
		target=document.getElementById(targt);
		image = document.getElementById('img_' + targt);
		
		if (act == 'minmax') {		
			if (target.style.display=='none') {	target.style.display='';
												image.src='../images/box_minimize.gif';
												}				
			else {	target.style.display='none';
					image.src = '../images/box_maximize.gif';
 				 }	
		}
		//neviem, ci by sa close nemalo robit na refresh aby sa to mohlo zapisat do DB
		if (act == 'close') target.style.display='none'; 
	
	}

function SitemapOpenClose(elNum, imgMain) {	
	if (elNum != '')
	{
		var image;
		var list = document.getElementById ? document.getElementById('submenu'+elNum) : document.all['submenu'+elNum];
		if (imgMain) image = document.getElementById ? document.getElementById('mainimage'+elNum) : document.all['mainimage'+elNum];
		else image = document.getElementById ? document.getElementById('subimage'+elNum) : document.all['subimage'+elNum];
		if (list)
		{
			if (list.style.display == 'none')
			{
				list.style.left = '';
				list.style.position = '';
				list.style.display = '';
				if (image)
				{
					if (imgMain) image.src = '../images/sitemap_minus.gif';
					else image.src = '../images/sitemap_minus.gif';
				}
	//			alert('if - list: '+list.style.display+'; image: '+image.src);
			}
			else
			{
				list.style.left = '-1000px';
				list.style.position = 'absolute';
				list.style.display = 'none';
				if (image)
				{
					if (imgMain) image.src = '../images/sitemap_plus.gif';
					else image.src = '../images/sitemap_plus.gif';
				}
//				alert('else - list: '+list.style.display+'; image: '+image.src);
			}
//			alert(list.style.position);
		}
	}
}

function SitemapOpenCloseAll(openMap)
{
	if (openMap)
	{
		var position = '';
		var left = '';
		var display = '';
		var imgSrcMain = '../images/sitemap_minus.gif';
		var imgSrcSub = '../images/sitemap_minus.gif';
	}
	else
	{
		var position = 'absolute';
		var left = '-1000px';
		var display = 'none';
		var imgSrcMain = '../images/sitemap_plus.gif';
		var imgSrcSub = '../images/sitemap_plus.gif';
	}
	var element = document.getElementsByTagName("UL");
	for(var i = 0; i < element.length; i++)
	{
		if (element[i].className != 'menu_list_10' && element[i].id != 'top_table')
		{
			element[i].style.position = position;
			element[i].style.left = left;
			element[i].style.display = display;
		}
	}
	var image = document.getElementsByTagName("IMG");
	for(var i = 0; i < image.length; i++)
	{
		if (image[i].id.indexOf("subimage") > -1)
		{
			image[i].src = imgSrcSub;
		}
		else if (image[i].id.indexOf("mainimage") > -1)
		{
			image[i].src = imgSrcMain;
		}
	}
}

function Check_Parents(obj) {
	if (!obj.checked) return;
	var arr_m = obj.id.split("_");
	var a_checks = document.getElementsByTagName("input");
	for (i = 0; i < a_checks.length; i++) {
		if (a_checks[i].type != "checkbox") continue;
		var arr = a_checks[i].id.split("_");
		if (arr[0] == "c") {
			var id = arr[arr.length - 1];
			for (j = 0; j < arr_m.length; j++) {
				if (arr_m[j] == id) a_checks[i].checked = true;
			}
		}
	}
}
function Uncheck_Childs(obj) {
	if (obj.checked) return;
	var arr = obj.id.split("_");
	var id = arr[arr.length - 1];
	var a_checks = document.getElementsByTagName("input");
	for (i = 0; i < a_checks.length; i++) {
		if (a_checks[i].type != "checkbox") continue;
		arr = a_checks[i].id.split("_");
		if (arr[0] == "c")
			for (j = 0; j < arr.length; j++) {
				if (arr[j] == id) a_checks[i].checked = false;
			}
	}
}

function toogle(source, element) {
	var target = document.getElementById(element);
	if (source && target) {
		if (source.checked) target.style.display = 'block';
		else target.style.display = 'none';
	}
}

function tv(ver) {
	var sep;
	var loc = window.location.toString();
	if (loc.indexOf('#') > -1) loc = loc.substr(0, loc.indexOf('#'));
	if (loc.indexOf('set_subframe') > -1) loc = loc.substr(0, loc.indexOf('set_subframe')-1);
	if (loc.indexOf('?') > -1) sep = '&';
	else sep = '?';
	if (!ver) ver = '';
	window.location = loc + sep + 'set_subframe='+ver;
	return false;
}

function CreateBookmarkLink() {
	title = document.title;
	url = window.location;
	if (window.sidebar) { // Mozilla Firefox Bookmark		
		window.sidebar.addPanel(title, url, "");
	} else if (window.external) { // IE Favorite		
		window.external.AddFavorite(url, title);
	} else if(window.opera && window.print) { // Opera Hotlist
		var mbm = document.createElement('a');
		mbm.setAttribute('rel','sidebar');
		mbm.setAttribute('href',url);
		mbm.setAttribute('title',title);
		mbm.click();
	}
}

function writeFlash(src, width, height, title) {
	if (FlashDetect && FlashDetect.installed) {
		document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="'+width+'" height="'+height+'" align="middle" title="'+title+'">'
		+ '<param name="allowScriptAccess" value="always" />'
		+ '<param name="allowFullScreen" value="false" />'
		+ '<param name="movie" value="'+src+'" />'
		+ '<param name="quality" value="high" />'
		+ '<param name="bgcolor" value="#ffffff" />'
		+ '<embed src="'+src+'" quality="high" bgcolor="#ffffff" width="'+width+'" height="'+height+'" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />'
		+ '</object>');
	} else {
		document.write('Banner: ' + title);
	}
}
