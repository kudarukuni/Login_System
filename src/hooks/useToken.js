import { useState } from 'react';

export default function useToken() {
const getToken = () => {
    const tokenString = localStorage.getItem('myProjectToken');
    console.log("_________");

    const userToken = JSON.parse(tokenString);
    console.log(userToken?.token);
    return userToken?.token;
    };
    const [token, setToken] = useState(getToken());


const saveToken = userToken => {
    localStorage.setItem('myProjectToken', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token
  }

}
