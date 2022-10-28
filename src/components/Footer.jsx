// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

const Footer = () => {
    return (
        <footer className="mzp-c-footer">
            <div className="mzp-l-content">
                <nav className="mzp-c-footer-secondary">
                    <div className="mzp-c-footer-legal">
                        <p className="mzp-c-footer-license">
                            Portions of this content are ©1998-2022 by individual mozilla.org contributors.
                            Content available under a <a rel="license" href="https://www.mozilla.org/foundation/licensing/website-content/">Creative Commons license</a>.
                        </p>
                        <ul className="mzp-c-footer-terms">
                            <li><a href="https://www.mozilla.org/privacy/websites/">Website Privacy Notice</a></li>
                            <li><a href="https://www.mozilla.org/privacy/websites/#cookies">Cookies</a></li>
                            <li><a href="https://www.mozilla.org/about/legal/">Legal</a></li>
                        </ul>
                    </div>
                </nav>

            </div>
        </footer>
    )
}

export default Footer;
