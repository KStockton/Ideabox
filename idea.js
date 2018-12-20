class Idea{
	constructor(title,body,quality,id){
		this.title = title; 
		this.body  = body; 
		this.quality = quality || "swill";
		this.id = id || new Date().getTime(); ; 

	}
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