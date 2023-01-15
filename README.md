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
### 
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

### Preview
![page preview](https://raw.githubusercontent.com/rodrigommfreitas/facedook/main/preview.png)
