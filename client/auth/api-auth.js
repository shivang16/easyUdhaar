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
      return await response.json();
    } catch(err) {
      console.log(err);
    }
};

// var options = { 
//   method: 'POST', 
//   uri: 'http://localhost:3000/user/login', 
//   body: JSON.stringify(user), 
//   json: true // Automatically stringifies the body to JSON 
//   }; 
   
//   rp(signin) 
//   .then(function (parsedBody) { 
//   // POST succeeded... 
//     console.log(parsedBody);
//   }) 
//   .catch(function (err) { 
//   // POST failed... 
//   console.log(err);
//   });
  
  // const signout = async () => {
  //   try {
  //     let response = await fetch('/auth/signout/', { method: 'GET' });
  //     return await response.json();
  //   } catch(err) {
  //     console.log(err);
  //   }
  // }
  
  export {
    signin
    // signout
  };