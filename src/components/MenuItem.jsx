import "./MenuItem.css";

function MenuItem({ Item }) {
  return (
    <li className="menu-item">
      <img className="menu-item-image" src={Item.image} alt={Item.name} />   
      <h3 className="menu-item-name">{Item.name}</h3>
      <p className="menu-item-category">{Item.category}</p>
      <p className="menu-item-description">{Item.description}</p>
      <p className="menu-item-price">${Item.price}</p>
    </li>
  );
}

export default MenuItem;
