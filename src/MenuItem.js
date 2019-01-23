import React, {Component} from "react";

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
                <a href={this.state.url}> {this.state.text} </a>
            </div>
        );
    }
}

export default MenuItem;