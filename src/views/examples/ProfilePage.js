/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Col,
  Container,
  Row,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function ProfilePage() {
  const [activeTab] = React.useState("1");

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container className="col-md-6">
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/faces/glenda.png")}
              />
            </div>
            <div className="name">
              <h4 className="title">
                Glenda Ann S. Ranoco <br />
              </h4>
              <h6 className="description">Amazon Virtual Assistant</h6>
            </div>
          </div>
          <br/>
          <Row>
            <Col className="ml-auto mr-auto">
              <p
                style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
              >
                Oh, Hi there! I’m Glenda Ranoco. Nice meeting you!
              </p>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col className="ml-auto mr-auto">
              <p>
                <strong>
                  I’m here to save you (an Amazon FBA Business Owner) from all the
                  overflowing and unnecessary tasks that hinders you from scaling up and focusing
                  more on the tasks that really matters to the growth of your business.
                </strong>
              </p>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col className="ml-auto mr-auto">
              <p>
                <strong>
                  I understand that <span style={{ fontWeight: 'bold'}}> being an entrepreneur is 
                  never easy</span>. There are hundreds of thousands of things that you need to 
                  learn and do to succeed. But let’s be honest, it is impossible to do all at once
                  on your own.
                </strong>
              </p>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <p>
                <strong>
                  Are your days getting clogged up with dealing with customers? 
                </strong>
              </p>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <p>
                <strong>
                  Do you update your inventory on your own? 
                </strong>
              </p>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <p>
                <strong>
                  Do you spend lots of time with listing optimization and keyword research by yourself?
                </strong>
              </p>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <p>
                <strong>
                  Well, you know what? <span style={{ fontWeight: 'bold'}}>STOP right there</span>.
                  Wanna know why? 
                </strong>
              </p>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <p>
                <strong>
                  Shhh. Let this be our little secret, but one of the 9 things the top 1% of Amazon
                  sellers do is to <span style={{ fontWeight: 'bold'}}>Optimize and Delegate 
                  Workload</span>. You should be focusing on the result driver and essential tasks,
                  then systematize and delegate the others. 
                </strong>
              </p>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <p>
                <strong>
                  Tada! Here’s where I step in. 
                </strong>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default ProfilePage;
