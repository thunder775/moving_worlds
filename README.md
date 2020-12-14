PROJECT RUN STEPS:
    
    TECH STACK USED
    1. Javascript
    2. Node.js
    3. Express(Backend-API)
    
    Pre-requisites:
    1. Install node and npm
   
    Steps:
    A. TO RUN THE EXPRESS SERVER
    1. Go to the "server" directory of the project in the terminal.
    2. install the required packages using the following command in the terminal:
            npm i 
    3. run the command to start the server:
            npm start
    4. go to the url "http://localhost:3000/" to make the necessary API calls using Postman
        
    Examples
    POST REQUEST
       - http://localhost:3000/?url=rahul@gmail.com&shortCode=32442licjxz => 32442licjxz
       - http://localhost:3000/?url=rahul@gmail.com => some 6 digit code
    
    GET REQUEST
       - http://localhost:3000/?shortCode=32442licjxz => rahul@gmail.com
       - http://localhost:3000/32442licjxz/stats => stats object
