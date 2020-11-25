import React from 'react';
import { SEO } from 'src/components';
import { baseStyle } from 'src/styles';
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
  Emoji
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
      width: '90%',
      margin: `${sizes[16]} auto`,
      textAlign: 'match-parent',
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
    <Title color={colors.black}>
      <Emoji symbol="📑" label="about"/>
      ABOUT</Title>
    <section css={AboutContainer}>
      <Icon>
        <div style={{ maxWidth: `400px`, marginBottom: `1.45rem`, justifyContent: 'center' }}>
          <AnyImage filename='square_icon.png'></AnyImage>
        </div>
      </Icon>
      <article>
        <section className="profile">
          <SubTitle>
            <Emoji symbol=" 🙋‍♂️ " />
            僕について</SubTitle>
            <div className="paragraph">
              <Paragraph>
                埼玉県出身で現在は名古屋住み。
              </Paragraph>
              <Paragraph>
                しかし応援球団はソフトバンクホークス
              </Paragraph>
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
          <SubTitle>
            <Emoji symbol="🎓 " />
            研究とか
          </SubTitle>
            <div className="paragraph">
              <Paragraph>
                ComputerScienceと認知科学に興味があります。
              </Paragraph>
              <Paragraph>
                まだ決まっていませんが、HapticsとかVRに関わる研究をしたいです
              </Paragraph>
            </div>
        </section>
        <section className="profile">
          <SubTitle>
            <Emoji symbol="❤️ " />
            好きなものとか</SubTitle>
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
              好きなラッパーはTohjiさん
              <LinkText
                  href={
                    'https://linkco.re/pdFPdhrp'
                  }
                ></LinkText>
              とか、FujiTaito
              <LinkText
                  href={
                    'https://linkco.re/FNHTEy33'
                  }
                ></LinkText>
                さんです
            </Paragraph>
          </div>
        </section>
        <section className="career">
            <Table />
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
