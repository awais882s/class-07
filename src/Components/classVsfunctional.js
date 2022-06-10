// class components
import React, { Component } from 'react'
import { useState } from 'react';

export default class Students extends Component {
    render() {
        return (
            <div>
                List of Students
            </div>
        )
    }
}

export function StudentsFunction() {
    const [name, setName] = useState("AWAIS S")
    const customers = ["awais s", "waqar", "hamza"];
    const onChangeHandler = (e) => {
        setName(e.target.value);
    }

    return (
        <div>
            List of Students
            <p>Name:{name}</p>
            <input type="text" placeholder='Student Name:' onChange={onChangeHandler} />
            {
                customers.map((customerName) => {
                    return (
                        <p>{customerName}</p>
                    )
                })
            }
        </div>
    )

}