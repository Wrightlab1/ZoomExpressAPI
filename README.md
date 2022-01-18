# Zoom Express API
Use of this sample app is subject to our Terms of Use.

This is a node.js/Express Server that acts as a backend APi server. 
This Server can recieve API requests and forward them to the Zoom RESTful API and return the response.

[Zoom API Dcumentation](https://marketplace.zoom.us/docs/api-reference/introduction)

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

## Usage

### Get JWT token
Make a `GET` request to `http://localhost:3000/api/token` OR your deployed URL
The API will return the following JSON object
```
{"Token":"yourJSONWebToken"}
```

### Create a user
Make a `POST` request to `http://localhost:3000/api/users` OR your deployed URL
The `BODY` should contain the following JSON Object
```
{
  "action": "custCreate",
  "user_info": {
    "email": "example@example.com",
    "type": 1,
    "first_name": "Terry",
    "last_name": "Jones"
  }
}
```
The API will return the new User object

### List Users
Make a `GET` request to `http://localhost:3000/api/users` OR your deployed URL
The API will return a list of Users

### Get a User
Make a `GET` request to `http://localhost:3000/api/users/{userID}` OR your deployed URL
The API will return a specific User

### Delete a User
Make a `POST` request to `http://localhost:3000/api/users/{userID}?action=delete` OR your deployed URL

The API will delete the specified user

Additional Query Parameters
```
transfer_email={emailAddress}
transfer_meeting = {boolean}
transfer_webinar = {boolean}
transfer_recording = {boolean}
```
for more info on deleting user see [Link to Zoom API Documentation](https://marketplace.zoom.us/docs/api-reference/zoom-api/users/userdelete)
