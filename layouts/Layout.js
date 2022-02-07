import React from 'react'
import Styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
    return (
        <div className={Styles.layout}>
            {children}
        </div>
    )
}

export default Layout
