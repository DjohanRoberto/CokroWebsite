import React, { useEffect } from "react";
import "./gallery.css";
import { useLocation } from "react-router-dom";


import {ReactComponent as CakeIcon} from "../../assets/cake_icon.svg"
import {ReactComponent as BakeIcon} from "../../assets/bake_icon.svg"
import {ReactComponent as KitchenIcon} from "../../assets/kitchen_icon.svg"

import NavBar from "../../component/navbar/navbar";
import ContactSection from "../../component/contact/contactSection";
import SlideGallery from "../../component/slidegallery/slidegallery";

// import img1 from "../../assets/huh.png"

import class1 from "../../assets/class_1.JPG"
import class2 from "../../assets/class_5.JPG"
import class3 from "../../assets/class_6.JPG"
import class4 from "../../assets/class_7.JPG"

import cake1 from "../../assets/cakes_1.JPG"
import cake2 from "../../assets/cakes_2.JPG"
import cake3 from "../../assets/cakes_3.JPG"

import kitchen1 from "../../assets/dapur_ovens2.JPG"
import kitchen2 from "../../assets/dapur_wideleft.JPG"
import kitchen3 from "../../assets/dapur_machine.JPG"
import kitchen4 from "../../assets/dapur_mixers.JPG"
import kitchen5 from "../../assets/dapur_wideright.JPG"

const Gallery = () => {

	const classList = [class1, class2, class3, class4]
	const cakeList = [cake1, cake2, cake3]
	const kitchenList = [kitchen1, kitchen2, kitchen3, kitchen4, kitchen5]

	const { state } = useLocation();
	const { targetId } = state || {};

	useEffect (() => {
		const el = document.getElementById(targetId);
		if (el) {
			el.scrollIntoView();
		}
	}, [targetId])

  	return (
    	<div className="Gallery">
      		<NavBar></NavBar>
			<div className="gallery_body">
				<div className="categories" id="categories">
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
					<SlideGallery imgList={classList}></SlideGallery>
				</div>
				<div className="kitchen sections" id="kitchen">
					<h1>Kitchen</h1>
					<SlideGallery imgList={kitchenList}> </SlideGallery>
				</div>
				<div className="cakes sections" id="cakes">
					<h1>Cakes</h1>
					<SlideGallery imgList={cakeList}> </SlideGallery>
				</div>
			</div>
			<ContactSection></ContactSection>
    	</div>
  	);
}

export default Gallery;

