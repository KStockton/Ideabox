// Step 1 Selects title id and assigns it to variable title
var title = document.querySelector('#title'); 
// Step 2 Selects body id and assigns it to variable body
var body = document.querySelector('#body');
// Step 3 Selects savebtn id and assigns it to variable saveButton
var saveButton = document.querySelector('#savebtn');
// Step 6 Selects bottom-section class and assigns it to variable bottomSection
var bottomSection = document.querySelector('.bottom-section');
// Step 11 Create ideasCollection variable to equal empty array.
var ideasCollection = JSON.parse(localStorage.getItem('cards')) || [];

// Step 4 Add an event listener to saveButton variable (saveReturn not defined yet) 
saveButton.addEventListener('click',saveReturn);
bottomSection.addEventListener('click',deleteCard);

// Step 5 Creating a function for --> new idea with the provided title and body should appear in the idea list.
// The text fields should be cleared and ready to accept a new idea.
// The page should not reload.
// The idea should be persisted. It should still be present upon reloading the page.
function saveReturn(e){
  // Step 5a prevents auto reloading of page.
	event.preventDefault();
	// Step 8 Creates new instance of idea object
  var idea = new Idea(title.value, body.value);
	// Step 10 Calling appendCard function when click event occurs.
  appendCard(idea);
	// ideaCollections is pushing idea into an array
  ideasCollection.push(idea);
  // saveToStorage method i
  idea.saveToStorage(ideasCollection);
  title.value = "";
  body.value = "";
};

// Step 9 Create function appendCard to pass an instance called idea (with its properties) and placing it inside of html assignd as card.
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
// Step 9a Puts card variable on top of bottom section
      	bottomSection.innerHTML = card + bottomSection.innerHTML;
       // bottomSection.insertAdjacentHTML('afterend',card);
}


window.onload = loaded;

function loaded(){
	alert('hey');
	if(localStorage.getItem('cards') !== null){
		var parsed = JSON.parse(localStorage.getItem('cards'));
		// console.log(parsed);
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















 
