// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import Footer from "./components/Footer";
import HomeContainer from "./components/HomeContainer";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <HomeContainer />
      <Footer />
    </div>
  );
}

export default App;
