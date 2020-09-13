Description:
A full stack Amazon clone web app with login and checkout funtionalities on serverless framework. 

Notes:
1) Initialize ReactJS project.
2) npm run build for production deploy
3) Deploy React JS on Firebase hosting with firebase init (need to login). 
link: https://clone-6c27d.web.app/
4) Deploy backend on Cloud Functions.

Bugs:
1) Remove from basket animation.
2) Responsive design.

=======================================================
Client:
1) ReactJS (Frontend library)
-Context API
-Forward ref

-npx create-react-app myAppName
-npm run build
-firebase deploy --only hosting

2) Material UI (Icons for the app)
npm install @material-ui/core (dependencies)
npm install @material-ui/icons (svg icons)

3) React-flip-move

4) React-currency-format

5) React-router-dom

Backend:
1) Cloud Functions (need Blaze account)
-Serverless framework
-Processing stripe payment
-Express server with CORS
-firebase deploy --only functions

Server Hosting:
1) Firebase (configure in firebase.js)
npm install firebase
firebase init (public folder name "build")
firebase deploy

Database:
1) Cloud Firestore (configure in firebase.js)
-Store user checkouts data

Others (api, libary, framework, etc):
1) Stripe
-Payment processing for credit card & debit card
-npm i @stripe/stripe-js
-npm i @stripe/react-stripe-js

2) Firebase Authentication
-User authentication with email account

3) Axios
-REST API
-npm install axios

4) Moment
-Format data and time
-npm install moment