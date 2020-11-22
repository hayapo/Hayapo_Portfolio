import React from 'react';
import { useInView } from 'react-intersection-observer';
import {
  colors,
  sizes,
  fontSizes,
  typography,
} from '../../../theme';
import { color } from 'csx';
import { BottomIn } from '../../../keyframes';

export const Table: React.FC = ({ children }) => {
  const [ref, inView] = useInView({
    rootMargin: '-100px 0px',
  });
  return (
    <table
      ref={ref}
      css={{
        margin: `${sizes[16]} auto`,
        width: '100%',
        borderTop: `solid ${sizes[1]} ${colors.blue}`,
        borderBottom: `solid ${sizes[1]} ${colors.blue}`,
        borderCollapse: 'collapse',
        '& thead': {
          background: `${color(colors.lightBlue).fade(0.6)}`,
          '& tr th': {
            color: colors.white,
            fontWeight: typography.fontWeights.black,
            paddingLeft: sizes[12],
            borderBottom: `dashed ${sizes[1]} ${color(
              colors.blue,
            ).fade(0.4)}`,
          },
        },
        '& tbody': {
          '& tr td': {
            color: colors.blue,
            fontWeight: typography.fontWeights.black,
            paddingLeft: sizes[8],
            borderBottom: `dashed ${sizes[1]} ${color(
              colors.blue,
            ).fade(0.4)}`,
          },
        },

        opacity: inView ? 1 : 0,
        animation: inView ? `${BottomIn} 0.5s ease-out` : 0,
      }}
    >
      <thead>
        <tr>
          <th>年</th>
          <th>About</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1999</td>
          <td>爆誕<br/>(純粋無垢の権化)</td>
        </tr>
        <tr>
          <td>2015</td>
          <td>春日部高等学校入学</td>
        </tr>
        <tr>
          <td>2018</td>
          <td>名古屋大学情報学部入学</td>
        </tr>
        <tr>
          <td>2020</td>
          <td>現在</td>
        </tr>
      </tbody>
    </table>
  );
};
