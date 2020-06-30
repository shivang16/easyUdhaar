// var rp = require('request-promise');

const signin = async (user) => {
    try {
      let response = await fetch('/user/login/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(user)
      });
      console.log(response);
      const signInresponse = await response.json();
      console.log("Hooo");
      console.log(signInresponse);
      return signInresponse;
    } catch(err) {
      console.log(err);
    }
};
  const signout = async () => {
    try {
      let response = await fetch('/auth/signout/', { method: 'GET' });
      return await response.json();
    } catch(err) {
      console.log(err);
    }
  }
  
  export {
    signin,
    signout
  };