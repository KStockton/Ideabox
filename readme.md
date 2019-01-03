# Michael KS, Niraj Aryal & Jonathan Keever Ideabox Project

# Goals are as follows:

## Architecture
For this project, we’ll be increasingly thinking about the “data model” and “dom model” as separate entities. We’ll be using:

JSON and localStorage to persist data on page reload.
JavaScript to manage client-side interactions.
Your entire application will consist of one HTML page or template. You will have two javascript files:

An idea.js file that contains an Idea class.
Idea methods must include, but are not limited to:
constructor
saveToStorage (should only have one job which is to save the instance to storage)
deleteFromStorage
updateContent (should be able to update the title or body of the idea)
updateQuality
A main.js file that contains all dom related javascript.
Note The idea.js file must be the first script in your html so that your main.js file has access to your Idea class.

## Data Model
An idea has an id, title, a body, and a quality.
The id should be a unique identifier.
title and body are free-form strings.
quality should be one of the follow: “genius”, “plausible”, or “swill.”
By default, the idea’s quality should default to the lowest setting, which is “swill”.
Each idea should be created as an instance of the Idea class.

## User Flows
### Viewing ideas
When visiting the application, the user should:

See a list of all existing ideas, including the title, body, and quality for each idea.
Ideas should appear in descending chronological order (with the most recently created idea at the top).

### Adding a new idea
On the application’s main page, a user should:

See two text boxes for entering the “Title” and “Body” for a new idea, and a “Save” button for committing that idea.
When a user clicks “Save”:

A new idea with the provided title and body should appear in the idea list.
The text fields should be cleared and ready to accept a new idea.
The page should not reload.
The idea should be persisted. It should still be present upon reloading the page.
Note: localStorage will not track the type of object, so on page reload you will need to reinstantiate 
all of your idea instances so that they have access to their methods.

### Deleting an existing idea
When viewing the idea list:

Each idea in the list should have a button to remove it from both the data model and the dom.
Upon clicking the “Delete” button, the appropriate idea should be removed from the list.
The page should not reload when an idea is deleted.
The idea should be removed from localStorage. It should not re-appear on next page load.
This update of the data model should happen in a deleteFromStorage method that is defined in the Idea class.
How the dom gets updated using javascript should happen in the main.js file (where you should can still leverage your idea instance)

### Editing an existing idea
When a user clicks the title or body of an idea in the list, that text should become an editable text field, pre-populated with the existing idea title or body.
The user should be able to “commit” their changes by pressing “Enter/Return” or by clicking outside of the text field.
If the user reloads the page, their edits will be reflected.
This update of the data model should occur in an updateContent method that is defined in the Idea class.
How the dom gets updated using javascript should happen in the main.js file (where you should can still leverage your idea instance)

### Changing the quality of an idea
As we said above, ideas should start out as “swill.” In order to change the recorded quality of an idea, the user will interact with it from the idea list.

Each idea in the list should include an “upvote” and “downvote” button.
Clicking upvote on the idea should increase its quality one notch (“swill” → “plausible”, “plausible” → “genius”).
Clicking downvote on the idea should decrease its quality one notch (“genius” → “plausible”, “plausible” → “swill”).
Incrementing a “genius” idea or decrementing a “swill” idea should have no effect.
This update of the data model should occur in an updateQuality method that is defined in the Idea class.
How the dom gets updated using javascript should happen in the main.js file (where you should can still leverage your idea instance)

###Filtering and Searching by Text
We’d like our users to be able to easily find specific ideas they already created, so let’s provide them with a filtering interface on the idea list.

At the top of the idea list, include a text field labeled “Search”.
As a user types in the search box, the list of ideas should filter in real time to only display ideas whose title or body include the user’s text. The page should not reload.
Clearing the search box should restore all the ideas to the list.
There is no need to make persisting changes to the data model to achieve this functionality.

### Filtering by Importance
The application should allow users to filter the idea list based on level of quality.

Your application should have 3 buttons corresponding to each level of importance (swill, plausible, and genius).
When one of the filter buttons is clicked, the idea list should only display the ideas with the selected quality.
There is no need to make persisting changes to the data model to achieve this functionality.

### Recent Ideas
The application should only show the ten most recent Ideas on page load.

The application should contain a button labeled Show more....
When a user clicks on the Show more... button, the list should load all of the remaining ideas.
Once the remaining ideas are loaded, the Show more... button should switch to a Show less... button.
When a user clicks on the Show less... button, the list should switch back to being the first 10 ideas only.
This functionality should toggle back and forth based on that button click.
There is no need to make persisting changes to the data model to achieve this functionality.


## Example Code from Main.js

window.onload = loaded;

function loaded(){
if(localStorage.getItem('cards') !== null){
  ideasCollection = JSON.parse(localStorage.getItem('cards'));


  ideasCollection = ideasCollection.map(function(e){
   return new Idea(e.title, e.body, e.quality, e.id)
 });

  var filtered = ideasCollection.filter(function(e,index){
    return index < 10;
  })

  filtered.forEach(function(e){
    appendCard(e);
  })
  };
};

## Example Code from Idea.js

updateContent(text,type){
		if(type == "title"){
			this.title = text;
		}else if(type == "body"){
			this.body = text;
		}

};

# Complications
Had trouble sending objects to local storage and re-assigining the objects with the functionality

# Screenshots

Our project with local storage
![image](https://user-images.githubusercontent.com/34406483/50646722-03eb9e80-0f34-11e9-80dc-1a2f5c89981b.png)

Turing Comp
