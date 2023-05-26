import React from "react";
import LeftMenu from "../leftMenu/LeftMenu";
import Main from "../main/Main";
import { Col, Row } from 'antd';

const Home = () => {
  return (
    <div className="home">
      <Row>
        <Col className="leftMenu" span={6} >
        <LeftMenu/>  
        </Col>
        <Col  span={18} >
        <Main />  
        </Col>
      </Row>
    </div>
  );
};

export default Home;
