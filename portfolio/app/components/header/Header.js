import React from "react";
import { COLORS } from '../../constants/colors';
import './Header.css'

export default function Header() {
    return (
        <div className='header'>
            <div className="d-flex justify-content-between p-4"
                style={{ backgroundColor: COLORS.primary }}
            >
                <div className="left">LOGO</div>
                <div className="middle d-flex">
                    <span className="a"><a href="#about">About</a></span>
                    <span className="b"><a href="#service">Services</a></span>
                    <span className="c"><a href="#product">Products</a></span>
                    <span className="d"><a href="#contact">Contact me</a></span>
                </div>
                <div className="right">Right</div>
            </div>
        </div>
    )
}