const api = async (url, method, object ) => {
    
    let result;

    const options = {
		method: method,
		headers: {
            "Content-type": "application/json"
        },
		body: JSON.stringify(object)
	}
    
    await fetch(url, options)
            .then(response => response.json())
                .then(data => result = data);
            
    return result;
}

export default api;