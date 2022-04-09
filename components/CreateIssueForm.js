import React from 'react'
import {Form, FormGroup, Input, Label} from "reactstrap";

export const CreateIssueForm = () => {
    return (
        <div className={`myCard p25`}>
            <div  className={`my_h1`}>Create an Issue</div>
            <Form>
                <FormGroup>
                    <Label>Title</Label>
                    <Input
                        id="title"
                        name="title"
                        placeholder="Issue Title"
                        type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Description</Label>
                    <Input
                        id="description"
                        name="description"
                        placeholder="Description"
                        type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="type">
                        Type
                    </Label>
                    <Input
                        id="type"
                        name="typeId"
                        type="select"
                    >
                        <option>Bug</option>
                        <option>New Feature Requirement</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="project">
                        Type
                    </Label>
                    <Input
                        id="project"
                        name="projectId"
                        type="select"
                    >
                        <option>Project 1</option>
                        <option>Project 2</option>
                        <option>Project 3</option>
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
