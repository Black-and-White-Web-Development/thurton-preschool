import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "/src/pages/Home/Home";
import About from "/src/pages/About/About";
import Resources from "/src/pages/Resources/Resources";
import Fundraising from "/src/pages/Fundraising/Fundraising";
import Contact from "/src/pages/Contact/Contact";
import TermsOfUse from "/src/pages/legal/TermsOfUse";
import PrivacyPolicy from "/src/pages/legal/PrivacyPolicy";
import CookiePolicy from "/src/pages/legal/CookiePolicy";
import Accessibility from "/src/pages/legal/Accessibility";
import Navigation from "/src/partials/Navigation/Navigation";
import Footer from "/src/partials/Footer/Footer";

const API_URL = `${import.meta.env.VITE_CMS_URL}/api/website-info`;
const API_TOKEN = import.meta.env.VITE_CMS_API_TOKEN;

function App() {
	const [siteInfo, setSiteInfo] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(API_URL, {
					method: "GET",
					headers: {
						Authorization: `Bearer ${API_TOKEN}`,
						"Content-Type": "application/json",
					},
				});
				const data = await response.json();
				setSiteInfo(data.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	const mainRoutes = [
		{ path: "/", label: "Home", page: <Home /> },
		{ path: "/about", label: "About", page: <About /> },
		{ path: "/resources", label: "Resources", page: <Resources /> },
		{ path: "/fundraising", label: "Fundraising", page: <Fundraising /> },
		{ path: "/contact", label: "Contact", page: <Contact /> },
	];

	const otherRoutes = [
		{
			path: "/terms-of-use",
			label: "Terms of use",
			page: <TermsOfUse siteName={siteInfo.siteTitle} />,
		},
		{
			path: "/privacy-policy",
			label: "Privacy policy",
			page: <PrivacyPolicy siteName={siteInfo.siteTitle} />,
		},
		{ path: "/cookies", label: "Cookie policy", page: <CookiePolicy /> },
		{ path: "/accessibility", label: "Accessibility", page: <Accessibility /> },
	];

	const allRoutes = [...mainRoutes, ...otherRoutes];

	return (
		<>
			<Navigation routes={mainRoutes} />
			<main>
				<Routes>
					{allRoutes.map(({ path, page }) => (
						<Route key={path} path={path} element={page} />
					))}
				</Routes>
			</main>
			<Footer siteInfo={siteInfo} />
		</>
	);
}

export default App;
