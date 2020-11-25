import React from 'react';

import styled from '@emotion/styled';

import SkillsMDX from './skills.mdx';
import { Emoji } from '../../atoms'

const SkillCards: React.FCX = ({ className }) => (
    <section className={className}>
        <SkillsMDX />
    </section>
);

export const StyledSkillCards = styled(SkillCards)`
    ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 8rem;
        padding: 0rem 0;
        width: 100%;

        li {
        display: fix;
        padding: 1rem 0;
        }

        @media screen and (max-width: 768px) {
        li {
            padding: 0.75rem 0;
        }
        }

        @media screen and (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
        li {
            padding: 0.5rem 0;
        }
        }
    }
`;

export default StyledSkillCards;