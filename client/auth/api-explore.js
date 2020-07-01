const explore = async (token, signal) => {
    try {   
        let response = await fetch('/dashboard1/exploreCampaigns', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'auth-token': token
            },
            credentials: 'include'
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

export {
    explore
};