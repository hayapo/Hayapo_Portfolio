import React from 'react';
import { NetlifyForm, SEO } from 'src/components';
import { baseStyle } from 'src/styles';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import { sizes, mq, colors } from '../theme';
import styled from '@emotion/styled';
import {AnyImage} from '../components'
import {
  Title,
  SubTitle,
  Icon,
  Paragraph,
  LinkText,
  Table,
} from '../components/atoms';


const Component: React.FCX = ({ className }) => (
  <main className={className}>
    <Title color={colors.blue}>CONTACT</Title>
    <NetlifyForm />
  </main>
);

const StyledComponent = styled(Component)`
  ${baseStyle}
`;

export default ({ path }: { path: string }): JSX.Element => (
  <>
    <SEO title='Contact' pathname={path} />
    <StyledComponent />
  </>
);
