//var idLijst = document.getElementById('MijnLijst');
//
//var verandering = function(){
//  idLijst.innerHTML = "Coffee";  
//};
//
//idLijst.addEventListener('click', verandering);

(function(){
			var verander = document.getElementById("MijnLijst");
            var curText = verander.innerText;
			verander.addEventListener("click", function(){
                if(this.innerText == curText){
					verander.innerText = "- MIJN LIJST";
                }
                else{
                    verander.innerText = curText;
                }
			}, false);

		})();

//
//var verander = document.querySelectorAll('MijnLijst');
//
//for (var i = 0; i < verander.length; i++) {    
//    verander[i].addEventListener('click', editItem);
//};
//
//function editItem (){
//   var curText = verander.innerText;
//			
//    if(this.innerText == curText){
//        verander.innerText = "- MIJN LIJST";
//    }
//    else{
//        verander.innerText = curText;
//    }
//    false);  
//};
