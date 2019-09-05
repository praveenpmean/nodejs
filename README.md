To Install & Run

  npm i // Install the node dependencies
  npm start // Run your project


Backend API :

List of ENV Variabels :- host:port/api/{processName}

  Error:- If process folder doesn't exist in the system it will through you "Process not found" error message with 404 status code

  Success:- Will get JSON format ENVIRONMENT VARIABLES


To update/add ENV Variabels :- host:port/api/{processName}/{Key}/{value}

  Error:- If process folder doesn't exist in the system it will through you "Process not found" error message with 404 status code

  Process:- If the key does not exist in the process it will add a new variable

  Success:- Will get JSON format ENVIRONMENT VARIABLES


For UI Operation:- host: port

  Success:- Will get UI screen with Add, Update & search functionalities built-in angular

Port:- 8002
