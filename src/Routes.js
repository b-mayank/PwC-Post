import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostData from "./components/PostData";
import Search from "./components/Search";
import Register from "./components/Register";
import Login from "./components/Login";


const Routes = () => {

    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    <div>
                        <Switch>
                         
                            
                            <Route path="/postdata"> <PostData /> </Route>
                            <Route path="/search"> <Search /> </Route>
                            <Route path="/register"> <Register /> </Route>
                            <Route path="/login"> <Login /> </Route>
                          
                           
                          
                           
                        </Switch>
                    </div>
                    <Footer/>
                </div>
            </BrowserRouter>
        </div>
    );

}
export default Routes;