import { Routes, Route } from "react-router-dom";
import Navigation from "/src/components/Navigation/Navigation";
import Home from "/src/pages/Home";
import About from "/src/pages/About";
import Publications from "/src/pages/Publications";
import Media from "/src/pages/Media";
import Contact from "/src/pages/Contact";
import TermsOfUse from "/src/pages/legal/TermsOfUse";
import PrivacyPolicy from "/src/pages/legal/PrivacyPolicy";
import CookiePolicy from "/src/pages/legal/CookiePolicy";
import Accessibility from "/src/pages/legal/Accessibility";
import Footer from "/src//components/Footer/Footer";

function App() {
	const mainRoutes = [
		{ path: "/", label: "Home", page: <Home /> },
		{ path: "/about", label: "About", page: <About /> },
		{ path: "/publications", label: "Publications", page: <Publications /> },
		{ path: "/media", label: "Media", page: <Media /> },
		{ path: "/contact", label: "Contact", page: <Contact /> },
	];

	const otherRoutes = [
		{
			path: "/terms-of-use",
			label: "Terms of use",
			page: <TermsOfUse siteName="Terence Allbright Composer" />,
		},
		{
			path: "/privacy-policy",
			label: "Privacy policy",
			page: <PrivacyPolicy siteName="Terence Allbright Composer" />,
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
			<Footer />
		</>
	);
}

export default App;
