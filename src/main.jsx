import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "/src/utils/ScrollToTop";
import App from "/src/App";
import "/src/scss/style.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<ScrollToTop />
		<App />
	</BrowserRouter>
);
