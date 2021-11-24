# Microservice App Client Setup

This frontend of the app has two pages -

 * Login page
 * Patching page

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

Your app is ready to be deployed!



# Microservice App Server Setup

A simple stateless microservice in Nodejs, with two major functionalities -

 * Authentication
 * JSON patching


## Setup

The API requires:
 * [Node.js](https://nodejs.org/en/download/)
 * [Express](https://expressjs.com/)
 * [Mocha](https://mochajs.org/) - For testing

To get up and running: 

**1.** Clone the https://github.com/vicjuma/react-nodejs-microservice
```
https://github.com/vicjuma/react-nodejs-microservice/
```

**2.**  ```cd``` into repo/server or repo/client. Use the same directory name(below) if you do not change it.
```
cd microservice/server
```

**3.**  use npm to set up the dependencies of the application by using the command below
```
npm install
```

**4.**  The app gets up and running on port 5000 with ```npm start```.
 

## Testing the API routes.

You can use [Postman](https://www.getpostman.com/) to test the routes, but I have added a working ReactJS frontend to provide the UI for PATCH function and Login interface.

### Authentication
You can pass in any username or password to login.
 1. Set the request to **POST** and the url to _/api/users/login_. 
 2. In the **Body** for the Postman request, select **x-www-form-urlencoded**.
 3. You will be setting 2 keys (for username and password). Set the ```username``` key to any name. Set ```password``` to any password (minimum of 6 characters).
 4. Hit ```Send```. You will get a result in this format:
 ```
 {
    "user": "Victor",
    "authorized": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1vaSIsImlhdCI6MTUzMjAwNDkwMSwiZXhwIjoxNTMyMDI2NTAxfQ.sonItbpZ_yKsRLDXNfDqwN6yN5VbdMVDhgKAMxDmPFY"
}
 ```


 ### JSON patching
Apply json patch to a json object, and return the resulting json object.
 1. Set the request to **PATCH** and the url to _/api/patch-object_.
 2. Set the key ```jsonObject``` to an object you would like to patch. Set the key ```jsonPatchObject``` to the object you want to use to patch the ```jsonObject```.
 ```
 Examples:
 jsonObject
 { "user": { "firstName": "John ", "lastName": "Doe" } }

 jsonPatchObject
 [{"op": "replace", "path": "/user/firstName", "value": "Jane"}, {"op": "replace", "path": "/user/lastName", "value": "Mary"}]
 ```
 3. Since this is a secure route, for testing, you will have to set the token in the ```Header```. Set key as ```token``` and value as token you received from **Authentication**.
 4. Expected result should be:
 ```
 { "user": { "firstName": "Jane", "lastName": "Mary" } }
 ```

