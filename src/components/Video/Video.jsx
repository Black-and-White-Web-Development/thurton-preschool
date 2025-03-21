import { useRef, useState } from "react";
import PropTypes from "prop-types";
import "./Video.scss";

const Video = function ({ src }) {
	const [isMuted, setIsMuted] = useState(true);
	const [isPlaying, setIsPlaying] = useState(true);
	const videoRef = useRef(null);

	const toggleMute = () => {
		setIsMuted(!isMuted);
		if (videoRef.current) {
			videoRef.current.muted = !isMuted;
		}
	};

	const togglePlayPause = () => {
		if (videoRef.current) {
			if (videoRef.current.paused) {
				videoRef.current.play();
				setIsPlaying(true);
			} else {
				videoRef.current.pause();
				setIsPlaying(false);
			}
		}
	};

	return (
		<figure className="video">
			<video
				ref={videoRef}
				className="video__player"
				width="100%"
				height="auto"
				autoPlay
				loop
				muted={isMuted}
			>
				<source src={src} type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			<figcaption className="video__controls">
				<button className="video__control" onClick={toggleMute}>
					{isMuted ? "Unmute" : "Mute"}
				</button>
				<button className="video__control" onClick={togglePlayPause}>
					{isPlaying ? "Pause" : "Play"}
				</button>
			</figcaption>
		</figure>
	);
};

Video.propTypes = {
	src: PropTypes.string.isRequired,
};

export default Video;
