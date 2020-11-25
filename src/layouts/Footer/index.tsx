import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { FiTwitter, FiGithub} from 'react-icons/fi';
import { SiQiita } from 'react-icons/si';
import {
  colors,
  sizes,
  typography,
} from '../../theme/';

const FooterContainer = css({
  paddingTop: sizes[0],
  margin: '0 auto',
  width: 'auto',
  textAlign:'center',
});

const FooterLink = css({
  display: 'inline-flex',
  margin: '50 auto',

  '& a': {
      fontWeight: typography.fontWeights.bold,
      margin: sizes[3],
      width: sizes[8],
      height: sizes[12],
      color: colors.black,
      '& .twitter': {
          width: '150%',
          height: '150%',
      },
      '& .github': {
          width: '150%',
          height: '150%',
      },
      '& .qiita': {
        width: '150%',
        height: '150%',
    },
  },
  '& a:hover': {
  color: colors.lightBlue,
  },
});

const Footer: React.FCX = ({ className }) => (
  <footer className={className}>
    <div css={FooterContainer}>
            <p>Built with Gatsby</p>
            <p>© 2020 Hayapo All Rights Reserved.</p>
        <div css={FooterLink} >
          <a
                href="https://twitter.com/hayapo_hip"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
            >
                <FiTwitter className="twitter" />
            </a>
            <a
                href="https://github.com/hayapo"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Github"
            >
                <FiGithub className="github" />
            </a>
            <a
                href="https://qiita.com/hayapo"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="qiita"
            >
                <SiQiita className="qiita"></SiQiita>
            </a>
        </div>
    </div>
  </footer>
);

const StyledFooter = styled(Footer)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 10vh;
`;

export default StyledFooter;
