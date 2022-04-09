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
config.autoAddCss = false

export default function MyApp({ Component, pageProps }) {
  return (
      // if authenticated
      <Layout>
          {/* if auth is done, use this layout */}
          <div className={`leftPanel`}>
              <SideNav/>
          </div>
          <div className={`rightPanel`}>
              <TopNav/>
              <div className={`rightPanelBody`}>
                  <Component {...pageProps} />
              </div>
          </div>
      </Layout>

      // if not authenticated
      // <Layout>
      //     <Row>
      //         {/*<TopNav showLogo={true} />*/}
      //         <LoginForm/>
      //     </Row>
      // </Layout>
  )
}

// export default MyApp
