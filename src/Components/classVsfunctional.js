// class components
import React, { Component, useState } from 'react'

export default class Students extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stuName: "AWAIS S",
            students: ["AWAIS S", "PRINCE", "SHAHZADA"]
        }
    }
    onChangeHandler = (e) => {
        this.setState({ stuName: e.target.value })
    }
    render() {
        return (
            <div>
                List of Students
                <p>Student Name:{this.state.stuName}</p>
                <input type="text" placeholder='Student Name:' onChange={this.onChangeHandler} />
                {
                    this.state.students.map((studentName) => {
                        return (
                            <p>{studentName}</p>
                        )
                    })
                }
            </div>
        )
    }
}
// functional components
export function StudentsFunction() {
    const [stuname, setName] = useState("AWAIS S")
    const [students, setStudents] = useState(["awais s", "waqar", "hamza"]);
    const onChangeHandler = (e) => {
        setName(e.target.value);
    }

    return (
        <div>
            List of Students
            <p>Student Name:{stuname}</p>
            <input type="text" placeholder='Student Name:' onChange={onChangeHandler} />
            {
                students.map((customerName) => {
                    return (
                        <p>{customerName}</p>
                    )
                })
            }
        </div>
    )

}