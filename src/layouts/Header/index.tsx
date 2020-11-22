import { Link,useStaticQuery,graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const HeaderLogo = css({
  marginRight: 'auto',
  '& a': {
    '& img': {
      borderRadius: '50%',
    },
  },
});



const Component: React.FCX = ({ className }) => {
    const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "circle_icon.png" }) {
        childImageSharp {
          fixed(width: 90, height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      } 
    }
  `);

  return (
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
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
};

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
