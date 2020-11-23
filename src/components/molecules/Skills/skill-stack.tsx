import * as React from 'react';
import Image from 'gatsby-image';
import { useInView } from 'react-intersection-observer';

import { sizes, colors, mq } from '../../../theme';
import { BottomIn } from '../../../keyframes';


type Props = {
  // TODO: gatsbyimageの型を書く。
    skill: string;
    history: string;
    about: string;
    icon:string;
};

export const SkillStack: React.FC<Props> = ({
    skill,
    history,
    about,
    icon,
    }) => {
    const [ref, inView] = useInView({
        rootMargin: '-50px 0px',
    });
    const Tag = icon

    return (
        <>
            <div
            ref={ref}
            css={{
                margin: sizes[8],
                display: 'flex',
                opacity: inView ? 1 : 0,
                animation: inView
                ? `${BottomIn} 0.5s ease-out`
                : 0,
                '& .SkillStackItemContent': {
                marginLeft: sizes[2],
                '& h3': {
                    color: colors.white,
                    backgroundColor: colors.red,
                    marginTop: sizes[1],
                    marginBottom: sizes[1],
                    padding: sizes[2],
                    borderRadius: sizes[2],
                },
                '& p': {
                    color: colors.blue,
                    marginTop: sizes[1],
                    marginLeft: sizes[2],
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
            <div className="SkillStackItemContent">
                <div>
                    <Tag></Tag>
                    {icon ? <h2>{skill}</h2> : <h1>{skill}</h1>}
                    <h2>{skill}</h2>
                    <p>{history}</p>
                </div>
                    <p>{about}</p>
            </div>
            </div>
        </>
    );
};
