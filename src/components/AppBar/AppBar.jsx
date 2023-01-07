import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from './AppBar.styled';

export default function AppBar() {
  const navItems = [
    { href: 'dashboard', text: 'Dashboard' },
    { href: 'sales', text: 'Sales' },
    { href: 'reports', text: 'Reports' },
    { href: 'feedback', text: 'Feedback' },
    { href: 'customers', text: 'Customers' },
  ];

  return (
    <header>
      <nav>
        <ul>
          {navItems.map(item => {
            return (
              <li key={item.href}>
                <NavItem to={item.href}>{item.text}</NavItem>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
