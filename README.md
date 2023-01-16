# Facedook
 A facebook clone built using the MERN stack.
 
## Features:
- The majority of facebook's UI has been replicated (including responsiveness);
- Login and register;
- Publish posts (text or image);
- Delete your own posts;
- Like posts;
- Follow other users;
- Edit your user profile (profile picture, biography, etc).


## Technologies and tools used:
- [Node.js](https://nodejs.org/en/about/);
- [Express](https://expressjs.com/);
- [MongoDB](https://www.mongodb.com/);
- [Postman](https://www.postman.com/);
- [React](https://reactjs.org/);
- [TypeScript](https://www.typescriptlang.org/);
- [Tailwind CSS](https://tailwindcss.com/);
- [Axios](https://axios-http.com/);
- [Vite](https://vitejs.dev/);
- [ESLint](https://eslint.org/);
- [Prettier](https://prettier.io/).

### How to run:
```
git clone git@github.com:rodrigommfreitas/facedook.git
```
```
cd facedook/api
```
```
npm install
```
After you have created your database, create a .env file and store your MongoDB connection string in a variable as following:
```
MONGO_URL = mongodb+srv://admin:<password>@<database>.vk6polr.mongodb.net/?retryWrites=true&w=majority
```
Replace \<password\> with your password and \<database\> with your MongoDB database's name.
```
npm start
```
```
cd ../client
```
```
npm install
```
```
npm run dev
```
### Note:
Initially, as your database will be empty, you will need to register users in order to populate the database. This can be done either by registering users manually through the register page or by using a platform like Postman (which will be faster). 
Also, as there is no way to see other users profiles before following them or having a friend that already follows them, the user's profile must be accessed via URL as such: "profile/ExampleUser123". Finally, the enter as guest functionality won't work unless a user is created in the database with the the following credentials: "{ email: 'guest@<span></span>user.com', password: 'guest' }", or with any other credentials of your liking as long as you change the code inside the login page accordingly. These inconveniences could be fixed if the application was actually being hosted with a connection to the database I used while building this, however, I decided not to host this as I wasn't willing to spend more time working on this project. 

### Preview
![page preview](https://raw.githubusercontent.com/rodrigommfreitas/facedook/main/preview.png)
