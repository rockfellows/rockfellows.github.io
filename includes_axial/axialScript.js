//////////////////\\\\\\\\\\\\\\\\\
//  FONCTIONS DES FOLDING BOXES  \\
///////////////      \\\\\\\\\\\\\\

function writeCookie(name, data, noDays){
  var cookieStr = name + "="+ data;
  if (writeCookie.arguments.length > 2){
    cookieStr += "; expires=" + getCookieExpireDate(noDays);
    }
  document.cookie = cookieStr;
}

function readCookie(cookieName){
   var searchName = cookieName + "=";
   var cookies = document.cookie;
   var start = cookies.indexOf(cookieName)
   if (start == -1){ // cookie not found
     return "";
     }
   start += searchName.length //start of the cookie data
   var end = cookies.indexOf(";", start);
   if (end == -1){
     end = cookies.length;
     }
   return cookies.substring(start, end);
}

function folding(nr, cookie, vis_state){
    
        if (document.layers)
        {
                self.status="Layers: "+document.layers[nr].display;

                current = (document.layers[nr].display == 'none') ? vis_state : 'none';
                if (cookie != '')
                        writeCookie(nr, current);
                document.layers[nr].display = current;
        }
        else if (document.all)
        {
                self.status="All: "+document.all[nr].style.display;
                vis_state='block';
                current = (document.all[nr].style.display == 'none') ? vis_state : 'none';
                if (cookie != '')
                        writeCookie(nr, current);
                document.all[nr].style.display = current;
        }
        else if (document.getElementById)
        {
                self.status="Id: "+document.getElementById(nr).style.display;

                display = (document.getElementById(nr).style.display == 'none') ? vis_state : 'none';
                if (cookie != '')
                        writeCookie(nr, display);
                document.getElementById(nr).style.display = display;
                
        }
}

function foldTrue(nr){
	/*
        if (document.layers)
        {
		self.status="Layers: "+document.layers[nr].display;
        document.layers[nr].display = 'none';
        }
        else if (document.all)
        {
		self.status="All: "+document.all[nr].style.display;
        document.all[nr].style.display = 'none';
        }
        else if (document.getElementById)
        {*/
		self.status="Id: "+document.getElementById(nr).style.display;
        document.getElementById(nr).style.display = 'none';
		//designModeOn();
        //}
		//designModeOn();
}

function foldFalse(nr){

	self.status="Id: "+document.getElementById(nr).style.display;
    document.getElementById(nr).style.display = '';

//	ToggleLangDesc(nr);		
}

function fold(nr,bool)
{
	if(bool)
	{
		foldTrue(nr);
	}
	else
	{
		foldFalse(nr);
	}
	return false;
}

function foldEverything()
{
	foldTrue('imgContenu4thlang','no', 'table-row-group');foldTrue('imgContenu3rdlang','no', 'table-row-group');foldFalse('imgContenuAnglais','no', 'table-row-group'); foldTrue('imgContenuFrancais'); document.previewForm.lang.value='en'; 
	foldTrue('imgContenu4thlang','no', 'table-row-group');foldFalse('imgContenu3rdlang','no', 'table-row-group');foldTrue('imgContenuAnglais','no', 'table-row-group'); foldTrue('imgContenuFrancais'); document.previewForm.lang.value='l3'; 
	foldFalse('imgContenu4thlang','no', 'table-row-group');foldTrue('imgContenu3rdlang','no', 'table-row-group');foldTrue('imgContenuAnglais','no', 'table-row-group'); foldTrue('imgContenuFrancais'); document.previewForm.lang.value='l4';
	foldTrue('imgContenu4thlang','no', 'table-row-group');foldTrue('imgContenu3rdlang','no', 'table-row-group');foldTrue('imgContenuAnglais','no', 'table-row-group'); foldFalse('imgContenuFrancais'); document.previewForm.lang.value='l4';
}

function ToggleLangDesc(PanelId)
{
	try
	{
		document.getElementById('imgContenu4thlang').style.display = 'none';
		document.getElementById('imgContenu3rdlang').style.display = 'none';
		document.getElementById('imgContenuAnglais').style.display = 'none';
		document.getElementById('imgContenuFrancais').style.display = 'none';

		document.getElementById(PanelId).style.display = '';
		//document.getElementById('contenuClosed').style.display = '';
		designModeOn();
		//DoSwitchEditors(PanelId);
	}
	catch(e)
	{
//		alert(e.message);
	}
}

function ToggleLangDesc2(PanelId)
{
		
	try
	{
		document.getElementById('imgContenu4thlang2').style.display = 'none';
		document.getElementById('imgContenu3rdlang2').style.display = 'none';
		document.getElementById('imgContenuAnglais2').style.display = 'none';
		document.getElementById('imgContenuFrancais2').style.display = 'none';

		document.getElementById(PanelId).style.display = '';
		//document.getElementById('contenuClosed').style.display = '';
		designModeOn();
		//DoSwitchEditors(PanelId);
		//alert(PanelId);
	}
	catch(e)
	{}
}

function designModeOn()
{
	try
	{
		if(FCKeditorAPI.GetInstance('desc_fr'))FCKeditorAPI.GetInstance('desc_fr').MakeEditable();
		if(FCKeditorAPI.GetInstance('desc_en'))   FCKeditorAPI.GetInstance('desc_en').MakeEditable();
		if(FCKeditorAPI.GetInstance('desc_l3'))   FCKeditorAPI.GetInstance('desc_l3').MakeEditable();
		if(FCKeditorAPI.GetInstance('desc_l4'))   FCKeditorAPI.GetInstance('desc_l4').MakeEditable();
		if(FCKeditorAPI.GetInstance('footer_fr')) FCKeditorAPI.GetInstance('footer_fr').MakeEditable();
		if(FCKeditorAPI.GetInstance('footer_en')) FCKeditorAPI.GetInstance('footer_en').MakeEditable();
		if(FCKeditorAPI.GetInstance('footer_l3')) FCKeditorAPI.GetInstance('footer_l3').MakeEditable();
		if(FCKeditorAPI.GetInstance('footer_l4')) FCKeditorAPI.GetInstance('footer_l4').MakeEditable();
	}
	catch(e)
	{
		//alert(e);  
	}
}

function DoSwitchEditors(EditorInstance)
{
	try
	{
 		var editor = FCKeditorAPI.GetInstance(EditorInstance);
		if (editor && editor.EditorDocument && editor.EditMode == FCK_EDITMODE_WYSIWYG)
		{
		  //alert("Switch");
		  editor.SwitchEditMode();
		  editor.SwitchEditMode();
		}
	}
	catch(e)
	{
		
	}
	//alert(EditorInstance);
}


//////////////////\\\\\\\\\\\\\\\\\
//    FONCTIONS DES MENUS DIVS   \\
///////////////      \\\\\\\\\\\\\\

function divMenuShow(id){
        if (document.layers)
        {
		self.status="Layers: "+document.layers[id].display;
        document.layers[id].display = 'block';

        }
        else if (document.all)
        {
		self.status="All: "+document.all[id].style.display;
        document.all[id].style.display = 'block';
        }
        else if (document.getElementById)
        {
		self.status="Id: "+document.getElementById(id).style.display;
        document.getElementById(id).style.display = 'block';
        }
}

function divMenuHide(id){
        if (document.layers)
        {
		self.status="Layers: "+document.layers[id].display;
        document.layers[id].display = 'none';

        }
        else if (document.all)
        {
		self.status="All: "+document.all[id].style.display;
        document.all[id].style.display = 'none';
        }
        else if (document.getElementById)
        {
		self.status="Id: "+document.getElementById(id).style.display;
        document.getElementById(id).style.display = 'none';
        }
}

//////////////////\\\\\\\\\\\\\\\\\
// FONCTIONS DU CALENDRIER AXIAL \\
///////////////      \\\\\\\\\\\\\\

function popCal(activeForm){
    setTimeout(popCalTrue(activeForm),500);
}

function popCalTrue(activeForm){
	calWindow=window.open('','AxialCal','width=250,height=200,top=300,left=400,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no');
	calWindow.document.open();
	calWindow.document.write("<HTML><HEAD><LINK rel='StyleSheet' type='text/css' href='themes/Aggregate/style/style.css'><SCRIPT type='text/javascript' language='JavaScript' src='includes_axial/UpdateCal.js'></SCRIPT></HEAD><BODY onBlur='document.focus();'>");
	calWindow.document.title="Axial Calendar";
	
	Calendar = new Date();
	var year = Calendar.getYear();      // Returns year
	var month = Calendar.getMonth();    // Returns month (0-11)
	var today = Calendar.getDate();     // Returns day (1-31)
	var weekday = Calendar.getDay();    // Returns day (1-7)
	var heuHours = "12";
	var heuMins = "00";
	
	if(document.form1[activeForm].value!=''){  // Si une date est déja présente, l'utiliser
	timePack = document.form1[activeForm].value.substring(11,16);
	month = Number(document.form1[activeForm].value.substring(5,7)-1);
	year = document.form1[activeForm].value.substring(0,4);
	today = Number(document.form1[activeForm].value.substring(8,10));
	heuHours = timePack.substring(0,timePack.indexOf(":"));
	heuMins = timePack.substring(timePack.indexOf(":")+1,5);
	}
	
	cal = drawCal(year, month, today, weekday, activeForm);
	calWindow.document.write(cal);

	heu = drawTime(heuHours, heuMins, activeForm);
	calWindow.document.write(heu);
	calWindow.document.write("</BODY></HTML>");
	calWindow.document.close();

	if (month<=9){
	  month = '0'+Number(month+1);
	}
	if (today<=9){
	  today = '0'+today;
	}
	
	var theDate = year + '-' + month + '-' + today + ' ' + '12:00';
	document.form1[activeForm].value = theDate;
}

function drawTime(hours, mins, activeForm){
	heu =  '<br><table class="calendarContent" width="100%"><tr><td class="calendarHeader"><center>';
	heu += '<b>At time :</b></center></td></tr><tr><td align="center">';
	heu += '<input onChange="returnTime(\''+ activeForm +'\');" name="selTime" type="text" size="5" ';
	heu += 'value="' + hours + ':' + mins + '">';
	heu += '</td></tr></table></TABLE>';
	return heu;
}

function changeDate(activeForm){
	timePack = document.form1[activeForm].value.substring(11,16); // 2004-04-23 12:00
	month = Number(document.form1[activeForm].value.substring(5,7)-1);
	year = document.form1[activeForm].value.substring(0,4);
	newDate = Number(document.form1[activeForm].value.substring(8,10));
	Calendar.setDate(Number(document.form1[activeForm].value.substring(8,10)));
	newDay = Calendar.getDay();
	calWindow.document.open();
	calWindow.document.write("<HTML><HEAD><LINK rel='StyleSheet' type='text/css' href='themes/Aggregate/style/style.css'><SCRIPT type='text/javascript' language='JavaScript' src='includes_axial/UpdateCal.js'></SCRIPT></HEAD><BODY onBlur='document.focus();'>");
	calWindow.document.title="Axial Calendar";

	cal = drawCal(year, month, newDate, newDay, activeForm);
	calWindow.document.write(cal);
	
	heuHours = timePack.substring(0,timePack.indexOf(":"));
	heuMins = timePack.substring(timePack.indexOf(":")+1,5);
	heu = drawTime(heuHours, heuMins, activeForm);
	calWindow.document.write(heu);
	
	calWindow.document.write("</BODY></HTML>");
	calWindow.document.close();
}

function monthDn(month){
	if (month == 1){
		month = 12;
	}else{
		month--;
	}
	return month;
}

function monthUp(month){
	if (month == 12){
		month = 1;
	}else{
		month++;
	}
	return month;
}

function checkDnYear(year, month){
	if (month==0){
		year--;
	}
	return year;
}

function checkUpYear(year, month){
	if (month==11){
		year++;
	}
	return year;
}

function drawCal(year, month, today, weekday, activeForm){

//  SET ARRAYS
var day_of_week = new Array('Sun','Mon','Tue','Wed','Thu','Fri','Sat');
var month_of_year = new Array('January','February','March','April','May','June','July','August','September','October','November','December');

//  DECLARE AND INITIALIZE VARIABLES
var DAYS_OF_WEEK = 7;    // "constant" for number of days in a week
var DAYS_OF_MONTH = 31;    // "constant" for number of days in a month
var cal;    // Used for printing

Calendar.setDate(1);    // Start the calendar day at '1'
Calendar.setMonth(month);    // Start the calendar month at now

/* VARIABLES FOR FORMATTING
NOTE: You can format the 'BORDER', 'BGCOLOR', 'CELLPADDING', 'BORDERCOLOR'
      tags to customize your calendar's look. */

var TR_start = '<TR>';
var TR_end = '</TR>';
var highlight_start = '<TD WIDTH="30" class="selectedDate"><CENTER>';
var highlight_end   = '</CENTER></B>';
var TD_start = '<TD WIDTH="30" class="calendarContent"><CENTER>';
var TD_end = '</CENTER></TD>';
var TD_wstart = '<TD WIDTH="30" class="calendarWeeks"><CENTER>';
var TD_wend = '</CENTER></TD>';
var A_end = '</A>';

/* BEGIN CODE FOR CALENDAR
NOTE: You can format the 'BORDER', 'BGCOLOR', 'CELLPADDING', 'BORDERCOLOR'
tags to customize your calendar's look.*/

cal =  '<TABLE class="calendarBox" height="198" width="100%"><TR><TD valign="top">';
cal += '<TABLE class="calendarContent" width="100%">' + TR_start;
cal += '<TD class="calendarHeader"><CENTER><A href="#" onclick="returnDate('+ checkDnYear(year, month) + ',' + monthDn(month+1) + ',' + Calendar.getDate() + ',\'' + activeForm +'\');">&lt;&lt;</A>'+TD_end;
cal += '<TD COLSPAN="5" class="calendarHeader"><B><CENTER>' + month_of_year[month]  + ' ' + year + '</B>' + TD_end;
cal += '<TD class="calendarHeader"><CENTER><A href="#" onclick="returnDate('+ checkUpYear(year, month) + ',' + monthUp(month+1) + ',' + Calendar.getDate() + ',\'' + activeForm +'\');">&gt;&gt;</A>' + TD_end + TR_end;
cal += TR_start;

// LOOPS FOR EACH DAY OF WEEK
for(index=0; index < DAYS_OF_WEEK; index++)
{
cal += TD_wstart + day_of_week[index] + TD_wend;
}

cal += TD_end + TR_end;
cal += TR_start;

// FILL IN BLANK GAPS UNTIL TODAY'S DAY
for(index=0; index < Calendar.getDay(); index++)
cal += TD_start + '  ' + TD_end;

// LOOPS FOR EACH DAY IN CALENDAR
for(index=0; index < DAYS_OF_MONTH; index++)
{
  if( Calendar.getDate() > index ){
    // RETURNS THE NEXT DAY TO PRINT
    week_day = Calendar.getDay();

    // START NEW ROW FOR FIRST DAY OF WEEK
    if(week_day == 0)
      cal += TR_start;

    if(week_day != DAYS_OF_WEEK){

    // SET VARIABLE INSIDE LOOP FOR INCREMENTING PURPOSES
    var day = Calendar.getDate();

    // HIGHLIGHT TODAY'S DATE
    if( today==Calendar.getDate() )
      cal += highlight_start + day + highlight_end + TD_end;

    // PRINTS DAY
    else
      cal += TD_start + '<A href="#" onclick="returnDate('+ year + ',' + Number(month+1) + ',' + Calendar.getDate() + ',\'' + activeForm +'\');">' + day + A_end + TD_end;
    }

    // END ROW FOR LAST DAY OF WEEK
    if(week_day == DAYS_OF_WEEK)
    cal += TR_end;
  }

  // INCREMENTS UNTIL END OF THE MONTH
  Calendar.setDate(Calendar.getDate()+1);

}// end for loop

cal += '</TD></TR></TABLE>';

//  PRINT CALENDAR
return cal;
}


//////////////////\\\\\\\\\\\\\\\\\
// FONCTIONS DE MENUS DÉROULANTS \\
///////////////      \\\\\\\\\\\\\\

function prepareMenu(current){

currSec = current;
sections = new Array();
secList = new Array();
secList = Array('manu','phar','indu','tech','tele','serv');

sections[0] = secList[currSec-1];
j=0;
for (i=1;i<7;i++){
	if (i!=(currSec)){
		sections[i] = secList[j];
	}else{
		j++;
		sections[i] = secList[j];
	}
j++;
}

return currSec, sections, secList;
}

function openSousMenu(){
document.getElementById('SousMenu').style.visibility = 'visible';
}

function closeSousMenu(){
document.getElementById('SousMenu').style.visibility = 'hidden';
}

function getInactive(current){
if (sections==''){
prepareMenu(current);
}

inactive = '';
inactive += '<td onMouseOver="openSousMenu();" height="10" style="font-size:1px;"><img src="themes/Scanacom2/img_Scanacom/btn_';
inactive += sections[0];
inactive += '.gif" border="0"></td>';
return inactive;
}

function getSections(current){
prepareMenu(current);

sous_menu = '';
sous_menu += '<tr><td height="14" style="font-size:1px;"><img src="themes/Scanacom2/img_Scanacom/sm_dots.gif"></td>';
sous_menu += getInactive();
sous_menu += '</tr>';

for (k=1;k<6;k++){
sous_menu += '<tr><td height="14" style="font-size:2px;"><img src="themes/Scanacom2/img_Scanacom/sm_blank.gif" name="';
sous_menu += sections[k];
sous_menu += '_o"></td><td height="14" style="font-size:2px;"><a href="#" onMouseOut="document.'
sous_menu += sections[k];
sous_menu += '_o.src=\'themes/Scanacom2/img_Scanacom/sm_blank.gif\';" onMouseOver="document.'
sous_menu += sections[k];
sous_menu += '_o.src=\'themes/Scanacom2/img_Scanacom/sm_dots.gif\';"><img src="themes/Scanacom2/img_Scanacom/btn_';
sous_menu += sections[k];
sous_menu += '.gif" border="0"></td></tr>';
}

return sous_menu;
}

function axialPreview(url, language, alertMsg){
  if( document.previewForm.lang.value == 'fr' ){
   content = document.frames("desc_fr___Frame").tmpForm.eSourceField.value;
  } else {
  	content = document.frames("desc_en___Frame").tmpForm.eSourceField.value;
  }
  document.previewForm.html.value=content;
  document.previewForm.submit();
}

function rowOverEffect(myobject) {
  //if (object.className == 'RowListLinks') object.className = 'RowListLinksOver';
  //if (object.className == 'RowBlockCatego') object.className = 'RowBlockCategoOver';
    if (document.all){
        presence = myobject.className.indexOf('Over');
        if (presence==-1) myobject.className = myobject.className+'Over';
    }

    else if (document.getElementById){
        presence = document.getElementById(object).className.indexOf('Over');
        if (presence==-1) document.getElementById(object).className = object.className+'Over';
    }
  //alert(object.className);
}

function rowOutEffect(myobject) {
  //if (object.className == 'RowListLinksOver') object.className = 'RowListLinks';
  //if (object.className == 'RowBlockCategoOver') object.className = 'RowBlockCatego';
  
    //if (document.all){
        presence = myobject.className.indexOf('Over');
        if ( presence!=-1) myobject.className = myobject.className.substring(0,presence);
    //alert(object.className.substring(0,object.className.length-4));
    //}
    /*
    else if (document.getElementById){
        presence = document.getElementById(object).className.indexOf('Over');
        if ( presence!=-1) object.className = document.getElementById(object).className.substring(0,presence);
    }*/
}

var MONTH_NAMES=new Array('January','February','March','April','May','June','July','August','September','October','November','December','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec');
var DAY_NAMES=new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sun','Mon','Tue','Wed','Thu','Fri','Sat');
function LZ(x) {return(x<0||x>9?"":"0")+x}

function isDate(val,format) {
	var date=getDateFromFormat(val,format);
	if (date==0) { return false; }
	return true;
	}

function compareDates(date1,dateformat1,date2,dateformat2) {
	var d1=getDateFromFormat(date1,dateformat1);
	var d2=getDateFromFormat(date2,dateformat2);
	if (d1==0 || d2==0) {
		return -1;
		}
	else if (d1 > d2) {
		return 1;
		}
	return 0;
	}

function formatDate(date,format) {
	format=format+"";
	var result="";
	var i_format=0;
	var c="";
	var token="";
	var y=date.getYear()+"";
	var M=date.getMonth()+1;
	var d=date.getDate();
	var E=date.getDay();
	var H=date.getHours();
	var m=date.getMinutes();
	var s=date.getSeconds();
	var yyyy,yy,MMM,MM,dd,hh,h,mm,ss,ampm,HH,H,KK,K,kk,k;
	// Convert real date parts into formatted versions
	var value=new Object();
	if (y.length < 4) {y=""+(y-0+1900);}
	value["y"]=""+y;
	value["yyyy"]=y;
	value["yy"]=y.substring(2,4);
	value["M"]=M;
	value["MM"]=LZ(M);
	value["MMM"]=MONTH_NAMES[M-1];
	value["NNN"]=MONTH_NAMES[M+11];
	value["d"]=d;
	value["dd"]=LZ(d);
	value["E"]=DAY_NAMES[E+7];
	value["EE"]=DAY_NAMES[E];
	value["H"]=H;
	value["HH"]=LZ(H);
	if (H==0){value["h"]=12;}
	else if (H>12){value["h"]=H-12;}
	else {value["h"]=H;}
	value["hh"]=LZ(value["h"]);
	if (H>11){value["K"]=H-12;} else {value["K"]=H;}
	value["k"]=H+1;
	value["KK"]=LZ(value["K"]);
	value["kk"]=LZ(value["k"]);
	if (H > 11) { value["a"]="PM"; }
	else { value["a"]="AM"; }
	value["m"]=m;
	value["mm"]=LZ(m);
	value["s"]=s;
	value["ss"]=LZ(s);
	while (i_format < format.length) {
		c=format.charAt(i_format);
		token="";
		while ((format.charAt(i_format)==c) && (i_format < format.length)) {
			token += format.charAt(i_format++);
			}
		if (value[token] != null) { result=result + value[token]; }
		else { result=result + token; }
		}
	return result;
	}
	
function _isInteger(val) {
	var digits="1234567890";
	for (var i=0; i < val.length; i++) {
		if (digits.indexOf(val.charAt(i))==-1) { return false; }
		}
	return true;
	}
function _getInt(str,i,minlength,maxlength) {
	for (var x=maxlength; x>=minlength; x--) {
		var token=str.substring(i,i+x);
		if (token.length < minlength) { return null; }
		if (_isInteger(token)) { return token; }
		}
	return null;
	}
	
function getDateFromFormat(val,format) {
	val=val+"";
	format=format+"";
	var i_val=0;
	var i_format=0;
	var c="";
	var token="";
	var token2="";
	var x,y;
	var now=new Date();
	var year=now.getYear();
	var month=now.getMonth()+1;
	var date=1;
	var hh=now.getHours();
	var mm=now.getMinutes();
	var ss=now.getSeconds();
	var ampm="";
	
	while (i_format < format.length) {
		// Get next token from format string
		c=format.charAt(i_format);
		token="";
		while ((format.charAt(i_format)==c) && (i_format < format.length)) {
			token += format.charAt(i_format++);
			}
		// Extract contents of value based on format token
		if (token=="yyyy" || token=="yy" || token=="y") {
			if (token=="yyyy") { x=4;y=4; }
			if (token=="yy")   { x=2;y=2; }
			if (token=="y")    { x=2;y=4; }
			year=_getInt(val,i_val,x,y);
			if (year==null) { return 0; }
			i_val += year.length;
			if (year.length==2) {
				if (year > 70) { year=1900+(year-0); }
				else { year=2000+(year-0); }
				}
			}
		else if (token=="MMM"||token=="NNN"){
			month=0;
			for (var i=0; i<MONTH_NAMES.length; i++) {
				var month_name=MONTH_NAMES[i];
				if (val.substring(i_val,i_val+month_name.length).toLowerCase()==month_name.toLowerCase()) {
					if (token=="MMM"||(token=="NNN"&&i>11)) {
						month=i+1;
						if (month>12) { month -= 12; }
						i_val += month_name.length;
						break;
						}
					}
				}
			if ((month < 1)||(month>12)){return 0;}
			}
		else if (token=="EE"||token=="E"){
			for (var i=0; i<DAY_NAMES.length; i++) {
				var day_name=DAY_NAMES[i];
				if (val.substring(i_val,i_val+day_name.length).toLowerCase()==day_name.toLowerCase()) {
					i_val += day_name.length;
					break;
					}
				}
			}
		else if (token=="MM"||token=="M") {
			month=_getInt(val,i_val,token.length,2);
			if(month==null||(month<1)||(month>12)){return 0;}
			i_val+=month.length;}
		else if (token=="dd"||token=="d") {
			date=_getInt(val,i_val,token.length,2);
			if(date==null||(date<1)||(date>31)){return 0;}
			i_val+=date.length;}
		else if (token=="hh"||token=="h") {
			hh=_getInt(val,i_val,token.length,2);
			if(hh==null||(hh<1)||(hh>12)){return 0;}
			i_val+=hh.length;}
		else if (token=="HH"||token=="H") {
			hh=_getInt(val,i_val,token.length,2);
			if(hh==null||(hh<0)||(hh>23)){return 0;}
			i_val+=hh.length;}
		else if (token=="KK"||token=="K") {
			hh=_getInt(val,i_val,token.length,2);
			if(hh==null||(hh<0)||(hh>11)){return 0;}
			i_val+=hh.length;}
		else if (token=="kk"||token=="k") {
			hh=_getInt(val,i_val,token.length,2);
			if(hh==null||(hh<1)||(hh>24)){return 0;}
			i_val+=hh.length;hh--;}
		else if (token=="mm"||token=="m") {
			mm=_getInt(val,i_val,token.length,2);
			if(mm==null||(mm<0)||(mm>59)){return 0;}
			i_val+=mm.length;}
		else if (token=="ss"||token=="s") {
			ss=_getInt(val,i_val,token.length,2);
			if(ss==null||(ss<0)||(ss>59)){return 0;}
			i_val+=ss.length;}
		else if (token=="a") {
			if (val.substring(i_val,i_val+2).toLowerCase()=="am") {ampm="AM";}
			else if (val.substring(i_val,i_val+2).toLowerCase()=="pm") {ampm="PM";}
			else {return 0;}
			i_val+=2;}
		else {
			if (val.substring(i_val,i_val+token.length)!=token) {return 0;}
			else {i_val+=token.length;}
			}
		}
	// If there are any trailing characters left in the value, it doesn't match
	if (i_val != val.length) { return 0; }
	// Is date valid for month?
	if (month==2) {
		// Check for leap year
		if ( ( (year%4==0)&&(year%100 != 0) ) || (year%400==0) ) { // leap year
			if (date > 29){ return 0; }
			}
		else { if (date > 28) { return 0; } }
		}
	if ((month==4)||(month==6)||(month==9)||(month==11)) {
		if (date > 30) { return 0; }
		}
	// Correct hours value
	if (hh<12 && ampm=="PM") { hh=hh-0+12; }
	else if (hh>11 && ampm=="AM") { hh-=12; }
	var newdate=new Date(year,month-1,date,hh,mm,ss);
	return newdate.getTime();
	}

function parseDate(val) {
	var preferEuro=(arguments.length==2)?arguments[1]:false;
	generalFormats=new Array('y-M-d','MMM d, y','MMM d,y','y-MMM-d','d-MMM-y','MMM d');
	monthFirst=new Array('M/d/y','M-d-y','M.d.y','MMM-d','M/d','M-d');
	dateFirst =new Array('d/M/y','d-M-y','d.M.y','d-MMM','d/M','d-M');
	var checkList=new Array('generalFormats',preferEuro?'dateFirst':'monthFirst',preferEuro?'monthFirst':'dateFirst');
	var d=null;
	for (var i=0; i<checkList.length; i++) {
		var l=window[checkList[i]];
		for (var j=0; j<l.length; j++) {
			d=getDateFromFormat(val,l[j]);
			if (d!=0) { return new Date(d); }
			}
	}
	return null;
}

// window.onerror = function(){return true;}