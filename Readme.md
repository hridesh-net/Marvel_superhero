# Superhero Hunter

Superhero Hunter is a web application that allows users to search for superheroes and add them to their favorites list. It utilizes the Marvel Comics API to fetch superhero data and provides an intuitive interface for users to interact with.

## Features

- Home Page: Displays a list of superheroes fetched from the Marvel Comics API. Includes a search bar for filtering superheroes based on the search query.
- Superhero Page: Provides detailed information about a selected superhero, including their name, photo, bio, and other data provided by the Marvel Comics API (comics, events, series, stories, etc).
- My Favorite Superheroes Page: Shows a list of the user's favorite superheroes. The list is persistent, ensuring that the favorites are saved even after closing the browser.
- Add to Favorites: Each superhero displayed in the search results can be added to the favorites list with a single click.
- Remove from Favorites: Each superhero in the favorites list has a remove button to easily remove them from the list.

## Getting Started

To run the Superhero Hunter application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/superhero-hunter.git`
2. Navigate to the project directory: `cd superhero-hunter`
3. Open the index.html file in a web browser.

## Dependencies

The following dependencies are used in this project:

- [jQuery](https://jquery.com): JavaScript library for easier DOM manipulation and AJAX requests.
- [CryptoJS](https://cryptojs.gitbook.io/docs/): Library for cryptographic functions. Specifically, the MD5 function is used to create a hash for API authentication.

## API Usage

Superhero Hunter utilizes the Marvel Comics API to fetch superhero data. To make API requests, you need to provide your own public and private keys.

- Get your Marvel Comics API keys by creating an account at [developer.marvel.com](https://developer.marvel.com).
- Replace the `public_key` and `private_key` variables in the script with your own keys.

```javascript
var public_key = "YOUR_PUBLIC_KEY";
var private_key = "YOUR_PRIVATE_KEY";
