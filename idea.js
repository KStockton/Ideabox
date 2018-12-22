// Step 7 Create the object Idea to create multiple instances of cards. Assign properties to cards.
// This will allow us to distinguish each card instance from another.
class Idea{
	constructor(title,body,quality,id){
		this.title = title; 
		this.body  = body; 
		this.quality = quality || "Swill";
		this.id = id || new Date().getTime(); ; 

	}
	// saveToStorage method takes variable ideasCollection and stringifys cards to set into local storage.
	saveToStorage(ideasCollection){
		
		localStorage.setItem('cards',JSON.stringify(ideasCollection));
	}
	deleteFromStorage(ideasCollection){
		localStorage.setItem('cards',JSON.stringify(ideasCollection));

	}
	updateContent(){

	}
	updateQuality(){
		
	}
};