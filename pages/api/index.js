import axios from "axios";

const BASE_URL = 'http://localhost:8000/api/';

export const ENDPOINTS = {
    PROJECTS: 'projects',
    INTERNALUSRES: 'users/internals',
    ISSUES: 'issues',
    ISSUETYPES: 'issues/types',
    ISSUESTATUS: 'issues/statuses',
    COMMENTS: 'issues/comments',
    LOGIN: 'auth/login'
}

export const createAPIEndpoint = endpoint => {
    
    let token = 'eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoidmlnbmVzaCIsImVtYWlsIjoidmlnbmVzaEBnbWFpbC5jb20iLCJ1c2VyVHlwZSI6IklOVEVSTkFMIiwib3JnSWQiOjB9';

    let url = BASE_URL + endpoint ;
    return {
        fetchAll: () => axios.get(url, {
            headers: {
                token : token
            }
        }),
        fetchById: id => axios.get(url, {
            headers: {
                token : token
            }
        }, {
            params: {
                id: id
            },
        }),
        create: newRecord => axios.post(url, newRecord, {
            headers: {
                token : token
            }
        }),
        login: user => axios.post(url, user) 
        // update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
        // delete: id => axios.delete(url + id)
    }
}