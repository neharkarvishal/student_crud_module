import React, { PureComponent } from 'react';

class Header extends PureComponent {
  render() {
    return (
      <header className="page-header row justify-center">
        <div className="col-md-6 col-lg-8">
          <h2 className="float-left text-center text-md-left">Student List</h2>
        </div>
        <div className="clear" />
      </header>
    );
  }
}

export default Header;
