import React from "react"

const PizzaForm = ({formPizza, handleFormEdit, handleFormSubmit}) => {
  const {topping, size, vegetarian} = formPizza
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" name="topping" placeholder="Pizza Topping" onChange={(e) => handleFormEdit(e)} value={topping}/>
        </div>
        <div className="col">
          <select onChange={(e) => handleFormEdit(e)} name="size" value={size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" name="vegetarian" type="radio" value="Vegetarian" onChange={(e) => handleFormEdit(e)} checked={vegetarian ? true : false}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" name="vegetarian" type="radio" value="Not Vegetarian" onChange={(e) => handleFormEdit(e)} checked={!vegetarian ? true : false}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={() => handleFormSubmit(formPizza)}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
