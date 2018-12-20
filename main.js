// Psuedo Code here and below and below







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

	var card = `<article class="card id">
        <h2 class="card-title">${idea.title}</h2>
        <p class="card-body">${idea.body} </p>
        <div class="bottom-icons">
          <div class="up-down-icons">
            <button type="submit" id="voted-up"><i class="fas fa-chevron-circle-up iconstyle"></i></button>
            <button type="submit" id="voted-up"><i class="fas fa-chevron-circle-down iconstyle"></i></button>
            <h4 class="quality">${idea.quality}</h4>
          </div>
          <aside class="close-icon">
            <button type="submit" class="close-card"><i class="fas fa-times-circle iconstyle"></i><button>
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


function deleteCard(){
	// console.log('hey');
};


function getIdeaById(id){
	ideasCollection.forEach(function(e){
		if(id === e.id){
			console.log(id);
		}
	})

}

getIdeaById(15);















 
