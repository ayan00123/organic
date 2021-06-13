import React from 'react'
import "../component/Body.css"
import Ladyimg from "../assets/woman-in-brown-jacket-and-black-shirt-3484683.png"
import Star from "../assets/icons8-star-24.png"
import Fcircle from "../assets/icons8-circle-48.png"
import Circle from "../assets/icons8-circle-24.png"
import Fimg from "../assets/eucalyptus-essential-oil-soap-green-background-zero-waste-natural-organic-bathroom-tools_80743-2766.png"
import Simg from "../assets/containers-with-products-table-with-copy-space_23-2148366089.png"
import Timg from "../assets/potted-plant-near-cosmetics-bottles-jars_23-2147787938.png"
import Card from './card'

function Body() {
    return (
        <>
        <p className="Healthy-life-with">Healthy life with</p>
        <p className="Nature-Organic">Nature Organic </p>
        <p className="Vegetables-are-the-edible-parts-of-a-plant-that-is-used-in-cooking-or-can-be-eaten-now ">Vegetables are the edible parts of a plant that is used in cooking or can be eaten now</p>
        <div className="Rectangle-2"> <p className="Explore-Now ">Explore Now</p> </div>
        {/* <img className="Group-195" src="" alt="" /> */}
        <p className="Welcome-to-Nature">Welcome to Nature</p>
        <p className="Lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-sed-do-eiusmod-tempor-incididunt-ut-labore-et-dolore-magna-aliqua-one ">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        <div className="Rectangle-3">
            <img src="" alt="" />
            <p className="Organic">Organic</p>
            <p className="Food">Food</p>
            <p className="Lorem-ipsum-dolor-sit-amet-consectetur">Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div className="Rectangle-4">
            <img src="" alt="" />
            <p className="Organic-one">Organic</p>
            <p className="Food-one">Food</p>
            <p className="Lorem-ipsum-dolor-sit-amet-consectetur-one">Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div className="Rectangle-5">
            <img src="" alt="" />
            <p className="Organic">Organic</p>
            <p className="Food">Food</p>
            <p className="Lorem-ipsum-dolor-sit-amet-consectetur">Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div className="Rectangle-6">
            <img src="" alt="" />
            <p className="Organic">Organic</p>
            <p className="Food">Food</p>
            <p className="Lorem-ipsum-dolor-sit-amet-consectetur">Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <p className="Proudly-presented-by">Proudly presented by</p>
        <p className="Lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-sed-do-eiusmod-tempor-incididunt-ut-labore-et-dolore-magna-aliqua-two">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        <img className="woman-in-brown-jacket-and-black-shirt-3484683" src={Ladyimg} alt="" />
        <p className="Jane-Doe">Jane Doe</p>
        <img className="Path-1" src={Star} alt="" />
        <img className="Path-12" src={Star} alt="" />
        <img className="Path-123" src={Star} alt="" />
        <img className="Path-1234" src={Star} alt="" />
        <img className="Path-12345" src={Star} alt="" />
        <p className="Thank-you-for-all-the-amazing-produce-and-products-you-deliver-each-week-you-make-my-life-so-easy-an-bring-goodness-into-our-family-eating-Ive-been-roasting-a-lot-of-brussel-sprouts-and">Thank you for all the amazing produce and products you deliver each week…
you make my life so easy an bring goodness into our family eating. 
I’ve been roasting a lot of brussel sprouts and</p>
         <img className="Ellipse-1" src={Fcircle} alt="" />
         <img className="Ellipse-2" src={Circle} alt="" />
         <img className="Ellipse-3" src={Circle} alt="" />
         <img className="Ellipse-4" src={Circle} alt="" />
         <p className="Subscribe-to-Our-Newsletter">Subscribe to Our Newsletter</p>
         <p className="Lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-sed-do-eiusmod-tempor-incididunt-ut-labore-et-dolore-magna-aliqua-three">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
         <p className="email">Enter your Email address</p>
         <div className="Rectangle-28">
         <p className="Subscribe">Subscribe</p>
         <p className="Read-Our-Blog">Read Our Blog</p>
         <p className="Lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-sed-do-eiusmod-tempor-incididunt-ut-labore-et-dolore-magna-aliqua-four">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
         </div>
         <div className="Rectangle-7">
            <Card
            image={Fimg}
            />
        </div>
        <div className="Rectangle-8">
            
        <Card
            image={Simg}
            />
        </div>
        <div className="Rectangle-9">
        <Card
            image={Timg}
            />
        </div>
        </>
    )
}

export default Body
