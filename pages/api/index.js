import axios from "axios";
import cookie from 'react-cookies'

const BASE_URL = 'http://localhost:8000/api/';

export const ENDPOINTS = {
    PROJECTS: 'projects',
    INTERNALUSRES: 'users/internals',
    ISSUES: 'issues',
    ISSUETYPES: 'issues/types',
    ISSUESTATUS: 'issues/statuses',
    ISSUESTATUS_UPDATE: 'issues/status/update',
    COMMENTS: 'issues/comments',
    LOGIN: 'auth/login',
    SIGNUP: 'auth/signup',
    INVOICES: 'invoices',
    REPORTS_ISSUETYPES: 'reports/issueTypes',
    REPORTS_ISSUESTATUSES: 'reports/issueStatuses',
    REPORTS_ISSUEPRIORITIES: 'reports/issuePriorities',
    REPORTS_MONTHLYINCOME: 'reports/monthlyIncome',
    ORGANIZATIONS: 'organizations',
}

export const createAPIEndpoint = endpoint => {

    let token = cookie.load('user');

    let url = BASE_URL + endpoint ;
    return {
        fetchAll: () => axios.get(url, {
            headers: {
                token : token
            }
        }),
        fetchById: (idName, idVal) => axios.get(url, {
            params: {
                [idName] : idVal
            },headers: {
                token : token
            }
        }),
        create: newRecord => axios.post(url, newRecord, {
            headers: {
                token : token
            }
        }),
        login: user => axios.post(url, user),
        update: newRecord => axios.put(url, newRecord, {
            headers: {
                token : token
            }
        }),
        // update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
        // delete: id => axios.delete(url + id)
    }
}
