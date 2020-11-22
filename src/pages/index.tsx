import React from 'react';
import { AnyImage, SEO } from 'src/components';
import { baseStyle } from 'src/styles';

import styled from '@emotion/styled';

const Component: React.FCX = ({ className }) => (
  <main className={className}>
    <h1>Welcome my site!</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, justifyContent: 'center' }}>
      <AnyImage filename='square_icon.png'></AnyImage>
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
