# [somm assistance](https://somm-assistance.herokuapp.com)
Wine tasting notes made simple.
* Taste and save Tasting Notes
* Search Tasting Notes

## Overview
Professional sommeliers may taste 60 or more wines a week. Searching paper based Tasting Notes from weeks or months prior for the right wine is an arduous task!

somm assistance's powerful search capabilities makes any somm's life easier.

## Technology

### Front End
* JavaScript
* HTML
* CSS
* jQuery

### Back End
* Node.js
* Express.js
* Express Router
* Express.js cors
* MongoDB (mLab)
* Mongoose

### Authentication
* bcryptjs
* jsonwebtoken
* passport
* passport-jwt
* passport-local

### Continuous Integration and Testing
* TravisCI
* mocha
* chai
* faker

### API
* User Credentials are persisted on sign-up.
* User Passwords in database are encrypted via bcrypt.
* Tasting Notes are persisted as associated documents, and not as sub-documents to its corresponding Tasting. This was done for performance considerations.
* If a Tasting is deleted, so are all related Tasting Notes documents.
***
# Using the App

## Landing Page
From the landing page, either Sign in or Sign up.
![landing page](https://github.com/pmkgithub/somm_assitance/blob/master/readmeImages/somm_assitance_splash.png)

## Tastings List Page
All Tastings and related Tasting Notes for a particular User are listed.
![tastings list page](https://github.com/pmkgithub/somm_assitance/blob/master/readmeImages/somm_assistance_events_list_01.png)

By clicking on a Tasting, the User can expose all Tasting Notes
associated with a particular Tasting.
![click a tasting to expose all related tasting notes](https://github.com/pmkgithub/somm_assitance/blob/master/readmeImages/somm_assistance_events_list_02.png)

Click on a Tasting Note to expand Tasting Note details.  Clicking a County, Primary, Secondary or Teritiary Appellation will expand an area map.
![click on a tasting note to expand the tasting note detail](https://github.com/pmkgithub/somm_assitance/blob/master/readmeImages/somm_assistance_events_list_03.png)

## Create, Edit and Delete Tasting
* Create Tasting - click "Add Tasting" to create a new Tasting.
* Edit Tasting - click the "Edit" icon on a Tasting.
* Delete Tasting - Click the "Delete" icon on a Tasting.  This action will also delete all associated Tasting Notes.

## Create, Edit and Delete Tasting Note
* Create Tasting Note - click the "+" icon on a Tasting to create a new Tasting Note.
* Edit Tasting Note - click the "Edit" icon on a Tasting Note.
* Delete Tasting Note - Click the "Delete" icon on a Tasting Note.

## Search Tasting Notes
The true power behind somm assistance lies in the sophisticated Search capabilities.
* Search optimization is achieved through indexing the Primary Grapes.
* In addition, Search will return Tasting Notes from any Tasting where there is a Search criteria match.
* Search also returns the lowest price regardless of the quantity purchase price.


Search may be initiated from the Tastings List page.
![search tasting notes from tastings list page](https://github.com/pmkgithub/somm_assitance/blob/master/readmeImages/somm_assistance_search_01.png)

Search may also be initiated on the Search Results page.
![search tasting notes from search results page](https://github.com/pmkgithub/somm_assitance/blob/master/readmeImages/somm_assistance_search_results_01.png)

Within the Search Results, click any Tasting Note to expand the Tasting Note Details.
![within search results, click any tasting to reveal tasting note detail](https://github.com/pmkgithub/somm_assitance/blob/master/readmeImages/somm_assistance_search_results_02.png)