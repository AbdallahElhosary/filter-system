import "./Recommended.scss"
import Button from 'react-bootstrap/Button';
import {  useDispatch } from 'react-redux';
import {  selectItem } from "../../redux/actions/ProductAction";
import { ADIDAS, ALL_PRODUCTS, NIKE, PUMA, VANS } from "../../redux/type";
const Recommended = ({ selectedCompany, filteredData}) => {
  const dispatch = useDispatch();
  console.log(dispatch)
  return (
    <div className="container my-3">
      <div className="fs-3 fw-bold">Recommended</div>
      <div className="filter-list mt-2">
        <Button variant="outline-dark" className="mx-2" onClick={() => dispatch(selectItem(ALL_PRODUCTS))}>All Products</Button>
        <Button variant="outline-dark" className="mx-2" onClick={() => dispatch(selectItem(NIKE))}>Nike</Button>
        <Button variant="outline-dark" className="mx-2" onClick={() => dispatch(selectItem(ADIDAS))}>Adidas</Button>
        <Button variant="outline-dark" className="mx-2" onClick={() => dispatch(selectItem(PUMA))}>Puma</Button>
        <Button variant="outline-dark" className="mx-2" onClick={() => dispatch(selectItem(VANS))}>Vans</Button>
      </div>
    </div>
  )
}

export default Recommended