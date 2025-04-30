import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import "./ToggleThemeButton.scss";

import sun from "/src/assets/icons/sun.svg";
import moon from "/src/assets/icons/moon.svg";
import moonOverSun from "/src/assets/icons/moon-over-sun.svg";

const ToggleThemeButton = function () {
	const [isHovered, setIsHovered] = useState(false);
	const { theme, toggleTheme } = useTheme();

	const handleMouseOver = () => {
		setIsHovered(true);
	};

	const handleMouseOut = () => {
		setIsHovered(false);
	};

	return (
		<button
			className="toggle-theme"
			onClick={toggleTheme}
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
		>
			<img
				src={theme === "light" ? sun : theme === "dark" ? moon : moonOverSun}
				alt=""
				width="32"
				height="32"
				className="nav__social-icon toggle-theme__icon"
			/>
			{isHovered && (
				<div className="toggle-theme__options">
					<div
						className={`toggle-theme__option ${
							theme === "system" && "toggle-theme__option--active"
						}`}
					>
						<img
							src={moonOverSun}
							alt=""
							width="24"
							height="24"
							className="toggle-theme__option-icon"
						/>
						System theme
					</div>
					<div
						className={`toggle-theme__option ${theme === "dark" && "toggle-theme__option--active"}`}
					>
						<img src={moon} alt="" width="24" height="24" className="toggle-theme__option-icon" />
						Dark theme
					</div>
					<div
						className={`toggle-theme__option ${
							theme === "light" && "toggle-theme__option--active"
						}`}
					>
						<img src={sun} alt="" width="24" height="24" className="toggle-theme__option-icon" />
						Light theme
					</div>
				</div>
			)}
		</button>
	);
};

export default ToggleThemeButton;
