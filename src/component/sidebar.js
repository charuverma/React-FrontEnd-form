import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import '../style/registerlist.css';
export default props => {
  return (
   <div>
   <DropdownButton className="Drop" title="Employee Details" >
   <Dropdown.Item href="/registerform">Registerform</Dropdown.Item>
   <Dropdown.Item href="/registerlist">ShowList</Dropdown.Item>
 </DropdownButton>
   <DropdownButton className="Drop1" title="product Details" >
   <Dropdown.Item href="/productform"> Productform</Dropdown.Item>
   <Dropdown.Item href="/productlist">ProductList</Dropdown.Item>
 </DropdownButton>
 </div>
  );
};