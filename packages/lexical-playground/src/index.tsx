import "./index.css";

import App from "./App";

// Handle runtime errors
const showErrorOverlay = (err: Event) => {
	const ErrorOverlay = customElements.get("vite-error-overlay");
	if (!ErrorOverlay) {
		return;
	}
	const overlay = new ErrorOverlay(err);
	const body = document.body;
	if (body !== null) {
		body.appendChild(overlay);
	}
};

window.addEventListener("error", showErrorOverlay);
window.addEventListener("unhandledrejection", ({ reason }) =>
	showErrorOverlay(reason),
);

export default App;
