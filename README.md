PROJECT REQUIREMENTS
1. Users create accounts.
   ○ Payload to be sent to the backend.
   Endpoint https://dial-a-delivery-test.uc.r.appspot.com/api/agent/create
   Sample body:
   {
   firstname: “John”,
   surname: “Doe”,
   phone: “+263700000000”,
   email: “johndoe@gmail.com”,
   role: “admin”,
   country: “Zimbabwe”,
   password: “12345”,
   password1: “12345”
   }
2. User login.
   ○ Users should provide email and password for authentication.
   Endpoint https://dial-a-delivery-test.uc.r.appspot.com/api/agent/login
3. View dashboard if user is authenticated.
   Tools to be used:
1. React JS
2. Material UI
3. Redux
4. Git for version control
5. Github for remote repository
6. Use jwt decode to decode the token
