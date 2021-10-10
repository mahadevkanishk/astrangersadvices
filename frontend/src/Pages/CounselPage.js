import React from "react";
import MobileImg from "../Components/images/counsel-image.png";
import { Link } from "react-router-dom";
import "../CSS/counselPage.css";

export default function CounselPage() {
	return (
		<div className='counselPage'>
			<div className='counselPage-top'>
				<div className='tile-contents-wrapper'>
					<Link to='/counselroom' className='tile-counsel-link'>
						<div className='tile-contents'>Consult Our Counsellor</div>
					</Link>
				</div>
			</div>
			<div className='counselPage-bot'>
				<div className='counselCont'>
					<div className='counselPage-bot-left'>
						<img src={MobileImg} className='mobile-img' alt='img' />
					</div>
					<div className='counselPage-bot-right'>
						<span className='heading'>
							Benifits of our Counselling Services
						</span>
						<span className='content-lines'>
							Eliminate commute time and hassle free appointments
						</span>
						<span className='content-lines'>
							Flexible plans that serve your lifestyle and needs
						</span>
						<span className='content-lines'>
							Seamlessly change therapists at no extra cost
						</span>
						<span className='content-lines'>
							Save money while receiving high quality care
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
