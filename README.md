# Zoom Meeting SDK Sample Angular
Use of this sample app is subject to our Terms of Use.

This repo is an Angular app generated via the Angular CLI that uses the Zoom Meeting SDK to start and join Zoom meetings and webinars.

## Installation
To get started, clone the repo:

`$ git clone https://github.com/Wrightlab1/ZoomExpressAPI.git`

## Setup
Once cloned, navigate to the ZoomExpressAPI directory:

`$ cd ZoomExpressAPI`

Install the dependencies

`$ npm install`

Create and environment file to store your API Key and Secret
`touch .env`

Add the following code to the `.env` file, and insert your Zoom JWT App's API Key and Secret found on the App Credentials page in the Zoom App Marketplace:

```
 DB_STRING = "database connection string from MongoDB"
 API_KEY = "ZOOM API KEY"
 API_SECRET = "ZOOM API SECRET"
```

Save and Close `.env`

Start the Server
`npm start`
