# login_setter_2.0

Login Setter 2.0 is a updated testing tool to send data (user and password) into a DB made with SQL Server. Also, it stores (name, email and phone number) is the user's not registered. This tool is made with express.js for 
the backend architecture (Documentation [here](https://expressjs.com/)) and W3.CSS for the frontend (Documention [here](https://www.w3schools.com/w3css/)).

This tool is just to set data for Algorift (check repo [here](https://github.com/Its-Yayo/Algorift)). All tests will be deployed too, as well as some versions that'll be released. Also, this tool is an updated version of Login Setter, using SQL Server and async/await syntax to stabish connection with the DB. 

Open Source test project. Feel free to modify it by yourself. 

If you wanna store this repo in your localhost, make sure you type the following commands. 
```
$ git clone https://github.com/Its-Yayo/login_setter_2.0.git
$ cd login_setter
```

To update any changes, make sure you follow the following command.

```
$ git pull
```

You must need these packages to run locally your code. You must start installing express natively, by typing the following command. 

```
$ npm i express -D
```

Node supports mssql natively. You can try it by typing the following command.

```
$ npm i mssql -D
```

Also, this test project requires dotenv to support enviroment variables, as part of the environment in which a process runs a thread. In this case, we're 
requiring them for the user, password and DB's name. You can try it by typing the following command.

```
$ npm i dotenv -D
```

Also, we're using body-parsing to analize each JSON object or any HTTP request/response in the server-side code. It's parsed in a middleware with the ```req.body``` property. You can try it by typing the following command. 

```
$ npm i body-parser -D
```
