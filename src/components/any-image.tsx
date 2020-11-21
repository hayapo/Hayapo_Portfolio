import Img from 'gatsby-image';
import React from 'react';
import { useAnyImage } from 'src/hooks';

export default ({ filename }: { filename: string }): JSX.Element => {
  const fluid = useAnyImage(filename);
  if (!fluid) {
    return <div>Sorry... Picture not found</div>
  }

  return <Img fluid={fluid} />;
};
