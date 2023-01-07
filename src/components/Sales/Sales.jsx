import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { NavItem, UlList } from './Sales.styled';

export default function Sales() {
  const navItems = [
    { href: 'analytics', text: 'Analytics' },
    { href: 'invoices', text: 'Invoices' },
    { href: 'deposits', text: 'Deposits' },
  ];

  return (
    <main>
      <header>
        <nav>
          <UlList>
            {navItems.map(item => (
              <li key={item.href}>
                <NavItem to={item.href}>{item.text}</NavItem>
              </li>
            ))}
          </UlList>
        </nav>
      </header>
      <Outlet />
    </main>
  );
}
