// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import TableItem from "./TableItem";

const TableContainer = () => {
    return (
        <table class="mzp-u-data-table">
            <thead>
                <tr>{/* database column titles */}
                    <th scope="col">Library Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Created Date</th>
                    <th scope="col">Open Jobs</th>
                    <th scope="col">Link</th>
                </tr>
            </thead>
            <tbody>
                {/* render each TableItem component below, each library is its own row or 'TableItem' */}
                <TableItem />
            </tbody>
        </table>
    )
}

export default TableContainer;
