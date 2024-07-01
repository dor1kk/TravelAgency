import React, { useState } from 'react';
import { Layout, Menu, Typography, Breadcrumb, Card, Row, Col, Input, Select, Button, Modal } from 'antd';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const { Header, Content } = Layout;
const { Search } = Input;
const { Option } = Select;

const destinations = [
  { id: 1, img: 'https://media.istockphoto.com/id/629387256/photo/san-miguel-de-allende-mexico.jpg?s=612x612&w=0&k=20&c=5OBSaHGBU8P9B3Pml0dyua_a4WFLF_icfgl0Ji-ZxuQ=', country: 'Mexico', city: 'San Miguel', text: 'Fusce hic augue velit wisi ips quibusdam pariatur, iusto.' },
  { id: 2, img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyaiUyMGtoYWxpZmF8ZW58MHx8MHx8fDA%3D', country: 'UAE', city: 'Dubai', text: 'Fusce hic augue velit wisi ips quibusdam pariatur, iusto.' },
  { id: 3, img: 'https://wallpapers.com/images/hd/paris-desktop-wallpaper-4kqxu18q2hmcvf9m.jpg', country: 'France', city: 'Paris', text: 'Come visit the historical city of romance, located in the country of France' },
  { id: 4, img: 'https://www.onenationtravel.com/wp-content/uploads/2015/11/Istanbul1.jpg.webp', country: 'Turkey', city: 'Istanbul', text: 'Fusce hic augue velit wisi ips quibusdam pariatur, iusto.' },
  { id: 5, img: 'https://www.tripsavvy.com/thmb/XUvkLs7XIVZ67uD33KAO17pxCCo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/IMG_9525-76f0050cea1043e59b156f0ba8d4ac1f.jpg', country: 'Austria', city: 'Wienna', text: 'Fusce hic augue velit wisi ips quibusdam pariatur, iusto.' },
  { id: 6, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/M%C3%BCnchen_Panorama.JPG/2560px-M%C3%BCnchen_Panorama.JPG', country:"Germany", city: 'Munich', text: 'Come visit the historical city of romance, located in the country of France' },
];

const Destinations = () => {
  const [filteredDestinations, setFilteredDestinations] = useState(destinations);
  const [searchText, setSearchText] = useState('');
  const [filterCountry, setFilterCountry] = useState('');
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility
  const [selectedDestination, setSelectedDestination] = useState(null); // State for selected destination

  const handleSearch = (value) => {
    setSearchText(value.toLowerCase());
    filterDestinations(value.toLowerCase(), filterCountry);
  };

  const handleCountryFilter = (value) => {
    setFilterCountry(value);
    filterDestinations(searchText, value);
  };

  const filterDestinations = (search, country) => {
    let filtered = destinations.filter(destination =>
      destination.city.toLowerCase().includes(search) &&
      (country ? destination.country === country : true)
    );
    setFilteredDestinations(filtered);
  };

  const openModal = (destination) => {
    setSelectedDestination(destination);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleBookTrip = () => {
    // Implement logic to book trip
    closeModal(); // Close modal after booking (placeholder logic)
  };

  return (
    <Layout className="layout">
      <Header style={{ background: "white" }}>
        <div className="logo" />
        <Menu theme="white" mode="horizontal" defaultSelectedKeys={['3']}>
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
          <Breadcrumb.Item>Destinations</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content" style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          <Typography.Title level={2}>Destinations</Typography.Title>
          <div style={{ marginBottom: 16 }}>
            <Search placeholder="Search destinations" onSearch={handleSearch} style={{ width: 300, marginRight: 8 }} />
            <Select placeholder="Filter by country" style={{ width: 200 }} onChange={handleCountryFilter}>
              <Option value="">All Countries</Option>
              <Option value="Mexico">Mexico</Option>
              <Option value="UAE">UAE</Option>
              <Option value="France">France</Option>
            </Select>
          </div>
          <Row gutter={[16, 16]}>
            {filteredDestinations.map(destination => (
              <Col span={8} key={destination.id}>
                <Card
                  hoverable
                  cover={<img alt={destination.city} src={destination.img} style={{ height: 200, objectFit: 'cover' }} />}
                  style={{ marginBottom: 16, height: '100%' }}
                  actions={[
                    <Button onClick={() => openModal(destination)}>Book a Trip</Button>
                  ]}
                >
                  <Card.Meta
                    title={destination.city}
                    description={destination.country}
                  />
                  <Typography.Paragraph ellipsis={{ rows: 2 }}>{destination.text}</Typography.Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Content>
      <Modal
        title={`Book a Trip to ${selectedDestination?.city}`}
        visible={modalVisible}
        onOk={handleBookTrip}
        onCancel={closeModal}
        okText="Book Trip"
        cancelText="Cancel"
      >
        <p>Here you can add your booking details or form for {selectedDestination?.city}.</p>
      </Modal>
      <Footer />
    </Layout>
  );
};

export default Destinations;
