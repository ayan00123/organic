import React from 'react'
import "../component/Footer.css"
import fbimg from "../assets/icons8-facebook-24.png"
import instaimg from "../assets/icons8-instagram-48.png"
import twiimg from "../assets/icons8-twitter-24.png"

function Footer() {
    return (
        <>
        <div className="totalfooter">
            <p className="organic-one">organic</p>
            <p className="Lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-sed-do-eiusmod-tempor-one">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor</p>
            <p className="-Copyright-2020-Nature">© Copyright 2020 Nature</p>
            <p className="Information">Information</p>
            <p className="About-Us-one">About Us</p>
            <p className="Products-one">Products</p>
            <p className="Contact-Us-one">Contact Us</p>
            <p className="Terms-of-Service">Terms of Service</p>
            <p className="About-Us-two">About Us</p>
            <p className="Products-two">Products</p>
            <p className="Follow-Us">Follow Us</p>
            <img className="Path-12248" src={fbimg} alt="" />
            <img className="Path-122" src={instaimg} alt="" />
            <img className="Path-1224" src={twiimg} alt="" />
            </div>
        </>
    )
}

export default Footer
