class Idea{
	constructor(title,body,quality,id){
		this.title = title; 
		this.body  = body; 
		this.quality = quality || "swill";
		this.id = id; 

	}
	saveToStorage(ideasCollection){
		localStorage.setItem('cards',ideasCollection);
	}
	deleteFromStorage(){

	}
	updateContent(){

	}
	updateQuality(){

	}
};