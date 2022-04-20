import React from 'react'
import Styles from '../styles/SideNav.module.css'
import {Col, Container, Row} from "reactstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBug,
    faChartPie,
    faProjectDiagram,
    faReceipt,
    faTachometerAlt,
    faTools
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import {getUserType} from "../helpers/tokenHelper";
import {faBuilding} from "@fortawesome/free-regular-svg-icons";

const SideNav = () => {
    let userType = getUserType()
    console.log('USER TYPE: ' + userType)
    return (
        <div className={`${Styles.navBar} secondary-bg`}>
            <div className={Styles.logoWrapper}>Issue Tracker</div>
            {/*<div className={`${Styles.menuItem} ${Styles.menuItemActive}`}>*/}
            {/*    <Link href="/dashboard">*/}
            {/*        <a>*/}
            {/*            <FontAwesomeIcon icon={faTachometerAlt} />*/}
            {/*            Dashboard*/}
            {/*        </a>*/}
            {/*    </Link>*/}
            {/*</div>*/}
            {
                userType === 'INTERNAL' &&
                <div className={`${Styles.menuItem}`}>
                    <Link href="/organizations">
                        <a>
                            <FontAwesomeIcon icon={faBuilding}/>
                            Organizations
                        </a>
                    </Link>
                </div>
            }
            <div className={`${Styles.menuItem}`}>
                <Link href="/projects">
                    <a>
                        <FontAwesomeIcon icon={faProjectDiagram} />
                        Projects
                    </a>
                </Link>
            </div>
            <div className={`${Styles.menuItem}`}>
                <Link href="/issues">
                    <a>
                        <FontAwesomeIcon icon={faBug} />
                        Issues
                    </a>
                </Link>
            </div>

            {
                userType === 'INTERNAL' &&
                    <div className={`${Styles.menuItem}`}>
                        <Link href="/reports">
                            <a>
                                <FontAwesomeIcon icon={faChartPie} />
                                Reports
                            </a>
                        </Link>
                    </div>
            }

            <div className={`${Styles.menuItem}`}>
                <Link href="/invoices">
                    <a>
                        <FontAwesomeIcon icon={faReceipt} />
                        Invoices
                    </a>
                </Link>
            </div>

            {/*<div className={`${Styles.menuItem}`}>*/}
            {/*    <FontAwesomeIcon icon={faTools} />*/}
            {/*    Settings*/}
            {/*</div>*/}
        </div>
    )
}

export default SideNav
