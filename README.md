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

### Making Requests
You can send Get, Post, Patch, and Delete requests to the endpoints listed. If any path parameters are required you must provide them.

### Request Body
This application forwards the `Body` of the request to the appropriate Zoom endpoint. Follow the requirements of the [Zoom API](https://marketplace.zoom.us/docs/api-reference/introduction) to create the `Body` of any request

### Token
Get a JSON Web Token used to authenticate to the [Zoom API](https://marketplace.zoom.us/docs/api-reference/introduction)

| Endpoint      |Method | URL                                                      | Zoom Documentation                                                       |
| ------------- |-------|----------------------------------------------------------|--------------------------------------------------------------------------|
| Get JWT Token |GET    |`http://localhost:3000/api/token`                         |(https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#using-jwt)|

### Signature
Get a signature used to init the [Zoom WebSDK](https://marketplace.zoom.us/docs/sdk/native-sdks/web)

| Endpoint      |Method | URL                                                      | Zoom Documentation                                                       |
| ------------- |-------|----------------------------------------------------------|--------------------------------------------------------------------------|
| Get Signature |GET    |`http://localhost:3000/api/signature/{meetingid}/{roleid}`|(https://marketplace.zoom.us/docs/sdk/native-sdks/web/signature#signature-code-samples)|

### Users

| Endpoint      |Method | URL                                                      | Zoom Documentation                                                       |
| ------------- |-------|----------------------------------------------------------|--------------------------------------------------------------------------|
| Create a User |POST   |`http://localhost:3000/api/users`                         |(https://marketplace.zoom.us/docs/api-reference/zoom-api/users/usercreate)|
| List Users    |GET    |`http://localhost:3000/api/users`                         |(https://marketplace.zoom.us/docs/api-reference/zoom-api/users/users)     |
| Get a User    |GET    |`http://localhost:3000/api/users/{userID}`                |(https://marketplace.zoom.us/docs/api-reference/zoom-api/users/user)      |
| Update a User |PATCH  |`http://localhost:3000/api/users/{userID}`                |(https://marketplace.zoom.us/docs/api-reference/zoom-api/users/userupdate)|
| Delete a User |DELETE |`http://localhost:3000/api/users/{userID}`                |(https://marketplace.zoom.us/docs/api-reference/zoom-api/users/userdelete)|
| Get User Token|GET    |`http://localhost:3000/api/users/{userID}/token`          |(https://marketplace.zoom.us/docs/api-reference/zoom-api/users/usertoken)|


### Meetings
| Endpoint      |Method | URL                                                      | Zoom Documentation                                                       |
| ------------- |-------|----------------------------------------------------------|--------------------------------------------------------------------------|
| Create a Meeting |POST   |`http://localhost:3000/api/meetings/{userid}`          |(https://marketplace.zoom.us/docs/api-reference/zoom-api/meetings/meetingcreate)|
| Get a Meeting    |GET    |`http://localhost:3000/api/meetings/{meetingid}`       |(https://marketplace.zoom.us/docs/api-reference/zoom-api/meetings/meeting)     |
| Update a Meeting |PATCH  |`http://localhost:3000/api/meetings/{meetingid}`       |(https://marketplace.zoom.us/docs/api-reference/zoom-api/meetings/meetingupdate)      |
| Delete a Meeting |DELETE |`http://localhost:3000/api/meetings/{meetingid}`       |(https://marketplace.zoom.us/docs/api-reference/zoom-api/meetings/meetingdelete)|
| Add a Meeting Registrant |POST |`http://localhost:3000/api/meetings/{meetingid}/registrants`       |(https://marketplace.zoom.us/docs/api-reference/zoom-api/meetings/meetingregistrantcreate)|
| Delete a Meeting Registrant |DELETE |`http://localhost:3000/api/meetings/{meetingid}/registrants`       |(https://marketplace.zoom.us/docs/api-reference/zoom-api/meetings/meetingregistrantdelete)|
| List Meeting Registrants |GET |`http://localhost:3000/api/meetings/{meetingid}/registrants`       |(https://marketplace.zoom.us/docs/api-reference/zoom-api/meetings/meetingregistrants)|
| Get a Meeting Registrant |GET |`http://localhost:3000/api/meetings/{meetingid}/registrants/{registrantid}`       |(https://marketplace.zoom.us/docs/api-reference/zoom-api/meetings/meetingregistrantget)|

### Webinars
| Endpoint      |Method | URL                                                      | Zoom Documentation                                                       |
| ------------- |-------|----------------------------------------------------------|--------------------------------------------------------------------------|
| Create a Webinar |POST   |`http://localhost:3000/api/webinars/{userid}`          |(https://marketplace.zoom.us/docs/api-reference/zoom-api/webinars/webinarcreate)|
| Get a Webinar    |GET    |`http://localhost:3000/api/webinars/{webinarid}`       |(https://marketplace.zoom.us/docs/api-reference/zoom-apiwebinarss/webinar)     |
| Update a Webinar |PATCH  |`http://localhost:3000/api/webinars/{webinarid}`       |(https://marketplace.zoom.us/docs/api-reference/zoom-api/webinars/webinarupdate)      |
| Delete a Webinar |DELETE |`http://localhost:3000/api/webinars/{webinarid}`       |(https://marketplace.zoom.us/docs/api-reference/zoom-api/webinars/webinardelete)|
| Add a Webinar Registrant |POST |`http://localhost:3000/api/webinars/{webinarid}/registrants`       |(https://marketplace.zoom.us/docs/api-reference/zoom-api/webinars/webinarregistrantcreate)|
| Delete a Webinar Registrant |DELETE |`http://localhost:3000/api/webinars/{webinarid}/registrants`       |(https://marketplace.zoom.us/docs/api-reference/zoom-api/webinars/webinarregistrantdelete)|
| List Webinar Registrants |GET |`http://localhost:3000/api/webinars/{webinarid}/registrants`       |(https://marketplace.zoom.us/docs/api-reference/zoom-api/webinars/webinarregistrants)|
| Get a Webinar Registrant |GET |`http://localhost:3000/api/webinars/{webinarid}/registrants/{registrantid}`       |(https://marketplace.zoom.us/docs/api-reference/zoom-api/webinars/webinarregistrantget)|


## Logging

This app uses [mongoose](https://mongoosejs.com/) to send logs to [mongodb](https://www.mongodb.com/).

### Log Format


|value        |type  |description             |
|-------------|------|------------------------|
|timeStamp    |Number|unix epoch timestamp    |
|path         |String|request path to Zoom API|
|method       |String|http request method     |
|statusCode   |Number|http status code        |
|statusMessage|String|error messages if any   |
|headers      |Object|http response headers   |
|body         |Object|http response body      |
