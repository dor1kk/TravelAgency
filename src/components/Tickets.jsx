import React from 'react';
import { Layout, Menu, Typography, Breadcrumb, Table, Tag } from 'antd';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const { Header, Content } = Layout;

const columns = [
  {
    title: 'Ticket Number',
    dataIndex: 'ticketNumber',
    key: 'ticketNumber',
  },
  {
    title: 'Departure',
    dataIndex: 'departure',
    key: 'departure',
  },
  {
    title: 'Destination',
    dataIndex: 'destination',
    key: 'destination',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: status => (
      <Tag color={status === 'Pending' ? 'orange' : status === 'Confirmed' ? 'green' : 'red'} key={status}>
        {status.toUpperCase()}
      </Tag>
    ),
  },
];

const data = [
  {
    key: '1',
    ticketNumber: 'T001',
    departure: 'New York',
    destination: 'Los Angeles',
    date: '2024-07-15',
    status: 'Confirmed',
  },
  {
    key: '2',
    ticketNumber: 'T002',
    departure: 'London',
    destination: 'Paris',
    date: '2024-07-20',
    status: 'Pending',
  },
  {
    key: '3',
    ticketNumber: 'T003',
    departure: 'Tokyo',
    destination: 'Sydney',
    date: '2024-08-01',
    status: 'Cancelled',
  },
  // Add more ticket data as needed
];

const Tickets = () => {
  return (
    <Layout className="layout">
      <Header className='bg-white'>
        <div className="logo" />
        <Menu theme="white" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/tickets">Tickets</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/destinations">Destinations</Link>
          </Menu.Item>
          <Menu.Item key="4">About us</Menu.Item>
          <Menu.Item key="5">Blog</Menu.Item>
          <Menu.Item key="6">Log in</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Tickets</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content" style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          <Typography.Title level={2}>Tickets</Typography.Title>
          <Table columns={columns} dataSource={data} />
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default Tickets;
