var title = document.querySelector('#title'); 
var body = document.querySelector('#body');
var saveButton = document.querySelector('#savebtn');
var bottomSection = document.querySelector('.bottom-section');
var ideasCollection = JSON.parse(localStorage.getItem('cards')) || [];







saveButton.addEventListener('click',saveReturn);

function saveReturn(e){
	event.preventDefault();
	var idea = new Idea(title.value, body.value);
	appendCard(idea);
	ideasCollection.push(idea);
	idea.saveToStorage(ideasCollection);
	console.log(ideasCollection);
};


function appendCard(idea){
	var card = `<article class="card id">
        <h2 class="card-title">${idea.title}</h2>
        <p class="card-body">${idea.body} </p>
        <div class="bottom-icons">
          <div class="up-down-icons">
            <i class="fas fa-chevron-circle-up iconstyle"></i>
            <i class="fas fa-chevron-circle-down iconstyle"></i>
            <h4 class="quality">${idea.quality}</h4>
          </div>
          <aside class="close-icon">
            <i class="fas fa-times-circle iconstyle"></i>
          </aside>
          </div>
      </article>`;
      	bottomSection.innerHTML = card + bottomSection.innerHTML;
       // bottomSection.insertAdjacentHTML('afterend',card);

}


window.onload = loaded;

function loaded(){
	alert('hey');
	if(localStorage.getItem('cards') !== null){
		var parsed = JSON.parse(localStorage.getItem('cards'));
		console.log(parsed);
		parsed.map(function(e){
			appendCard(e);
		})
		
	};
};















 
