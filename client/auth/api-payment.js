const repay = async (token, data) => {
    try {
      let response = await fetch('/repayment', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'auth-token': token
        },
        body: JSON.stringify(data)
      });
      return await response.json();
    } catch(err) {
      console.log(err);
    }
};

const lend = async (token, data) => {
    try {
      let response = await fetch('/newLending', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'auth-token': token
        },
        body: JSON.stringify(data)
      });
      return await response.json();
    } catch(err) {
      console.log(err);
    }
};

export { repay, lend };