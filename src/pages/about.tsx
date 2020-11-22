import React from 'react';
import { SEO } from 'src/components';
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
  LinkText
} from '../components/atoms';


const AboutContainer = css({
  margin: `${sizes[16]} auto`,
  textAlign: 'center',
  '& article': {
    '& .profile': {
      margin: `${sizes[16]} auto`,
      textAlign: 'center',
      '& .paragraph': {
        marginTop: sizes[16],
      },
    },
    '& .career': {
      margin: `${sizes[32]} auto`,
      textAlign: 'center',
    },
  },
});

const SkillStack = css({
  margin: `${sizes[16]} auto`,
  '& h2': {
    textAlign: 'center',
  },
  '& .SkillStackList': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    [mq[1]]: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr ',
    },
    [mq[0]]: {
      display: 'block',
      marginLeft: sizes[8],
    },
  },
});

const Component: React.FCX = ({ className }) => (
  <main className={className}>
    <Title color={colors.blue}>ABOUT</Title>
    <section css={AboutContainer}>
      <Icon>
        <div style={{ maxWidth: `400px`, marginBottom: `1.45rem`, justifyContent: 'center' }}>
          <AnyImage filename='square_icon.png'></AnyImage>
        </div>
      </Icon>
      <article>
        <section className="profile">
          <SubTitle>僕について</SubTitle>
            <div className="paragraph">
              <Paragraph>
                名古屋大学情報学部人間社会情報学科に在籍してます
              </Paragraph>
              <Paragraph>
                現在(2020年)、学部3年生です
              </Paragraph>
              <Paragraph>
                川合伸幸先生のゼミに所属してます
              </Paragraph>
            </div>
        </section>
        <section className="profile">
          <SubTitle>好きなものとか</SubTitle>
          <div className="paragraph">
            <Paragraph>
              ゲームとアニメとガジェットとテック系のことが大好きです
            </Paragraph>
            <Paragraph>
              HackerNewsとかよく見てます
            </Paragraph>
            <Paragraph>
              HIPHOPが大好きで、起きてる時間の大半はHIPHOPを聞いてます
            </Paragraph>
            <Paragraph>
              好きなラッパーは
              <LinkText
                  href={
                    'https://microcms.io/blog/what-is-jamstack/'
                  }
                ></LinkText>
            </Paragraph>
          </div>
        </section>
      </article>
    </section>
  </main>
);

const StyledComponent = styled(Component)`
  ${baseStyle}
`;

export default ({ path }: { path: string }): JSX.Element => (
  <>
    <SEO title='About' pathname={path} />
    <StyledComponent />
  </>
);
