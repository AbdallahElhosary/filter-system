import "./Products.scss";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";
import { Container } from "react-bootstrap";
import {  useSelector } from 'react-redux';
const Products = () => {
  const filteredData = useSelector(state => state.product.filteredData);
  const products = filteredData.map((pro) => {
    return (
      <div className="col-6 col-md-4 col-lg-3" key={Math.random()}>
        <div className="product-card">
        <img src={pro.img} alt="shoes" />
        <div className="text">
          <h5 className="my-2">{pro.title}</h5>
          <div className="rate">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <span>{pro.reviews}</span>
          </div>
          <div className="price d-flex justify-content-between align-items-center">
            <span><del>{pro.prevPrice}</del> {pro.newPrice}</span>
              <BsFillBagFill />
          </div>
          </div>
        </div>

      </div>
    )
  })
  return (
    <div className="products">
      <Container>
        <div className="row g-3">
          {products}
        </div>
      </Container>
    </div>
  )
}


export default Products;