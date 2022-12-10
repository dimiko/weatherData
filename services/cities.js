import axios from 'axios'

export const getCities = (name) => {
    return axios ({
        method: 'GET',
        url: `https://api.api-ninjas.com/v1/city?name=${name}`,
        headers: { 'X-Api-Key': 'inuD4ZljIGizP9M7HtrSZw==ochXgpw79Ktcd02s'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    })
}





