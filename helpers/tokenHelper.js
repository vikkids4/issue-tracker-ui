import React from 'react'
import cookie from 'react-cookies'
import utf8 from "base-64";
import base64 from "base-64";

let token
let decodedToken

// token = cookie.load('user')
// if (token != null) {
//     decodedToken = JSON.parse(atob(token))
// }

export const loadToken = () => {
    token = cookie.load('user')
    decodedToken = JSON.parse(atob(token))
}

export const getUserType = () => {
    if (token == null) {
        loadToken()
    }
    console.log(decodedToken.userType)
    console.log(decodedToken)
    return decodedToken['userType']
}

export const getOrgId = () => {
    if (token == null) {
        loadToken()
    }
    return decodedToken['orgId']
}

export const getUname = () => {
    if (token == null) {
        loadToken()
    }
    return decodedToken['username']
}
