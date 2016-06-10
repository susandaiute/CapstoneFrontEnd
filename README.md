# South Shore Labrador Rescue

http://i.imgur.com/Kh5Rosq.jpg


A full stack web app for a fake labrador rescue organization to satisfy the South Shore's insatiable thirst for adopting cute lab puppies.

## Technology
This app's frontend was made using Javascript, Bootstrap, Handlebars, HTML5, CSS3, JQuery, and AJAX.  It calls upon Petfinder's API. The backend utilizes Ruby on Rails, PostgresQL, and ActiveRecord.

## General Approach
South Shore Lab Rescue was first conceptualized as a reworking of Petfinder's UI but I decided to narrow the scope to something more relevant to my environment.  Parents of the South Shore  love to get labs for their children - it's just about the only kind of dog you'll see around.  With this in mind, the app became a site for a fake labrador rescue organization.  The scope was further narrowed when I realized that I only needed to pull a pet's name and description from the API rather than their age, location, gender, etc. since the description is pretty comprehensive and covers all of the pet's specs.

## Obstacles
The main obstacle in this project was mastering Handlebars, which I was mostly unfamiliar with.  I spent an entire day just trying to grab data from a Handlebars element only to solve the issue myself in about ten minutes the next morning.  This lost time cost me a lot of CSS and polishing of the app's UI since I then had only one day left to start and complete all CRUD actions.
Going forward, I would like the make the backend more complex, improve the UI, render the pets' images and make the site cozy and inviting.  I'd like to add some more functions to the app such as including Google Maps to show where the pet is being fostered/sheltered. Also, sometimes videos are included in a pet's profile and I would like to incorporate those as well. There's quite a bit to be done, but it's all smaller things that I know I can do with a good chunk of free time.
I'm most proud doing all of my CRUD actions in one day as they show how much I've learned and how far I've progressed. Furthermore, I learned Handlebars and solved many issues on my own. Woohoo!

## Wireframes and ERD
http://imgur.com/a/5Lmsv

## User Stories

As a user I want...
    An app that shows me local labradors available for adoption
    An app that shows me photos of said labradors
    An app that is intuitive and easy to use
    An app that allows me to save dogs to my Favorites
    An app that allows me to keep track of if I've applied to adopt a dog
    An app that allows me to remove a dog from my Favorites
