import React, { PureComponent } from 'react';

class Sidebar extends PureComponent {
  render() {
    return (
      <nav className="sidebar col-xs-12 col-sm-4 col-lg-3 col-xl-2 bg-faded sidebar-style-1">
        <h1 className="site-title">
          <a href="index.html">
            <em className="fa fa-rocket" /> StudentCrudApp
          </a>
        </h1>
      </nav>
    );
  }
}

export default Sidebar;
