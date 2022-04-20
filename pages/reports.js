import React, {useEffect, useState} from 'react'
import Styles from '../styles/Reports.module.css'
import {Col, Row} from "reactstrap";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {createAPIEndpoint, ENDPOINTS} from "./api";

const Reports = () => {

    const [issueTypes, setIssueTypes] = useState([]);
    const [issueStatuses, setIssueStatuses] = useState([]);
    const [issuePriorities, setIssuePriorities] = useState([]);
    const [monthlyIncome, setMonthlyIncome] = useState([]);

    useEffect(() => {
        createAPIEndpoint(ENDPOINTS.REPORTS_ISSUETYPES).fetchAll()
            .then(res => {
                setIssueTypes(res.data)
            })
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        createAPIEndpoint(ENDPOINTS.REPORTS_ISSUESTATUSES).fetchAll()
            .then(res => {
                setIssueStatuses(res.data)
            })
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        createAPIEndpoint(ENDPOINTS.REPORTS_ISSUEPRIORITIES).fetchAll()
            .then(res => {
                setIssuePriorities(res.data)
            })
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        createAPIEndpoint(ENDPOINTS.REPORTS_MONTHLYINCOME).fetchAll()
            .then(res => {
                setMonthlyIncome(res.data)
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <Row className={`pageHeader`}>
                <Col sm={4}>
                    <div className={`my_h1 pageHeaderTitle`}>Reports</div>
                </Col>
                <Col>
                    <div className={`pageHeaderControls`}>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                    <div className={`myCard p20`}>
                        <div className={`my_h2`}>Issue Types Report</div><br/>
                            <BarChart
                                width={700}
                                height={400}
                                data={issueTypes}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="TYPE" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="COUNT" fill="#8884d8" />
                                {/*<Bar dataKey="uv" fill="#82ca9d" />*/}
                            </BarChart>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className={`myCard p20`}>
                        <div className={`my_h2`}>Issue Statuses Report</div><br/>
                        <BarChart
                            width={700}
                            height={400}
                            data={issueStatuses}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="STATUS" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="COUNT" fill="#8884d8" />
                            {/*<Bar dataKey="uv" fill="#82ca9d" />*/}
                        </BarChart>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                    <div className={`myCard p20`}>
                        <div className={`my_h2`}>Issue Priorities Report</div><br/>
                        <BarChart
                            width={700}
                            height={400}
                            data={issuePriorities}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="PRIORITY" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="COUNT" fill="#8884d8" />
                            {/*<Bar dataKey="uv" fill="#82ca9d" />*/}
                        </BarChart>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className={`myCard`}>
                        <div className={`myCard p20`}>
                            <div className={`my_h2`}>Monthly Income Report</div><br/>
                            <BarChart
                                width={700}
                                height={400}
                                data={monthlyIncome}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="MONTH" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="INCOME" fill="#8884d8" />
                                {/*<Bar dataKey="uv" fill="#82ca9d" />*/}
                            </BarChart>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Reports
