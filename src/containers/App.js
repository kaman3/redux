import React, { Component } from 'react';
import { connect } from 'react-redux'
import { User } from "../components/user";
import { Page } from "../components/page";
import { setYear } from '../actions/pageAction'
import './App.css';

class App extends Component {
  
  render() {
    
    const { user, age, photo, setYearAction } = this.props;
    console.log(this.props);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Мой топ фото</h1>
        </header>
        <User name = {user}/>
        <Page age = {age}  photo = {photo}  setYear={setYearAction}/> 
      </div>
    )
  }
}

// приклеиваем данные из store
const mapStateToProps = store => {
  //console.log(store) // посмотрим, что же у нас в store?
  return {
    user: store.user.name,
    age: store.page.age,
    photo: store.page.photos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setYearAction: age => dispatch(setYear(age)) // [1]
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
