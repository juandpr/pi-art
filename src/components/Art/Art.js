import React from 'react';
import styles from './Art.module.css';
import ArtPiece from './ArtPiece/ArtPiece';

const FRAMES = {
    1: {
        name: 'mobile',
        width: 320,
        height: 480
    },
    2: {
        name: 'small',
        width: 640,
        height: 480
    },
    3: {
        name: 'large',
        width: 800,
        height: 600
    }
};

const Art = ({frame, start, length, pixelSize, data}) => {
    const selectedFrame = FRAMES[frame];
    const { width, height } = selectedFrame;

    return (
      <ArtPiece frameWidth={width} frameHeight={height} data={data} />
    )
};

export default Art;
