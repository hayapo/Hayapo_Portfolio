import React from 'react';

import styled from '@emotion/styled';

import { SEO } from '../components';
import { StyledSkillCards as SkillCards } from '../components/molecules/Skills/skill-cards';
import baseStyle from '../styles/base-style';

import { css } from '@emotion/core';
import { sizes, mq, colors } from '../theme';

import {
    Title,
    SubTitle,
    Icon,
    Paragraph,
    LinkText,
    Table,
} from '../components/atoms';

const Skills: React.FCX = ({ className }) => (
    <main className={className}>
        <Title color={colors.blue}>SKILLS</Title>
        <SkillCards />
    </main>
);

const StyledSkills = styled(Skills)`
    ${baseStyle};
`;

export default () => (
    <>
        <SEO title='Skills' pathname='/skills' />
        <StyledSkills />
    </>
);
