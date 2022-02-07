import '../styles/globals.css'
import '../styles/colors.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import TopNav from "../Components/TopNav";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {Col, Row} from "reactstrap";
import SideNav from "../Components/SideNav";
import Layout from "../layouts/Layout";
import LoginForm from "../Components/LoginForm";
config.autoAddCss = false

export default function MyApp({ Component, pageProps }) {
  return (
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

      // <Layout>
      //     <Row>
      //         {/*<TopNav showLogo={true} />*/}
      //         <LoginForm/>
      //     </Row>
      // </Layout>
  )
}

// export default MyApp
