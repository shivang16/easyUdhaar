const business = async (token, formData) => {
    try {
      let response = await fetch('/newCampaign/business', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'auth-token': token   // If we add user token then only it will work as it is a private route.
          // no body needed
        },
        credentials: 'include',
        body: JSON.stringify(formData)
      });
      return await response.json();
    } catch(err) {
        console.log("I am ironman");
      console.log(err);
    }
  };
  
export {
    business
};