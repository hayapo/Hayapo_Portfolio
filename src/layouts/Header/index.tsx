import { Link } from 'gatsby';
import React,    from 'react';

import styled from '@emotion/styled';

import { css } from '@emotion/core';

import {
  colors,
  sizes,
  fontSizes,
  typography,
  mq,
} from '../../theme';

const HeaderLogo = css({
  marginRight: 'auto',
  '& a': {
    '& img': {
      borderRadius: '50%',
    },
  },
});

const data = useStaticQuery<
GatsbyTypes.MyQueryQuery
>(graphql`
query MyQuery {
  file(relativePath: { eq: "icon.png" }) {
    childImageSharp {
      fixed(width: 48, height: 48) {
        ...GatsbyImageSharpFixed
      }
    }
  }
}
`);

const Component: React.FCX = ({ className }) => (
  <header className={className}
  >
    <div css={HeaderLogo}>
      <Link to="/" aria-label="HOME">
        {/* TODO:undefiendの処理を行う */}
        <Img
          fixed={data.file!.childImageSharp!.fixed}
          alt="Logo"
        />
      </Link>
    </div>
    <nav>
      <ul>
        <li>
          <Link to='/'>Top</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/404'>404</Link>
        </li>
      </ul>
    </nav>
  </header>
);

const StyledComponent = styled(Component)`
  position: flex;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  width: 100%;

  > nav {
    padding: 2rem;
    > ul {
      display: flex;
      justify-content: center;
      list-style: none;
      > li {
        > a {
          padding: 2rem;
        }
      }
    }
  }
`;

export default StyledComponent;
