import { Container, Form } from "react-bootstrap"
import "./Category.scss"
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { selectItem } from "../../../redux/actions/ProductAction";
import { ALL_PRODUCTS, FLATS, SANDALS, SNEAKERS, HEELS, OVER0, OVER50, OVER100, OVER150, BLACK, WHITE, GREEN, RED, BLUE } from "../../../redux/type";
const Category = () => {
  const dispatch = useDispatch();
  const filterData = useSelector(state => state.product.filterData);
  console.log(filterData)
  return (
    <div className="mt-4 mb-4">
      <Container>
        <h4 className="text-center"><AiOutlineShoppingCart /></h4>
        <hr />
        <div className="category">
          <h5 className="text-center">Category</h5>
          <Form>
            <div className="radio-item"  onClick={()=>dispatch(selectItem(ALL_PRODUCTS))}>
              <Form.Check
                type="radio"
                id="option11"
                name="group1"
              />
              <label htmlFor="option11">All</label>
            </div>
            <div className="radio-item" onClick={()=>dispatch(selectItem(SNEAKERS))}>
              <Form.Check
                type="radio"
                id="option12"
                name="group1"
              />
              <label htmlFor="option12">Sneakers</label>
            </div>
            <div className="radio-item" onClick={()=>dispatch(selectItem(HEELS))}>
              <Form.Check
                type="radio"
                id="option13"
                name="group1"
              />
              <label htmlFor="option13">Heels</label>
            </div>
            <div className="radio-item" onClick={()=>dispatch(selectItem(FLATS))}>
              <Form.Check
                type="radio"
                id="option14"
                name="group1"
              />
              <label htmlFor="option14">Flats</label>
            </div>
            <div className="radio-item" onClick={()=>dispatch(selectItem(SANDALS))}>
              <Form.Check
                type="radio"
                id="option15"
                name="group1"
              />
              <label htmlFor="option15">Sandals</label>
            </div>
            
          </Form>
        </div>
        <hr />
        <div className="price">
          <h5 className="text-center">Price</h5>
          <Form>
            <div className="radio-item" onClick={()=>dispatch(selectItem(ALL_PRODUCTS))}>
              <Form.Check
                type="radio"
                id="option21"
                name="group2"
              />
              <label htmlFor="option21">All</label>
            </div>
            <div className="radio-item" onClick={()=>dispatch(selectItem(OVER0))}>
              <Form.Check
                type="radio"
                id="option22"
                name="group2"
              />
              <label htmlFor="option22">$0 - $50</label>
            </div>
            <div className="radio-item" onClick={() => dispatch(selectItem(OVER50))}>
              <Form.Check
                type="radio"
                id="option23"
                name="group2"
              />
              <label htmlFor="option23">$50 - $100</label>
            </div>
            <div className="radio-item" onClick={() => dispatch(selectItem(OVER100))}>
              <Form.Check
                type="radio"
                id="option24"
                name="group2"
              />
              <label htmlFor="option24">$100 - $150</label>
            </div>
            <div className="radio-item" onClick={() => dispatch(selectItem(OVER150))}>
              <Form.Check
                type="radio"
                id="option25"
                name="group2"
              />
              <label htmlFor="option25">Over $150</label>
            </div>
          </Form>
        </div>
        <hr />
        <div className="colors">
          <h5 className="text-center">Colors</h5>
          <Form>
            <div className="radio-item all">
              <Form.Check
                type="radio"
                id="option31"
                name="group3"
              />
              <label htmlFor="option31">All</label>
            </div>
            <div className="radio-item  black" onClick={() => dispatch(selectItem(BLACK))}>
              <Form.Check
                type="radio"
                id="option32"
                name="group3"
              />
              <label htmlFor="option32">Black</label>
            </div>
            <div className="radio-item blue" onClick={() => dispatch(selectItem(BLUE))}>
              <Form.Check
                type="radio"
                id="option33"
                name="group3"
              />
              <label htmlFor="option33">Blue</label>
            </div>
            <div className="radio-item red" onClick={() => dispatch(selectItem(RED))}>
              <Form.Check
                type="radio"
                id="option34"
                name="group3"
              />
              <label htmlFor="option34">Red</label>
            </div>
            <div className="radio-item green" onClick={() => dispatch(selectItem(GREEN))}>
              <Form.Check
                type="radio"
                id="option35"
                name="group3"
              />
              <label htmlFor="option35">Green</label>
            </div>
            <div className="radio-item white" onClick={() => dispatch(selectItem(WHITE))}>
              <Form.Check
                type="radio"
                id="option36"
                name="group3"
              />
              <label htmlFor="option36">White</label>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  )
}

export default Category