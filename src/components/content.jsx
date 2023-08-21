import React from "react";
import "./content.css";
import Registered from "./registered";


export default function Content() {
    const testmonials = [
        {
            id: 1,
            icon: require("./media/myicon.svg"),
            name: "John Doe",
            title: "CEO",
            org: "ABC Company",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam.",

        },
        {
            id: 2,
            name: "Jane Doe",
            icon: require("./media/myicon2.svg"),
            title: "CTO",
            org: "XYZ Company",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam.",
        },
        {
            id: 3,
            name: "John Smith",
            icon: require("./media/myicon3.svg"),
            title: "CFO",
            org: "PQR Company",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam.",
    
        },
    ];

    return (
        <div className="content">
            <div className="content__title">
                <h1>What our customers say</h1>
            </div>
            <div className="content__text">
                    {testmonials.map((testmonial) => {
                        return (
                            <p  className="text_1">
                            {testmonial.icon && <img id="myimg" src={testmonial.icon.default} alt="icon" />}
                            <span className="details">
                            {testmonial.name},
                            {testmonial.org},
                            {testmonial.title}</span><br />
                            {testmonial.text}
                            </p>
                        );
                    })
                }
             
            </div>
            <div className="register">
            <Registered />
            </div>
        </div>
    );
}