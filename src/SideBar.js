import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CoverPicture from "./CoverPicture";
import ProfilePicture from "./ProfilePicture";
import MenuItem from "./MenuItem";

class SideBar extends Component {


    render() {
        return (
            <div className="side-bar">
                <CoverPicture/>
                <ProfilePicture/>
                <ul>
                    <li><MenuItem text="Home" url=""/></li>
                    <li><MenuItem text="About" url="about"/></li>
                    <li><MenuItem text="Work History" url="work-history"/></li>
                    <li><MenuItem text="Academic History" url="academic-history"/></li>
                    <li><MenuItem text="Projects" url="projects"/></li>
                </ul>
            </div>
        );
    }
}

export default SideBar;
