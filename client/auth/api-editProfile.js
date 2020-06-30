const editProfile = async (user) => {
    try {
      let response = await fetch('http://localhost:3000/user/editProfie', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'auth-token':user.token   // If we add user token then only it will work as it is a private route.
        },
        credentials: 'include',
        body: JSON.stringify(user)    // Pass things we want to update
      });
      return await response.json();   // response is 'profile updated' 
    } catch(err) {
      console.log(err);
    }
  };
  
export {
      editProfile
};