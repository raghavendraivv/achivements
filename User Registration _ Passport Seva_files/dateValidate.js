var dtCh="/";var minYear=1900;var maxYear=2100;function isInteger(b){var a;for(a=0;a<b.length;a++){var d=b.charAt(a);if(((d<"0")||(d>"9"))){return false}}return true}function stripCharsInBag(d,e){var b;var a="";for(b=0;b<d.length;b++){var f=d.charAt(b);if(e.indexOf(f)==-1){a+=f}}return a}function daysInFebruary(a){return(((a%4==0)&&((!(a%100==0))||(a%400==0)))?29:28)}function DaysArray(b){for(var a=1;a<=b;a++){this[a]=31;if(a==4||a==6||a==9||a==11){this[a]=30}if(a==2){this[a]=29}}return this}function isDate(d){var a=DaysArray(12);var e=d.indexOf(dtCh);var c=d.indexOf(dtCh,e+1);var g=d.substring(0,e);var h=d.substring(e+1,c);var f=d.substring(c+1);strYr=f;if(g.charAt(0)=="0"&&g.length>1){g=g.substring(1)}if(h.charAt(0)=="0"&&h.length>1){h=h.substring(1)}for(var b=1;b<=3;b++){if(strYr.charAt(0)=="0"&&strYr.length>1){strYr=strYr.substring(1)}}month=parseInt(h);day=parseInt(g);year=parseInt(strYr);if(e==-1||c==-1){alert("The date format should be : dd/mm/yyyy");return false}if(h.length<1||month<1||month>12){alert("Please enter a valid month");return false}if(g.length<1||day<1||day>31||(month==2&&day>daysInFebruary(year))||day>a[month]){alert("Please enter a valid day");return false}if(f.length!=4||year==0||year<minYear||year>maxYear){alert("Please enter a valid 4 digit year between "+minYear+" and "+maxYear);return false}if(d.indexOf(dtCh,c+1)!=-1||isInteger(stripCharsInBag(d,dtCh))==false){alert("Please enter a valid date");return false}return true}function ValidateForm(){var a=document.frmSample.dob;if(isDate(a.value)==false){a.focus();return false}return true};