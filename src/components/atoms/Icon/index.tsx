import React from 'react';
import { useInView } from 'react-intersection-observer';
import { colors, sizes } from '../../../theme';
import { BottomIn } from '../../../keyframes';

export const Icon: React.FC = ({ children }) => {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      css={{
        margin: `${sizes[8]} auto`,
        height: sizes[64],
        width: sizes[64],
        animation: inView ? `${BottomIn} 0.5s ease-out` : 0,
        '& img': {
          borderRadius: '100%',
          border: `${sizes[3]} solid ${colors.lightBlue}`,
        },
      }}
    >
      {children}
    </div>
  );
};
