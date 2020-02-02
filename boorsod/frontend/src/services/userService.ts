import Axios from 'axios';
const USER_URL = getUrl('users');
const resolveData = (res: { data: any }) => res.data;

// function login(user: any) {
//     console.log('add user in service:', user);
//     return Axios.create({ withCredentials: true })
//         .post(USER_URL, user)
//         .then(resolveData);
// }

function query() {
    return Axios.create({ withCredentials: true })
        .get(USER_URL)
        .then(resolveData);
}

function getUserById(userId: string) {
    return Axios.create({ withCredentials: true })
        .get(`${USER_URL}/${userId}`)
        .then(resolveData);
}

function getUrl(entityName: string) {
    return process.env.NODE_ENV !== 'development' ? `/api/${entityName}` : `//localhost:3000/api/${entityName}`;
}

export default {
    query,
    getUserById,
    // login,
};
