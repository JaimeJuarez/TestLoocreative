import React from 'react';
import images from '../../assets/images';
export default function Navbar() {
return <header>
    <nav className="navbar nav-style navbar-expand-lg navbar-light">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse px-5 py-3 navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav py-3 px-5 ms-auto mb-0 mb-lg-0">
                    <li className="nav-item">
                        <a className="navbar-brand menunav-a" href="#">
                            <img className='menunav' src={images.Menu} alt="" />
                            <div className="changeLangWrapper d-flex justify-content">
                                <div className="changeLang select me-1">KR</div>
                                <div className="changeLang en ms-1">EN</div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
;
}