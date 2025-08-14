import { useState,useEffect } from "react";
import MenuItem from "./MenuItem"; 
import AddItemForm from "./AddItemForm";
function MenuList(){
    const [menuItems,setMenuItems]=useState([])
    useEffect(function () {
        if (menuItems.length === 0) { // run fetch only if we have no data yet
          fetch("http://localhost:3000/menuItems")
            .then(function (res) {
              if (!res.ok) {
                throw new Error("Failed to fetch item");
              }
              return res.json();
            })
            .then(function (data) {
              setMenuItems(data);
            })
            .catch(function (err) {
              console.error(err);
            });
        }
      });


      function onAdd1(newItem){
        setMenuItems([newItem,...menuItems])//appends the item---Prop
      }


return (
    <><AddItemForm onAdd={onAdd1} />
      {menuItems.map((Item, id) => (
        <MenuItem key={id} name={Item.name} Item={Item}/>
      ))}
    </>
  );
  
}

export default MenuList;