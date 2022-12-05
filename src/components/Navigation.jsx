// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="mzp-c-navigation">
            <div className="mzp-c-navigation-l-content">
                <div className="mzp-c-navigation-container">
                    <button className="mzp-c-navigation-menu-button" type="button" aria-controls="navigation-demo">
                        Menu
                    </button>

                    <div className="mzp-c-navigation-logo">
                        <a href="/">Mozilla</a>
                    </div>

                    <div className="mzp-c-navigation-items" id="navigation-demo">
                        <div className="mzp-c-navigation-menu">
                            <nav className="mzp-c-menu mzp-is-basic">
                                <ul className="mzp-c-menu-category-list">
                                    <li className="mzp-c-menu-category">
                                        <Link to={`/`} className="mzp-c-menu-title">Library Home Link</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;
