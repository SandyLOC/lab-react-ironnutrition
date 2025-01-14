import { Divider, Input } from 'antd';
import {useState} from 'react'

// Iteration 4
function AddFoodForm(props) {

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState("")
    const [servings, setServings] = useState("")

    const registrarDatos = (e) => {
        e.preventDefault()
        props.agregarComida({name, image, calories, servings})

        setName('')
        setImage('')
        setCalories('')
        setServings('')

    }

  return (

    //Form Controlled
    <form onSubmit={registrarDatos}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={(e) => {
        setName(e.target.value)
      }} />

      <label>Image</label>
      {/* render antd <Input /> type="text" here */}
      <Input value={image} type="text" onChange={(e) => {
        setImage(e.target.value)
      }} />

      <label>Calories</label>
      {/* render antd <Input /> type="number" here */}
      <Input value={calories} type="number" onChange={(e) => {
        setCalories(e.target.value)
      }} />

      <label>Servings</label>
      {/* render antd <Input /> type="number" here */}
      <Input value={servings} type="number" onChange={(e) => {
        setServings(e.target.value)
      }} />

      <button type="submit" className="button">Create</button>
    </form>
  );
}

export default AddFoodForm;