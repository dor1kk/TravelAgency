import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Layout ,Menu, Typography, Button, Avatar, Space, Card, Row, Col, Input, Rate, Carousel} from 'antd';
import { StarOutlined } from '@ant-design/icons';


const NavigationBar = () => {


  const { Header } = Layout;

  return (

    <Header className='bg-white' style={{ background: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
    <div className="logo" />
    <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px', borderBottom: 'none' }}>
      <Menu.Item key="1">Home</Menu.Item>
      <Menu.Item key="2">
        <Link to="/tickets">Tickets</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/destinations">Destinations</Link>
      </Menu.Item>
      <Menu.Item key="4">About us</Menu.Item>
      <Menu.Item key="5">Blog</Menu.Item>
      <Menu.Item key="6">Log in</Menu.Item>
      <Menu.Item key="7">
        <Avatar style={{ backgroundColor: 'grey' }} icon={<StarOutlined />} />
      </Menu.Item>
    </Menu>
  </Header>
  );
};

export default NavigationBar;