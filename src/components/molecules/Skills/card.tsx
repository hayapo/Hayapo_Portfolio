import React from 'react';

import styled from '@emotion/styled';

import { useInView } from 'react-intersection-observer';

import data from './skill-data';

import { sizes, colors, mq, typography, } from '../../../theme';
import { BottomIn, LeftIn } from '../../../keyframes';
import { SubTitle} from '../../atoms/SubTitle'
type Props = {
    id: string;
};

const Card: React.FCX<Props> = ({ className, id, children }) => {
    const { icon, title } = data[id];
    const [ref, inView] = useInView({
        rootMargin: '-50px 0px',
    });
    return (
        <div className={className} id={id} ref={ref}
            css={{
                margin: sizes[4],
                display: 'flex',
                opacity: inView ? 1 : 0,
                
                '& .SkillStackItemContent': {
                marginLeft: sizes[2],
                alignItems: 'center',
                animation: inView
                ? `${LeftIn} 0.5s ease-out`:0,
                '& h2': {
                    color: colors.black,
                    alignItems: 'center',
                },
                '& p': {
                    color: colors.black,
                    marginTop: sizes[8],
                    marginLeft: sizes[0],
                },
                '& a': {
                    color: colors.blue,
                    fontWeight: typography.fontWeights.bold,
                    marginTop: sizes[3],
                    marginLeft: sizes[0],
                    background: `linear-gradient(transparent 50%, #CCCC66 50%)`,
                },
                '& i':{
                    animation: inView ? `${LeftIn} 0.5s ease-out`:0,
                },
                [mq[1]]: {
                    marginLeft: sizes[6],
                },
                [mq[0]]: {
                    marginLeft: sizes[8],
                },
                },
            }}
        >
        <div>
        <i>{icon}</i>
        </div>
        <div>
        <div className="SkillStackItemContent">
            {icon ? <h2>{title}</h2> : <h1>{title}</h1>}
        <p>{children}</p>
        </div>
        </div>
        </div>
    );
};

export const StyledCard = styled(Card)`
    div {
        top: 0;
        align-items: center;
        svg {
            width: 5rem;
            height: 8rem;
        }
        h1 {
            position: relative;
            top: 0;
            left: 1rem;
        }
    }
`;
export default StyledCard;
