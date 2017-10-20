# Basic React Project

## Demonstrates

- React (simple app with single component)
- WebPack (basic config)
- ES6 (imports, spread operators(...) and map)

## Installation

### Assumptions

- NodeJS / NPM installed
- WebPack 3 installed globally on device

### Install

- run ```npm install```
- run ```npm run-script build``` or ```webpack``` to compile the React code
- open ```index.html``` in browser to see code in action!

## Editing code

- run ```npm run-script watch``` to compile files on save
- open ```index.html``` in browser to see code in action (refresh required)
- code is compiled from ```src/index.jsx``` - this is the entry point for all code
- code compiles to ```built/output_bundle.js```

## Files

- ```.babelrc``` - Config file for the babel plugin (translates ES6 to legacy JavaScript).
- ```package.json``` - Lists the scripts and packages that make this project.
- ```webpack.config.js``` - Config to control how WebPack processes and handles files
- ```src/index.jsx``` - The file where all the JavaScript starts from
- ```index.html ``` - The HTML page that includes the scripts that are run to create the DOM using React.
