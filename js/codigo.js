

let image1 = document.getElementById('imgcnc');
let image2 = document.getElementById('imgwaterjet');
let image3 = document.getElementById('imgtarjetas');


let cont1 = 1;
let cont2 = 1;
let cont3 = 1;

let textdirimg = "../mtto/images/";

image1.src = textdirimg+"cnc"+cont1+".jpg";
image2.src = textdirimg+"waterjet"+cont2+".jpg";
image3.src = textdirimg+"tarjeta"+cont3+".jpg";

cont1++;
cont2++;
cont3++;

setInterval(function(){
	image1.src = textdirimg+"cnc"+cont1+".jpg";
	image2.src = textdirimg+"waterjet"+cont2+".jpg";
	image3.src = textdirimg+"tarjeta"+cont3+".jpg";


	cont1++;
	if (cont1 > 5){
		cont1 = 1;
	}

	cont2++;
	if (cont2 > 17){
		cont2 = 1;
	}

	cont3++;
	if (cont3 > 6){
		cont3 = 1;
	}
}, 5000);

