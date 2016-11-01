var besturingsknoppen = document.querySelectorAll('.besturingsknoppen a');


for (var i = 0; i < besturingsknoppen.length; i++) {    
    besturingsknoppen[i].addEventListener('click', function(){
        
        for (var t = 0; t < besturingsknoppen.length; t++) {
            besturingsknoppen[t].classList.remove('is-visible');
        }
        
        this.classList.add('is-visible');
    });
}
