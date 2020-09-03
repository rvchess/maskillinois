import React, {Component} from "react"
import "style.css"
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Home from "components/hero/TwoColumnWithInput.js"
import Features from "components/features/ThreeColSimple.js"
import Header from "components/headers/light.js"

// import FAQ from "components/faqs/SimpleWithSideImage.js"
// import FAQ from "components/faqs/SingleCol.js"
import FAQ from "components/faqs/TwoColumnPrimaryBackground.js"

import AboutUs from "components/cards/ProfileThreeColGrid.js"
import UserProfiles from "components/user_profile/user_profile.js"
import Info from "./components/cards/PortfolioTwoCardsWithImage.js"
import Resources from "./components/features/DashedBorderSixFeatures.js"

import Footer from "components/footers/MiniCenteredFooter.js"
//import Footer from "components/footers/SimpleFiveColumn.js"

import Login from 'components/authentication/LoginPage.js'
import Register from 'components/authentication/Register.js'
import GetCode from 'components/authentication/GetCode.js'
import EnterCode from 'components/authentication/EnterCode.js'
import NewPassword from 'components/authentication/NewPassword.js'
import Edit from 'components/authentication/Edit.js'

import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <AnimationRevealPage disabled>
        <Header />
        {/* <Home /> */}
        {/* <Features /> */}
        {/* <FAQ /> */}
        {/* <AboutUs /> */}
        <Router>  
            <Route exact path = "/" component = {Home} />
            <Route exact path = "/" component = {AboutUs} />
            <Route exact path = "/faq" component = {FAQ} />
            <Route exact path = "/register" component = {Register} />
            <Route exact path = "/login" component = {Login} />
            <Route exact path = "/edit" component = {Edit} />
            <Route exact path = "/getcode" component = {GetCode} />
            <Route exact path = '/entercode' component = {EnterCode} />
            <Route exact path = "/newpassword" component = {NewPassword} />
            <Route exact path = "/info" component = {Info} />
            <Route exact path = "/resources" component = {Resources} />
            <Route exact path = "/user_profile" component = {UserProfiles} />
        </Router>
        <Footer />
      </AnimationRevealPage>
    );
  }
}

export default App;