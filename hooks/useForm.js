import React, { useState } from 'react';
import moment from 'moment';

export function useForm(getFreshModelObject) {

    const [values, setValues] = useState(getFreshModelObject());
    const [errors, setErrors] = useState({});

    function epoch (date) {
        return Date.parse(date)
    }

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleDateChange = e => {
        const { name, value} = e.target

        const time = moment(value).format('DD MMMM YYYY, h:mm:ss');
        const timestamp = epoch(time)/1000;
        
        setValues({
            ...values,
            [name]: timestamp
        })
    }

    const resetFormControls = () => {
        setValues(getFreshModelObject());
        setErrors({})
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        handleDateChange,
        resetFormControls
    }
}