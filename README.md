# Description:
A full stack Amazon clone web app with login and checkout functionalities on serverless framework.
Utilize Stripe for payment processing and login with firebase authentication.
A ReactJS webapp with Cloud Functions and Firestore.

### Notes:
1. Initialize ReactJS project.
2. npm run build for production deploy
3. Deploy React JS on Firebase hosting with firebase init (need to login). 
4. Deploy backend on Cloud Functions.
### <a href="https://clone-6c27d.web.app/">LIVE DEMO</a> 

### Bugs:
1. "Remove from basket" animation.
2. Responsive design.

***

## Client:
1. ReactJS (Frontend library)
- Context API
- Forward ref
- npx create-react-app myAppName
- npm run build
- firebase deploy --only hosting

2. Material UI (Icons for the app)
- npm install @material-ui/core (dependencies)
- npm install @material-ui/icons (svg icons)

3. React-flip-move
- "Remove from basket" animation.

4. React-currency-format
- Currency format for subtotal

5. React-router-dom
- route to multiple pages.

## Backend:
1. Cloud Functions (need Blaze account)
- Serverless framework
- Processing stripe payment
- Express server with CORS
- firebase deploy --only functions

## Server Hosting:
1. Firebase (configure in firebase.js)
- npm install firebase
- firebase init (public folder name "build")
- firebase deploy

## Database:
1. Cloud Firestore (configure in firebase.js)
- Store user checkouts data

## Others (api, libary, framework, etc):
1. Stripe
- Payment processing for credit card & debit card
- npm i @stripe/stripe-js
- npm i @stripe/react-stripe-js

2. Firebase Authentication
- User authentication with email account

3. Axios
- REST API
- npm install axios

4. Moment
- Format data and time
- npm install moment

***

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
