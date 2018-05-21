import React from 'react';
import Image from './image';

const ImageList = props => {
	let images = props.data.map(image => <Image
		url={image.urls.small}
		name={image.user.name}
		key={image.id}
		bio={image.user.bio}
		avatar={image.user.profile_image.small}
			/>);
	return (
		<ul className="image-list">
			{images}
		</ul>
		);
};


export default ImageList;