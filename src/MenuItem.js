import React, {Component} from "react";
import {Link} from "react-router-dom";

class MenuItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: props.text,
            url: props.url
        }
    }
    render() {
        return (
            <div className="menu-item">
                <Link className="menu-item" to={this.state.url}> {this.state.text} </Link>
            </div>
        );
    }
}

export default MenuItem;