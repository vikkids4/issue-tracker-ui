import React, { useState, useEffect } from 'react'
import {Form, FormGroup, Input, Label, Toast, ToastHeader, ToastBody} from "reactstrap";
import moment from 'moment';
import { createAPIEndpoint, ENDPOINTS } from '../pages/api';



export const ErrorMessage = (props) => {
    return (
        <Toast>
            <ToastHeader>
                {props.header}
            </ToastHeader>
            <ToastBody>
                {props.body}
            </ToastBody>
        </Toast>
    )
}
