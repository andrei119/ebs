import React from 'react';
import Popup from "reactjs-popup";

const Image = ({url, name, avatar, bio}) => (
   <Popup
    trigger={<li className="image-container"><img src={url} alt=""/></li>}
    modal
    closeOnDocumentClick
  	>
  	<div className="modal-wrapper">
  		<img src={url} alt="" className="modal-photo"/>
  		<div className="user-info">
	  		<img src={avatar} alt=""/>
		  	<span className="name">{name}</span>
		  	<span className="bio">{bio}</span>
  		</div>
  	</div>
	</Popup>
);

export default Image;