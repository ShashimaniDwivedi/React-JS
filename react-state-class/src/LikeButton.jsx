import { useState } from 'react';

export default function LikeButton() {
  //only be called inside te body of function
  const [isLike, setIsLike] = useState(false);
  let likeStyle = {
    color: "red",
    fontSize: "64px",
}
	const toggleLike = () => {
		setIsLike(!isLike);
	};

	return (
		<div>
			<p onClick={toggleLike}>
				<i style={likeStyle} className={isLike ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}></i>
			</p>
		</div>
	);
}
