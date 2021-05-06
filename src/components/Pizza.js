import React from "react"

const Pizza = ({pizza, handleEditButton}) => {
  const {topping, size, vegetarian} = pizza
  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td><button onClick={() => handleEditButton(pizza)} type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
