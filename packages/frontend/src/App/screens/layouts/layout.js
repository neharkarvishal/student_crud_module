import React, { PureComponent } from 'react';
import Sidebar from './sidebar';
import Header from './header';

class Layout extends PureComponent {
  render() {
    return (
      <div className="container-fluid" id="wrapper">
        <div className="col">
          <Sidebar />
          <main className="col-xs-12 col-sm-8 offset-sm-3 col-lg-9 offset-lg-3 col-xl-10 offset-xl-2 pt-3 pl-4">
            <Header />
            <section className="row">
              <div className="col-sm-12">
                <section className="row">{this.props.children}</section>
              </div>
            </section>
          </main>
        </div>
      </div>
    );
  }
}

export default Layout;
