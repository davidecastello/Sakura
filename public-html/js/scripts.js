function manageNav() {
   if (document.body && document.body.offsetWidth) {
      winW = document.body.offsetWidth;
      winH = document.body.offsetHeight;
   }
   if (document.compatMode=='CSS1Compat' &&
      document.documentElement &&
      document.documentElement.offsetWidth ) {
      winW = document.documentElement.offsetWidth;
      winH = document.documentElement.offsetHeight;
   }
   if (window.innerWidth && window.innerHeight) {
      winW = window.innerWidth;
      winH = window.innerHeight;
   }
	if (winW< 1024) {
	   var nav = document.getElementById("nav-menu");
	     if (nav.className == "") {
	    	   nav.className = "hidden";
        }
	     else {
           nav.className = "";
        }
	}
}

function manageMenu(portata) {
	var section = document.getElementById(portata);
	if (section.className == "portata") {
	    section.className = "hidden";
    }
	else {
	    section.className = "portata";
    }
}


function hideElement() {
   var fastSearch = document.getElementById('fast-search');
   var endList = document.getElementsByClassName('end-list');

   if (fastSearch && endList) {
      fastSearch.className += " hidden";

      var i;

      for (i = 0; i < endList.length; i++) {
         endList[i].className += " hidden";
      }

      var portate = document.getElementsByClassName('portata');

      for (i = 0; i < portate.length; i++) {
         portate[i].className += " hidden";
      }

      var listeBevande = document.getElementsByClassName('listaBevande');

      for (i = 0; i < listeBevande.length; i++) {
         listeBevande[i].className += " hidden";
      }
   }
}
