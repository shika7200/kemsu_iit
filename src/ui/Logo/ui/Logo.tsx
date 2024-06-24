import React from 'react';
import { LogoProps } from '../types';
import styles from './Logo.module.scss';

const Logo: React.FC<LogoProps> = ({ alt }) => (
  <svg
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.logo}
    aria-label={alt}
  >
    <g id="MATC">
      <polygon id="outer_polygon" points="128,16 256,0 384,16 448,128 512,256 448,384 384,496 256,512 128,496 64,384 0,256 64,128" fill="#E0F4FD"/>
      <rect id="central_rectangle" x="224" y="192" width="64" height="128" fill="#0082C8"/>
      <rect id="top_left_square" x="176" y="128" width="64" height="64" fill="#0082C8"/>
      <rect id="top_middle_square" x="256" y="128" width="64" height="64" fill="#0082C8"/>
      <rect id="top_right_square" x="336" y="128" width="64" height="64" fill="#0082C8"/>
      <path id="left_arrow" d="M256 192H192L224 160" stroke="#0082C8" strokeWidth="16"/>
      <path id="middle_arrow" d="M256 192V160" stroke="#0082C8" strokeWidth="16"/>
      <path id="right_arrow" d="M256 192H320L288 160" stroke="#0082C8" strokeWidth="16"/>
      <text id="MATC_text" x="256" y="384" textAnchor="middle" fill="#20B4AD" fontFamily="Arial" fontSize="64" fontWeight="bold">MATC</text>
    </g>
  </svg>
);

export default Logo;
