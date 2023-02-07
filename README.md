# MessagingApp
React Native Messaging App with Axios library for http requests(login, logout, get, post, delete)


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
      <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
This is a Messaging App that allows users to send and receive messages

Functionalities Built:
* Login screen:
  Authenticated User should be able to save authentication token to skip login after initial login
* Inbox:
  List of messages received
  Ability to delete an individual message
* Sent:
  List of messages sent
  Ability to delete an individual message
* Compose:
  Includes recipient, title, and body 
* Error messages:
  Should show an error if any of the requests are invalid
  
 <img width="50%" height="30%" alt="App1" src="https://user-images.githubusercontent.com/78620905/217341968-a8417303-53ed-48be-88ab-16c44903100f.png">
 <img width="50%" height="30%" alt="App2" src="https://user-images.githubusercontent.com/78620905/217344537-fa61a02c-922d-49b5-94fe-1572ef7aa129.png"> 
 <img width="50%" height="30%" alt="App3" src="https://user-images.githubusercontent.com/78620905/217346511-8e88c40b-cd10-4c6b-87d5-390e470bb52f.png">


### Built With
* Expo
* [React Native](https://reactnative.dev/docs/getting-started)
* [React Native Navigation] (https://wix.github.io/react-native-navigation/docs/before-you-start/)
* [React Context](https://reactjs.org/docs/context.html)
* [AsyncStorage](https://react-native-async-storage.github.io/async-storage/docs/install/)
  ```sh
  npm install @react-native-async-storage/async-storage
  ```
* [Axios](https://axios-http.com/docs/intro)
  ```sh
  npm install axios
  ```
<!-- GETTING STARTED -->
## Getting Started

<!-- PREREQUISITES -->
### Prerequisites


* npm
  ```sh
  npm install npm@latest -g
  ```
<!-- INSTALLATION -->
### Installation

Steps to install, set up and run the app.

2. Clone the repo
   ```sh
   git clone https://github.com/Aman-codde/MessagingApp.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Install expo cli
   ```sh
   npm install -g expo-cli
   ```
5. Run the project by npm or expo
   ```sh
   npm start  or npx expo start
   ```
<!-- PROJECT STRUCTURE -->
## Project Structure

    /app                    - React native specific code
        /components         - reusable react native components
          /Auth             - react native login form component
          /MessageForm      - react native message form component
          /MessagesOutput   - react native display messages component
          /UI               - react native reusable Button, Error, Loading component
        /screens            - connected to store components
        /store              - all context actions,reducers
        /util               - backend api requests(authentication, get, post, delete)
        /App.js             - App Root component  
    /assets                 - contains image and fonts
   
