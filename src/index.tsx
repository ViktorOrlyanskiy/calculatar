import { render } from "react-dom";
import { App } from "app/App";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import "app/styles/index.scss";

render(
    <ErrorBoundary>
        <App />
    </ErrorBoundary>,
    document.getElementById("root")
);
