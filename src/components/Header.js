import { Link } from "react-router-dom";


const Header = () => {

    return (
        <>
            <header className="header sticky-top bg-dark">
                <nav className="navbar  navbar-fixed-top navbar-expand-lg">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand align-left">
                            <h4 className="text-white">Plugins</h4>
                        </Link>
                        <Link to="/" className="navbar-brand align-left">
                            <h5 className="text-white">Themes</h5>
                        </Link>
                        <Link to="/" className="navbar-brand align-left">
                            <h5 className="text-white">Patterns</h5>
                        </Link>
                        <Link to="/" className="navbar-brand align-left">
                            <h5 className="text-white">Learn</h5>
                        </Link>
                        <Link to="/" className="navbar-brand align-left">
                            <div className="dropdown" style={{ zIndex: "1" }}>
                                <button className="btn btn-secondary dropdown-toggle" type="button"
                                    data-toggle="dropdown" >Support</button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">ABC</a>
                                    <a class="dropdown-item" href="#">ABC</a>
                                    <a class="dropdown-item" href="#">ABC</a>
                                    <a class="dropdown-item" href="#">ABC</a>
                                </div>
                            </div>
                        </Link>



                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">

                                <li className="nav-item">
                                    <Link to="/login" className="nav-link text-white" >Login</Link>
                                </li>
                                <li className="nav-item text-white">
                                    <Link to="/register" className="nav-link text-white" >Register</Link>
                                </li>
                                <li className="nav-item text-white">
                                    <Link to="/postdata" className="nav-link text-white" >PostData</Link>
                                </li>

                                <li className="nav-item text-white">
                                    <Link to="/search" className="nav-link text-white" >Search</Link>
                                </li>

                            </ul>
                        </div>

                        <div>

                        </div>
                    </div>
                </nav>


            </header>

            <header className="header sticky-top bg-primary" style={{ zIndex: "-1" }}>
                <nav className="navbar  navbar-fixed-top navbar-expand-lg">
                    <div className="container">
                        <Link to="/" className="navbar-brand align-left">
                            <h2 className="text-white">About</h2>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">

                                <li className="nav-item">
                                    <Link to="/postdata" className="nav-link text-white active" >Philosophy</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/postdata" className="nav-link text-white" >Etiquette</Link>
                                </li>
                                <li className="nav-item text-white">
                                    <Link to="/postdata" className="nav-link text-white" >Swag</Link>
                                </li>
                                <li className="nav-item text-white">
                                    <Link to="/postdata" className="nav-link text-white" >Graphics & Logo</Link>
                                </li>
                                <li className="nav-item text-white">
                                    <Link to="/postdata" className="nav-link text-white" >Testimonials</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
                <hr />

            </header>

        </>
    );
}
export default Header;
