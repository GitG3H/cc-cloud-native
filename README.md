## Innova Cloud Application

### Technology Used -

#### React JS - Frontend

#### Firebase Authentication, Firestore database, Firebase hosting.

Motivation / Purpose:
This is a cross-platform cloud-native dynamic web application, deployed on Google Firebase and accessible via Play Store. Technologies include React JS, Firebase authentication, Firebase hosting, Firebase storage.
This application can be used by teams to collaborate and share information. It features the use of a chat engine, which synchronizes messages from multiple users in real time. Users can message using text, emojis, GIFs, etc. It acts as a shared workspace where discussions and digital content can be shared. The application also sends broadcast notifications to users, when the content needs to be shared across large groups of participants. The real time database is used as a web socket to transfer real time data effectively among users.
The technology stack includes – Firebase authentication, firebase storage, firebase hosting, React JS, Next JS. This application isolates the work among individuals by creating a room for their content and information. Application is developed in React JS, Next JS, firebase authentication and storage are built from Google’s firebase, and the complete application would be deployed using Firebase hosting. Data visualization is also achieved using firebase google analytics and fire store which is a real time database
Technologies Used:
Cloud Technologies: Google Firebase
Firebase is used as a cloud service for real time cloud database, hosting, google authentication and Google analytics for data visualization.
Technologies: React JS is used for frontend development in which the entire UI application part is developed. The NextJS framework of React is used for server side rendering and data operations.

Step1: Login Page with Google Authentication:

Step2: Homepage with chat rooms:

Step3: To create a new chat room:


Step4: Multiple users accessing and messaging at the same time:


Step5: Firebase Authentication


Step6: Firebase Realtime Database


Step7: Chat messages schema and real time data




Step8: Added Story Posting functionality
Step9: Homepage after logged in


On clicking Chat Engine we navigate to chat rooms



On selecting Post Stories you would redirect to Post stories page



After posting message and image:


Firebase db collection - post stories

Sample code image:


RESULT:

The Application is deployed on firebase Hosting. 
https://cloud-native-chat.web.app

We are able to chat with multiple users in real time using chat rooms and also post stories in the app. We can also track and access user data in the firestore database.

