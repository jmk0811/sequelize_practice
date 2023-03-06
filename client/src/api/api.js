const defaultHeaders = {
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    },
}

export const getDataAPIMethod = () => {
    return fetch(`/hosts`, {
        ...defaultHeaders,
    }).then(checkStatus)
        .then(parseJSON);
}

export const postDataAPIMethod = (id, data) => {
    return fetch(`/hosts/${id}`, {
        ...defaultHeaders,
        method: 'POST',
        body: JSON.stringify(data),
    }).then(checkStatus)
        .then(parseJSON);
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        const error = new Error(`${response.statusText}`);
        error.status = response.statusText;
        error.response = response;
        throw error;
    }
}

function parseJSON(response) {
    return response.json();
}