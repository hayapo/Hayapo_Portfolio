import React from 'react';
import { useInView } from 'react-intersection-observer';
import { colors } from '../../../theme';
import { BottomIn,LeftIn } from '../../../keyframes';

export const SubTitle: React.FCX = ({ children }) => {
    const [ref, inView] = useInView({
        rootMargin: '-50px 0px',
    });
    return (
        <h2
        ref={ref}
        css={{
            color: colors.blue,
            opacity: inView ? 1 : 0,
            animation: inView ? `${BottomIn} 0.5s ease-out` : 0,
            '& i': {
                color: colors.black,
                animation: inView ? `${LeftIn} 0.5s ease-out` : 0,
            },
        }}
        >
        {children}
        </h2>
    );
};
