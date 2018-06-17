function primoclick() {

   $("#sci").removeClass("sivede");
   $("#sci").addClass("nonsivede");
   $("#david").removeClass("nonsivede");
   $("#david").addClass("sivede");
   
}

function secondoclick() {

   $("#david").removeClass("sivede");
   $("#david").addClass("nonsivede");
   $("#ktm").removeClass("nonsivede");
   $("#ktm").addClass("sivede");
  
   
}

function terzoclick() {

   $("#ktm").removeClass("sivede");
   $("#ktm").addClass("nonsivede");
   $("#camping").removeClass("nonsivede");
   $("#camping").addClass("sivede");
   
}

function quartoclick() {

   $("#camping").removeClass("sivede");
   $("#camping").addClass("nonsivede");
   $("#sci").removeClass("nonsivede");
   $("#sci").addClass("sivede");

   
}



function quando_clicki() { 

	if($("#sci").hasClass("sivede")) {
		primoclick();
	}
	else if($("#david").hasClass("sivede")) {
     
		secondoclick();
	}
	else if($("#ktm").hasClass("sivede")){
     
		terzoclick();
	}
	else if($("#camping").hasClass("sivede")){
     
		quartoclick();
	}
	
}

$("#destra").on("click", quando_clicki);

function primoclickrovescio() {

   $("#camping").removeClass("sivede");
   $("#camping").addClass("nonsivede");
   $("#ktm").removeClass("nonsivede");
   $("#ktm").addClass("sivede");
   
}

function secondoclickrovescio() {

   $("#ktm").removeClass("sivede");
   $("#ktm").addClass("nonsivede");
   $("#david").removeClass("nonsivede");
   $("#david").addClass("sivede");
  
   
}

function terzoclickrovescio() {

   $("#david").removeClass("sivede");
   $("#david").addClass("nonsivede");
   $("#sci").removeClass("nonsivede");
   $("#sci").addClass("sivede");
   
}

function quartoclickrovescio() {

   $("#sci").removeClass("sivede");
   $("#sci").addClass("nonsivede");
   $("#camping").removeClass("nonsivede");
   $("#camping").addClass("sivede");

   
}



function quando_clickirovescio() { 

	if($("#camping").hasClass("sivede")) {
		primoclickrovescio();
	}
	else if($("#ktm").hasClass("sivede")) {
     
		secondoclickrovescio();
	}
	else if($("#david").hasClass("sivede")){
     
		terzoclickrovescio();
	}
	else if($("#sci").hasClass("sivede")){
     
		quartoclickrovescio();
	}
	
}

$("#sinistra").on("click", quando_clickirovescio);







function scendehome() {

   $("#sottohome").removeClass("piattohome");
   $("#sottohome").addClass("apertohome");
   $("#home1").removeClass("invisibile");
   $("#home1").addClass("visibile");
}


function salehome() {

   $("#sottohome").removeClass("apertohome");
   $("#sottohome").addClass("piattohome");
   $("#home1").removeClass("visibile");
   $("#home1").addClass("invisibile");
}




function tendinahome() { 

	if($("#sottohome").hasClass("piattohome")) {
		scendehome();
	}
	else if($("#sottohome").hasClass("apertohome")) {
     
		salehome();
	}
}

$("#home").on("mouseover", tendinahome);










function scendephoto() {

   $("#sottophoto").removeClass("piattophoto");
   $("#sottophoto").addClass("apertophoto");
   $("#photo1").removeClass("invisibile");
   $("#photo1").addClass("visibile");
   $("#photo2").removeClass("invisibile");
   $("#photo2").addClass("visibile");
   $("#photo3").removeClass("invisibile");
   $("#photo3").addClass("visibile");
   $("#photo4").removeClass("invisibile");
   $("#photo4").addClass("visibile");
}

function salephoto() {

   $("#sottophoto").removeClass("apertophoto");
   $("#sottophoto").addClass("piattophoto");
   $("#photo1").removeClass("visibile");
   $("#photo1").addClass("invisibile");
   $("#photo2").removeClass("visibile");
   $("#photo2").addClass("invisibile");
   $("#photo3").removeClass("visibile");
   $("#photo3").addClass("invisibile");
   $("#photo4").removeClass("visibile");
   $("#photo4").addClass("invisibile");
}



function tendinaphoto() { 

	if($("#sottophoto").hasClass("piattophoto")) {
		scendephoto();
	}	
	else if($("#sottophoto").hasClass("apertophoto")) {
     
		salephoto();
		
	}
	
	
	
}

$("#photo").on("mouseover", tendinaphoto);










function scendecontact() {

   $("#sottocontact").removeClass("piattocontact");
   $("#sottocontact").addClass("apertocontact");
   $("#contact1").removeClass("invisibile");
   $("#contact1").addClass("visibile");
}

function salecontact() {

   $("#sottocontact").removeClass("apertocontact");
   $("#sottocontact").addClass("piattocontact");
   $("#contact1").removeClass("visibile");
   $("#contact1").addClass("invisibile");
}



function tendinacontact() { 

	if($("#sottocontact").hasClass("piattocontact")) {
		scendecontact();
	}
	else if($("#sottocontact").hasClass("apertocontact")) {
     
		salecontact();
	}
	
	
}

$("#contact").on("mouseover", tendinacontact);











