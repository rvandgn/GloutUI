import {BrowserRouter, Route, Routes as RouteContainer} from "react-router-dom";
import App from "views/public/App";

export default function Routes() {
    return (
        <BrowserRouter basename={'/'}>
            <RouteContainer>
                <Route path={"/app"} element={<App />} />
            </RouteContainer>
        </BrowserRouter>
    )
}