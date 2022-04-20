import '../styles/globals.css'
import '../styles/colors.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import TopNav from "../components/TopNav";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {Col, Row} from "reactstrap";
import SideNav from "../components/SideNav";
import Layout from "../layouts/Layout";
import LoginForm from "../components/LoginForm";
import cookie from 'react-cookies'
import {useForm} from "../hooks/useForm";
config.autoAddCss = false

export default function MyApp({ Component, pageProps }) {

    const getFreshModelObject = () => ({
        username: "",
        password: ""
    })

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        handleDateChange,
        resetFormControls
    } = useForm(getFreshModelObject)

    let token = cookie.load('user')

    return (
        <Layout>
            {token ? (
                <div style={{height: '100%'}}>
                    <div className={`leftPanel`}>
                        <SideNav/>
                    </div>
                    <div className={`rightPanel`}>
                        <TopNav/>
                        <div className={`rightPanelBody`}>
                            <Component {...pageProps} />
                        </div>
                    </div>
                </div>
            ) : (

                    <Row>
                        <LoginForm
                            {...{values, setValues, errors, setErrors, handleInputChange, handleDateChange, resetFormControls }}
                        />
                    </Row>

            )}
        </Layout>
    )
}
