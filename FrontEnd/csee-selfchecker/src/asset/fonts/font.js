import { createGlobalStyle } from 'styled-components';
import RedHatDisplayRegular from './RedHatDisplay-Regular.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: "RedHat Display Regular";
        src: local("RedHatDisplay-Regular"),
        url(${RedHatDisplayRegular}) format('ttf');
        font-weight: 300;
        font-style: normal;
    }
`;
