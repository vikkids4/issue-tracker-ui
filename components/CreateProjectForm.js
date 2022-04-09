import React from 'react'
import {Form, FormGroup, Input, Label} from "reactstrap";

export const CreateProjectForm = () => {
    return (
        <div className={`myCard p25`}>
            <div  className={`my_h1`}>Create a project</div>
            <Form>
                <FormGroup>
                    <Label>Title</Label>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Project Name"
                        type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="org">
                        Organization
                    </Label>
                    <Input
                        id="org"
                        name="orgId"
                        type="select"
                    >
                        <option>Google</option>
                        <option>Amazon</option>
                        <option>Tesla</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="startDate">
                        Start Date
                    </Label>
                    <Input
                        id="startDate"
                        name="startDate"
                        placeholder="Start Date"
                        type="date"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="endDate">
                        End Date
                    </Label>
                    <Input
                        id="endDate"
                        name="endDate"
                        placeholder="End Date"
                        type="date"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="assignee">
                        Assigned to
                    </Label>
                    <Input
                        id="assignee"
                        name="assigneeId"
                        type="select"
                    >
                        <option>John Doe</option>
                    </Input>
                </FormGroup>
            </Form>
            <div className={`pageHeaderControls`}>
                <button
                    className={`myBtn`}
                    onClick={function noRefCheck(){}}
                >
                    Create
                </button>
            </div>
        </div>
    )
}
