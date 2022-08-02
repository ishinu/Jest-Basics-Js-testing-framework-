const axios = require('axios');
const functions = {
    add : (num1,num2) => num1 + num2,
    checkIfNull: () => null,
    checkIfUndefined: () => undefined,
    checkValue: x => x,
    createUser: () => {
        const user = { firstName: 'Brae' }
        user['lastName'] = 'Naaaeif';
        return user;
    },
    fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.data)
    .catch(err => 'error')
};

module.exports = functions;
