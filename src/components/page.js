import React, { Component } from "react";
import PropTypes from "prop-types";

export class Page extends Component{
    onBtnClick = e => {
        const age = +e.currentTarget.innerText;
        //console.log(age);
        this.props.setYear(age)
    }
    render(){
        const { age, photo } = this.props;
        console.log(this.props);
        return(
            
            <div>
                <div>
                  <button onClick={this.onBtnClick}>2067</button>
                </div>
                <p>У тебя {photo.length} в {age}</p>
            </div>
        )
    }
}

Page.propTypes = {
    age: PropTypes.number.isRequired,
    photo: PropTypes.array.isRequired,
    setYear: PropTypes.func.isRequired
}