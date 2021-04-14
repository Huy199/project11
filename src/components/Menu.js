import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
const menus = [
  {
    label: 'Trang Chủ',
    to: '/home',
    exact: true,
  },
  {
    label: 'Giới Thiệu',
    to: '/about',
    exact: false,
  },
  {
    label: 'Liên Kết',
    to: '/contact',
    exact: false,
  },
  {
    label: 'Sản Phẩm',
    to: '/products',
    exact: false,
  },
  {
    label: 'Đăng nhập',
    to: '/login',
    exact: false,
  },
];
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? 'active abc' : '';
        return (
          <li className={`my-link ${active}`}>
            <Link to={to} className='my-link'>
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
};
class About extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-default'>
          <ul className='nav navbar-nav'>{this.showMenus(menus)}</ul>
        </nav>
      </div>
    );
  }
  showMenus = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.label}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        );
      });
    }
    return result;
  };
}

export default About;
