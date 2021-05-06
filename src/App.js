import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state={
    pizzas: [],
    formPizza: {}
  }

  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(resp => resp.json())
    .then(pizzas => {
      this.setState({
        pizzas
      })
    })
  }

  handleEditButton = (pizzaObj) =>{
      this.setState({
        formPizza: pizzaObj
      })
  }

  handleFormEdit = (event) => {
    let value = event.target.value 
    switch(value){
      case 'Vegetarian':
        value = true
        break;
      case 'Not Vegetarian':
        value = false
        break;
      default:
        value = event.target.value
    }
    let updatedFormPizza = {
      ...this.state.formPizza,
      [event.target.name]: value
    }
    this.setState({
      formPizza: updatedFormPizza
    })
  }

  handleFormSubmit = (pizzaObj) => {
    fetch(`http://localhost:3000/pizzas/${pizzaObj.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(pizzaObj)
    })
    .then(resp => resp.json())
    .then(updatedPizza => {
      this.setState({
        pizzas: this.state.pizzas.map(pizza => {
          if(pizza.id === updatedPizza.id) return updatedPizza
          else return pizza
        })
      })
    })
    .catch(error => {
      alert(error)
    })
  }


  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm formPizza={this.state.formPizza} handleFormEdit={this.handleFormEdit}
        handleFormSubmit={this.handleFormSubmit}
         />
        <PizzaList handleEditButton={this.handleEditButton} pizzas={this.state.pizzas} />
      </Fragment>
    );
  }
}

export default App;
