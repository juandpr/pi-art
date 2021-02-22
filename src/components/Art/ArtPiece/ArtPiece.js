import React from 'react';
import styles from './ArtPiece.module.css';

const normalizeRgb = (dataPiece) => {
  const rPart = parseInt(dataPiece.substr(0, 3));
  const gPart = parseInt(dataPiece.substr(3, 3));
  const bPart = parseInt(dataPiece.substr(6, 3));

  return {
    r: Math.round(rPart * 256 / 1000),
    g: Math.round(gPart * 256 / 1000),
    b: Math.round(bPart * 256 / 1000)
  };
};

const ArtPiece = ({frameWidth, frameHeight, data}) => {
  let currentIndex = -1;

  return (
    <div className={styles.artPiece} style={{width: frameWidth, height: frameHeight}}>
      {[...Array(frameHeight)].map((rowItem, y) =>
        <div className={styles.row} key={y}>
          {[...Array(frameWidth)].map((pixelItem, x) => {
            currentIndex++;
            const dataPiece = data.substr(currentIndex, 9);
            const { r, g, b} = normalizeRgb(dataPiece);
            return (
              <div className={styles.pixel} key={`${y}_${x}`} style={{background: `rgb(${r},${g},${b})`}} />
            );
            }
          )}
        </div>
      )}
    </div>
  )
};

export default ArtPiece;
