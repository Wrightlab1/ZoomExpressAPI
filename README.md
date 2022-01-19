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

### OR

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Usage

### Request Body
This application forwards the `Body` of the request to the appropriate Zoom endpoint. Follow the requirements of the Zoom API to create the `Body` of any request

### Token
| Endpoint      |Method | URL                                                      | Zoom Documentation                                                       |
| ------------- |-------|----------------------------------------------------------|--------------------------------------------------------------------------|
| Get JWT Token |GET    |`http://localhost:3000/api/token`                         |(https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#using-jwt)|

### Users

| Endpoint      |Method | URL                                                      | Zoom Documentation                                                       |
| ------------- |-------|----------------------------------------------------------|--------------------------------------------------------------------------|
| Create a User |POST   |`http://localhost:3000/api/users`                         |(https://marketplace.zoom.us/docs/api-reference/zoom-api/users/usercreate)|
| List Users    |GET    |`http://localhost:3000/api/users`                         |(https://marketplace.zoom.us/docs/api-reference/zoom-api/users/users)     |
| Get a User    |GET    |`http://localhost:3000/api/users/{userID}`                |(https://marketplace.zoom.us/docs/api-reference/zoom-api/users/user)      |
| Update a User |PATCH  |`http://localhost:3000/api/users/{userID}`                |(https://marketplace.zoom.us/docs/api-reference/zoom-api/users/userupdate)|
| Delete a User |DELETE |`http://localhost:3000/api/users/{userID}?action=delete`  |(https://marketplace.zoom.us/docs/api-reference/zoom-api/users/userdelete)|


### Meetings
| Endpoint      |Method | URL                                                      | Zoom Documentation                                                       |
| ------------- |-------|----------------------------------------------------------|--------------------------------------------------------------------------|
| Create a Meeting |POST   |`http://localhost:3000/api/meetings/{userid}`          |(https://marketplace.zoom.us/docs/api-reference/zoom-api/meetings/meetingcreate)|
| Get a Meeting    |GET    |`http://localhost:3000/api/meetings/{meetingid}`       |(https://marketplace.zoom.us/docs/api-reference/zoom-api/meetings/meeting)     |
| Update a Meeting |PATCH  |`http://localhost:3000/api/meetings/{meetingid}`       |(https://marketplace.zoom.us/docs/api-reference/zoom-api/meetings/meetingupdate)      |
| Delete a Meeting |DELETE |`http://localhost:3000/api/meetings/{meetingid}`       |(https://marketplace.zoom.us/docs/api-reference/zoom-api/meetings/meetingdelete)|
