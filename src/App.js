import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer';
import NavBar from './components/Nav/Nav';
import Products from './components/Products/Products';
import Recommended from './components/Recommended/Recommended';
import { Col, Container, Row } from 'react-bootstrap';
import Category from './components/SideBar/Category/Category';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
          <Row>
            <Col md={3}>
              <Category />
            </Col>
            <Col md={9}>
              <NavBar />
              <Recommended />
              <Products />
              <Footer />
            </Col>
          </Row>
      </div>
    </BrowserRouter>
  );
}

export default App;
