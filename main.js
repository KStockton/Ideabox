var title = document.querySelector('#title'); 
var body = document.querySelector('#body');
var saveButton = document.querySelector('#savebtn');
var bottomSection = document.querySelector('.bottom-section');
var ideasCollection = JSON.parse(localStorage.getItem('cards')) || [];

saveButton.addEventListener('click',saveReturn);
bottomSection.addEventListener('click',deleteCard);

function saveReturn(e){
	event.preventDefault();
	var idea = new Idea(title.value, body.value);
	appendCard(idea);
	ideasCollection.push(idea);
	idea.saveToStorage(ideasCollection);
	console.log(ideasCollection);
};


function appendCard(idea){

	var card = `<article class="card" id="${idea.id}">
        <h3 class="card-title">${idea.title}</h3>
        <p class="card-body">${idea.body} </p>

        <div class="bottomText">
          <i class="fas fa-chevron-circle-up"></i>
          <i class="fas fa-chevron-circle-down"></i>
          <h4 class="quality">${idea.quality}</h4>
          <i class="fas fa-times-circle">x</i>
          <div>
      </article>`;
      	bottomSection.innerHTML += card + bottomSection.innerHTML;
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


function deleteCard(){
	console.log('hey');
};


function getIdeaById(id){
	ideasCollection.forEach(function(e){
		if(id === e.id){
			console.log(id);
		}
	})

}

getIdeaById(15);















 
