import React from 'react';

import StyledFooter from './Footer';
import Header from './Header';

export const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    {children}
    <StyledFooter />
  </>
);

export default Layout;
