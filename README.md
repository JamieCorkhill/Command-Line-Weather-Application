# Command Line Weather Application
This application serves as a non-advanced introduction to programming with Node.js and ES6+ features and follows with the content of my Smashing Magazine article here: -----

# Usage
Simply clone the repo, `cd` into the root directory, and then run `npm install` and `node app.js` (alternatively, run the start script `npm run start`, as defined in `package.json`. You will need a functioning OpenWeatherMap API Key and will need to change the constant variables `API_KEY`, `LOCATION_ZIP_CODE`, and `COUNTRY_CODE` accordingly.

# Where to go from Here?
This application is extremely simple - and it was designed that way. If you are just starting out with Node, you should ponder new features that may be implemented into the application to increase it's complexity. Perhaps host the app with a service like Heroku and store the API Key in an enviroment variable (tutorial [here](https://devcenter.heroku.com/articles/config-vars)). API Keys, for security reasons, should never be hardcoded.

Additionally, use an NPM Package such as [Yargs](https://www.npmjs.com/package/yargs), read its documentation, and attempt to implment user input, making the `LOCATION_ZIP_CODE` and `COUNTRY_CODE` variables dynamic and not constant. You could pre-preprocess this input, such as with Regular Expressions, to ensure it is a valid input. Alternativly, you could employ a second API to validate the zipcode, the same way we called OpenWeatherMap.

Finally, if you have knowlege of HTML and CSS, you could move out of the command line and build out a user interface, using a templating engine like [Handlebars](https://www.npmjs.com/package/handlebars) to render content.
