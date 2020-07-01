const explore = async (token) => {
    try {   
        let response = await fetch('/dashboard1/exploreCampaigns', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'auth-token': token
            }
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

export {
    explore
};