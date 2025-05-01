import { useEffect, useState } from "react";

export function useTheme() {
	const [theme, setTheme] = useState(() => {
		const stored = localStorage.getItem("theme");
		return stored || "system";
	});

	useEffect(() => {
		const root = document.body;

		const applyTheme = newTheme => {
			root.classList.remove("light", "dark");

			if (
				newTheme === "dark" ||
				(newTheme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)
			) {
				root.classList.add("dark");
			} else {
				root.classList.add("light");
			}
		};

		applyTheme(theme);

		if (theme === "system") {
			const media = window.matchMedia("(prefers-color-scheme: dark)");
			const listener = () => applyTheme("system");

			media.addEventListener("change", listener);

			return () => media.removeEventListener("change", listener);
		}
	}, [theme]);

	const toggleTheme = () => {
		const next = theme === "dark" ? "light" : theme === "light" ? "system" : "dark";

		setTheme(next);

		localStorage.setItem("theme", next);
	};

	return { theme, setTheme, toggleTheme };
}
