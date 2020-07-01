const dashboard = async (token) => {
    try {
      let response = await fetch('/dashboard1',  {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'auth-token': token   // If we add user token then only it will work as it is a private route.
          // no body needed
        }
      });
      return await response.json();
    } catch(err) {
      console.log(err);
    }
  };
  
export {
    dashboard
};