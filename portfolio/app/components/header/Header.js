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
                    <div><a>About</a></div>
                    <div><a>Services</a></div>
                    <div><a>Products</a></div>
                    <div><a>Contacts</a></div>
                </div>
                <div className="right">Right</div>
            </div>
        </div>
    )
}