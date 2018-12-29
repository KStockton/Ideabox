// Step 1 Selects title id and assigns it to variable title
var title = document.querySelector('#title'); 
// Step 2 Selects body id and assigns it to variable body
var body = document.querySelector('#body');
// Step 3 Selects savebtn id and assigns it to variable saveButton
var saveButton = document.querySelector('#savebtn');
// Step 6 Selects bottom-section class and assigns it to variable bottomSection
var bottomSection = document.querySelector('.bottom-section');
// Step 11 Create ideasCollection variable to equal empty array.
// var ideasCollection = JSON.parse(localStorage.getItem('cards')) || [];
var ideasCollection = [];


// Step 4 Add an event listener to saveButton variable (saveReturn not defined yet) 
saveButton.addEventListener('click',saveReturn);

bottomSection.addEventListener('click',function(event){
  if(event.target.classList.contains('upvote1')){
    
    upVote(event);

  }else if(event.target.classList.contains('downvote1')){
    downVote(event);
  }
});

bottomSection.addEventListener('click',function(event){
  if(event.target.classList.contains('editable')){
    editCard(event);
  } else if(event.target.classList.contains('deleteicon')){
    deleteCard(event);
  }
})





// Step 5 Creating a function for --> new idea with the provided title and body should appear in the idea list.
// The text fields should be cleared and ready to accept a new idea.
// The page should not reload.
// The idea should be persisted. It should still be present upon reloading the page.
// var idea;
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
function appendCard(idea) {


  var card = `<article class="card" id="${idea.id}">
        <h2 class="card-title editable title-edit">${idea.title}</h2>


        <p class="card-body editable">${idea.body} </p>
        <div class="bottom-icons">
          <div class="up-down-icons">
            <img src="images/upvote.svg" class="upvote1">
            <img src="images/downvote.svg" class="downvote1">
            <h4 class="quality">${idea.quality}</h4>
          </div>
          <aside class="close-icon">
            <img src="images/delete.svg" class="deleteicon">
          </aside>
        </div>
      </article>`;
// Step 9a Puts card variable on top of bottom section
        bottomSection.innerHTML = card + bottomSection.innerHTML;
       // bottomSection.insertAdjacentHTML('afterend',card);
}

window.onload = loaded;

function loaded(){
  if(localStorage.getItem('cards') !== null){
    ideasCollection = JSON.parse(localStorage.getItem('cards'));
    console.log(ideasCollection, "heyyy one");

    ideasCollection = ideasCollection.map(function(e){
      return new Idea(e.title, e.body, e.quality, e.id)

    })
      console.log(ideasCollection, "heyyy");
    ideasCollection.forEach(function(e){
    appendCard(e);
    })
    
  };
};






  


function deleteCard(event) {

  var element = event.target.parentElement.parentElement.parentElement;
  console.log(element);
  var id = element.id;
  console.log(id + "heyy")
  var idea = getIdeaById(id);
  console.log(idea);
  
  var index = ideasCollection.indexOf(idea);
  console.log(index + "identifier");
  
  ideasCollection.splice(index,1);
  
  element.remove();

  idea.deleteFromStorage(ideasCollection);
};


function getIdeaById(id) {
  for(var i=0; i<ideasCollection.length; i++) {
    if(id == ideasCollection[i].id) {
      return ideasCollection[i];
    }
  }
};

function editCard(event){
  event.target.contentEditable = true;
}

function upVote(event){
  
 
  var element = event.target.parentElement.parentElement.parentElement;
 
 
  var id = element.id;
  var idea = getIdeaById(id);
 
  
  var index = ideasCollection.indexOf(idea);
 
  idea.updateQuality(true);
   

  event.target.nextElementSibling.nextElementSibling.innerText = `${idea.quality}`;
  idea.saveToStorage(ideasCollection);
}

function downVote(event){
 
 
  var element = event.target.parentElement.parentElement.parentElement;
 
 
  var id = element.id;
  var idea = getIdeaById(id);
  console.log(idea, "gotccha ya");
 
  
  var index = ideasCollection.indexOf(idea);
  console.log(index);
 
  idea.updateQuality(false);
  event.target.nextElementSibling.innerText = `${idea.quality}`;
  idea.saveToStorage(ideasCollection);
}




  



























 
