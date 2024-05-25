import React from "react";
import "./gallery.css";

import {ReactComponent as CakeIcon} from "../../assets/cake_icon.svg"
import {ReactComponent as BakeIcon} from "../../assets/bake_icon.svg"
import {ReactComponent as KitchenIcon} from "../../assets/kitchen_icon.svg"

import NavBar from "../../component/navbar/navbar";
import ContactSection from "../../component/contact/contactSection";

const Gallery = () => {
  	return (
    	<div className="Gallery">
      		<NavBar></NavBar>
			<div className="gallery_body">
				<div className="categories sections" id="categories">
					<div className="classes_category category">
						<div className="svg_container">
							<BakeIcon className="icon"/>
						</div>
						<h1>Classes</h1>
						<p>Short description about the categories</p>
					</div>
					<div className="kitchen_category category">
						<div className="svg_container">
							<KitchenIcon className="icon"/>
						</div>
						<h1>Kitchen</h1>
						<p>Short description about the categories</p>
					</div>
					<div className="cakes_category category">
						<div className="svg_container">
							<CakeIcon className="icon"/>
						</div>
						<h1>Cakes</h1>
						<p>Short description about the categories</p>
					</div>
				</div>
				<div className="classes sections" id="classes">
					<h1>Classes</h1>
				</div>
				<div className="kitchen sections" id="kitchen">
					<h1>Kitchen</h1>
				</div>
				<div className="cakes sections" id="cakes">
					<h1>Cakes</h1>
				</div>

			</div>
			<ContactSection></ContactSection>
    	</div>
  	);
}

export default Gallery;

