// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import { Link } from "react-router-dom";

const DetailsContainer = () => {
    return (
        <div className="mzp-l-content">
            {/* example only - breadcrumb link should be in navigation */}
            <p><Link to={`/`}>Library Home Link</Link> &rarr; Current Library</p>
            {/* LIBRARY NAME */}
            <h3>Current Library Name</h3>
            <p>Long description of library and other info listed here...</p>
            <section className="details-grid">
                <div className="mzp-c-emphasis-box details-sidebar">
                    <h4>Details Sidebar</h4>
                    <ul>
                        <li>Info and details here.</li>
                    </ul>
                </div>
                <div className="mzp-c-emphasis-box details-jobs">
                    <h4>Open Jobs</h4>
                    {/* this should probably be its own component for jobs */}
                    <table class="mzp-u-data-table">
                        <thead>
                            <tr>
                                <th scope="col">Job ID #</th>
                                <th scope="col">Job Type</th>
                                <th scope="col">Created Date</th>
                                <th scope="col">Version</th>
                                <th scope="col">Status</th>
                                <th scope="col">Outcome</th>
                                <th scope="col">Relinquished</th>
                                <th scope="col">bugzilla</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>34</td>
                                <td>2</td>
                                <td>2021-10-13 06:03:49</td>
                                <td>0123abc456def789ghi</td>
                                <td>4</td>
                                <td>6</td>
                                <td>1</td>
                                <td><a href="/">0123456</a></td>
                            </tr>
                            <tr>
                                <td>34</td>
                                <td>2</td>
                                <td>2021-10-13 06:03:49</td>
                                <td>0123abc456def789ghi</td>
                                <td>4</td>
                                <td>6</td>
                                <td>1</td>
                                <td><a href="/">0123456</a></td>
                            </tr>
                            <tr>
                                <td>34</td>
                                <td>2</td>
                                <td>2021-10-13 06:03:49</td>
                                <td>0123abc456def789ghi</td>
                                <td>4</td>
                                <td>6</td>
                                <td>1</td>
                                <td><a href="/">0123456</a></td>
                            </tr>
                            <tr>
                                <td>34</td>
                                <td>2</td>
                                <td>2021-10-13 06:03:49</td>
                                <td>0123abc456def789ghi</td>
                                <td>4</td>
                                <td>6</td>
                                <td>1</td>
                                <td><a href="/">0123456</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            </section>
        </div>
    )
}

export default DetailsContainer;
