import { useState } from "react";
function AddItemForm({onAdd})
{
    const [name, setName]=useState("")
    const [category,setCategory]=useState("Drinks")
    const [price,setPrice]=useState("")
    const [image,setImage]=useState("")
    const [description,setDescription]=useState("")
function handleSubmit(e){
    e.preventDefault()
    if (name.trim()===""||category.trim()===""||price.trim()===""||image.trim()===""||description.trim()==="")
    {
        alert("Alooo!!! Please Key In All the fields")
    }
    const pricenumber=Number(price)
        if (pricenumber<=0){
            alert("This should not be cheap!!!Alooo")
        }
        const newItem={
            name:name,
            category:category,
            price:price,
            image:image,
            description:description,
            available:true
            
        }
        //post
        fetch("http://localhost:3000/menuItems",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newItem)
        })
        .then(res=>{
            if (!res.ok) throw new Error("Failed to Add new Item")
                return res.json()
        })
        .then(data=>{
            onAdd(data);//prop to add
            setCategory("");
            setDescription("");
            setImage("");
            setName("");
            setPrice("");
            alert("Zetu zetu!!!Alooo")

        })
        }
        return(<>
        <form onSubmit={handleSubmit}>
            <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)}></input>
            <select value={category} onChange={e=>setCategory(e.target.value)}>
                <option>Drinks</option>
                <option>Food</option>
                <option>Dessert</option>
            </select>
            <input placeholder="Price" value={price} onChange={e=>setPrice(e.target.value)}></input>
            <input placeholder="Image URL" value={image} onChange={e=>setImage(e.target.value)}></input>
            <textarea rows={5} placeholder="Short Description" value={description} onChange={e=>setDescription(e.target.value)}></textarea>
            <button type="submit">Add Item</button>


        </form>
        
        </>)

}

export default AddItemForm;
