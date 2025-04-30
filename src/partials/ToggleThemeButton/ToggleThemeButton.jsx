import { useTheme } from "../../hooks/useTheme";
import "./ToggleThemeButton.scss";

import sun from "/src/assets/icons/sun.svg";
import moon from "/src/assets/icons/moon.svg";
import moonOverSun from "/src/assets/icons/moon-over-sun.svg";

const ToggleThemeButton = function () {
	const { theme, toggleTheme } = useTheme();

	return (
		<button className="toggle-theme-button" onClick={toggleTheme}>
			<img
				src={theme === "light" ? sun : theme === "dark" ? moon : moonOverSun}
				alt=""
				width="32"
				height="32"
				className="nav__social-icon toggle-theme-button__icon"
			/>
		</button>
	);
};

export default ToggleThemeButton;
