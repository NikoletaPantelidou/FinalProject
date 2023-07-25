import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function DropdownBar() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      <Dropdown.Item href="#/action-1">XS</Dropdown.Item>
      <Dropdown.Item href="#/action-2">S</Dropdown.Item>
      <Dropdown.Item href="#/action-3">M</Dropdown.Item>
      <Dropdown.Item href="#/action-3">L</Dropdown.Item>
      <Dropdown.Item href="#/action-3">XL</Dropdown.Item>
    </DropdownButton>
  );
}

export default DropdownBar;
