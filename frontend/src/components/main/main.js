// src/components/main/main_page.js

import React from "react";
import NavBarContainer from "../nav/navbar_container"


class MainPage extends React.Component {
  render() {
    return (
      <div>
        <NavBarContainer />
        <h1>Basic main_page</h1>
        <footer>Copyright &copy; 2019 Chirper</footer>
      </div>
    );
  }
}

export default MainPage;
