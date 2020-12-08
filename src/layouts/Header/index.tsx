import { Link,useStaticQuery,graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { colors } from '../../theme';

const HeaderColor = css({
  backgroundColor: colors.white,
})

const HeaderLogo = css({
  marginRight: 'auto',
  '& a': {
    '& img': {
      borderRadius: '50%',
    },
  },
});



const Component: React.FCX = ({ className }) => {
    const data = useStaticQuery<GatsbyTypes.MyQueryQuery>(graphql`
    query MyQuery {
      file(relativePath: { eq: "TF_icon.png" }) {
        childImageSharp {
          fixed(width: 70, height:70) {
            ...GatsbyImageSharpFixed
          }
        }
      } 
    }
  `);

  return (
    <header className={className} css={HeaderColor}
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
            <Link to='/skills'>Skills</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
};

const StyledComponent = styled(Component)`
  position: fix;
  top: 0;
  left: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  > nav {
    > ul {
      display: flex;
      padding: 1rem;
      > li {
        > a {
          padding: 1rem;
        }
      }
    }
  }
`;

export default StyledComponent;
