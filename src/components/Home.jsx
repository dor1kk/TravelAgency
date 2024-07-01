import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Typography, Button, Avatar, Space, Card, Row, Col, Input, Rate, Carousel } from 'antd';
import Footer from './Footer';
import NavigationBar from './Navbar';

const { Header, Content } = Layout;
const { Search } = Input;

const destinations = [
  { img: 'https://media.istockphoto.com/id/629387256/photo/san-miguel-de-allende-mexico.jpg?s=612x612&w=0&k=20&c=5OBSaHGBU8P9B3Pml0dyua_a4WFLF_icfgl0Ji-ZxuQ=', country: 'Mexico', city: 'San Miguel', text: 'Fusce hic augue velit wisi ips quibusdam pariatur, iusto.' },
  { img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyaiUyMGtoYWxpZmF8ZW58MHx8MHx8fDA%3D', country: 'UAE', city: 'Dubai', text: 'Fusce hic augue velit wisi ips quibusdam pariatur, iusto.' },
  { img: 'https://wallpapers.com/images/hd/paris-desktop-wallpaper-4kqxu18q2hmcvf9m.jpg', country: 'France', city: 'Paris', text: 'Come visit the historical city of romance, located in the country of France' },
];

const carouselImages = [
  'https://c4.wallpaperflare.com/wallpaper/537/664/855/nature-water-mountains-trees-wallpaper-preview.jpg',
  'https://wallpapershome.com/images/pages/pic_h/6487.jpg',
  'https://a-static.besthdwallpaper.com/small-boat-on-the-sea-surrounded-by-trees-and-islands-waking-up-to-summer-on-the-beach-wallpaper-1440x900-98570_4.jpg',
];

const reviews = [
  { name: 'Maria Korsgaard', date: '15/03/2023', rating: 5, text: 'The host was waiting for us and was very polite and helpful. Apartments are amazing!', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
  { name: 'Maren Calzoni', date: '12/03/2023', rating: 5, text: 'The places is super clean, everything is new and the beds are super comfortable! 10/10', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
  { name: 'Davis Dokidis', date: '08/03/2023', rating: 5, text: 'Nice apartments, friendly host and a quiet environment. ', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
];

export default function Home() {
  const [filteredDestinations, setFilteredDestinations] = React.useState(destinations);

  const handleSearch = (value) => {
    const filtered = destinations.filter(destination =>
      destination.city.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredDestinations(filtered);
  };

  React.useEffect(() => {
    // Reset body margin to ensure full-width content
    document.body.style.margin = '0';
  }, []);

  return (
    <Layout className="layout bg-white">
        <NavigationBar />
     
      <Content>
        <div className="site-layout-content" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://papers.co/wallpaper/papers.co-mx87-turkey-balloon-travel-mountain-29-wallpaper.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
          padding: '100px 0',
          textAlign: 'center',
          height:'90vh'
        }}>
          <Typography.Title level={1} className='text-white' style={{color:"white", fontSize:"55px" }}>Destination Discoveries</Typography.Title>
          <Typography.Title level={2} className='text-white' style={{color:"white"}}>We only live once, so travel.</Typography.Title>
          <Typography.Paragraph className='text-light' style={{color:"lightgray"}}>The one-day process to travel, guaranteed</Typography.Paragraph>
          <Space size="middle">
            <Button className="btn btn-light" style={{ marginRight: '10px' }}>Learn More</Button>
            <Button className="btn btn-light">Book Now</Button>
          </Space>
        </div>

        <div className="site-layout-content" style={{ padding: '50px 50px 0' }}>
          <Search placeholder="Search destinations" onSearch={handleSearch} style={{ width: 300, marginBottom: 20 }} />
          <Row gutter={[16, 16]}>
            {filteredDestinations.map((destination, index) => (
              <Col span={8} key={index}>
                <Card
                  cover={<img alt={destination.city} src={destination.img} style={{ height: 200, objectFit: 'cover' }} />}
                  hoverable
                >
                  <Card.Meta
                    title={destination.city}
                    description={destination.country}
                  />
                  <Typography.Paragraph>{destination.text}</Typography.Paragraph>
                  <Rate allowHalf defaultValue={4.5} />
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <div className="site-layout-content mt-5" style={{marginTop:"55px"}}>
          <Carousel autoplay dots={true} style={{ marginTop: '20px' }}>
            {carouselImages.map((image, index) => (
              <div key={index} >
                <img src={image} alt={`destination-${index}`} style={{ width: '100%', height: '500px', borderRadius: '8px' }} />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="site-layout-content" style={{ padding: '50px 50px 0' }}>
          <div className='d-flex flex-row justify-content-between'>
            <Typography.Title level={2}>Customer Reviews</Typography.Title>
            <Button className='btn btn-primary justify-content-center align-items-center'>Add a review</Button>
          </div>
          <Carousel style={{ gap: "15px" }} autoplay slidesToShow={3} slidesToScroll={1}>
            {reviews.map((review, index) => (
              <Card key={index} style={{ width: 300, margin: 16, height: "200px" }}>
                <Card.Meta
                  avatar={<Avatar src={review.avatar} />}
                  title={review.name}
                  description={review.date}
                />
                <Rate disabled defaultValue={review.rating} style={{ marginBottom: 10 }} />
                <Typography.Paragraph>{review.text}</Typography.Paragraph>
              </Card>
            ))}
          </Carousel>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
}
