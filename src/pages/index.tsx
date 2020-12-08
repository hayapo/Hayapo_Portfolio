import React from 'react';
import { AnyImage, SEO } from 'src/components';
import { baseStyle } from 'src/styles';
import { css } from '@emotion/core';
import { sizes, mq, colors } from '../theme';
import styled from '@emotion/styled';
import {
  Title,
  SubTitle,
  Icon,
  Paragraph,
  LinkText,
  Table,
  Emoji
} from '../components/atoms';

const HeroImage = css({
  maxWidth: 500,
  margin: '0 auto',
});

const Component: React.FCX = ({ className }) => (
  <main className={className}>
    <Title color={colors.black}>
      <Emoji symbol='👾 ' />
      Welcome my site!
      <Emoji symbol=' 👾' />
      </Title>
    <div css={HeroImage}>
      <AnyImage filename='HeroImage.png'></AnyImage>
    </div>
  </main>
);

const StyledComponent = styled(Component)`
  ${baseStyle}
`;

export default ({ path }: { path: string }): JSX.Element => (
  <>
    <SEO title='Top' pathname={path} />
    <StyledComponent />
  </>
);
