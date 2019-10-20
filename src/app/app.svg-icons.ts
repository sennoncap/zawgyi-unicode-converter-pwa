/**
 * @license
 * Copyright DagonMetric. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found under the LICENSE file in the root directory of this source tree.
 */

// tslint:disable:max-line-length

import { Provider } from '@angular/core';

import { SVG_ICON } from '../modules/mat-extensions';

// These are the hardcoded inline svg sources to be used by the `<mat-icon>` component
export const appSvgIconProviders: Provider[] = [
    {
        provide: SVG_ICON,
        useValue: {
            name: 'menu',
            svgSource: '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" width="100%" height="100%" fit=""> ' +
                '<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/> ' +
                '</svg>'
        },
        multi: true
    },
    {
        provide: SVG_ICON,
        useValue: {
            name: 'info',
            svgSource: '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" width="100%" height="100%" fit=""> ' +
                '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /> ' +
                '</svg>'
        },
        multi: true
    },
    {
        provide: SVG_ICON,
        useValue: {
            name: 'help',
            svgSource: '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" width="100%" height="100%" fit=""> ' +
                '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" /> ' +
                '</svg>'
        },
        multi: true
    },
    {
        provide: SVG_ICON,
        useValue: {
            name: 'share',
            svgSource: '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" width="100%" height="100%" fit=""> ' +
                '<path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" /> ' +
                '</svg>'
        },
        multi: true
    },
    {
        provide: SVG_ICON,
        useValue: {
            name: 'logo-google-play-badge',
            svgSource: '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 155 60" preserveAspectRatio="xMidYMid meet" focusable="false" width="100%" height="100%" fit=""> ' +
                '<defs><linearGradient id="a" x1="31.8" y1="183.29" x2="15.02" y2="166.51" gradientTransform="matrix(1 0 0 -1 0 202)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#00a0ff"/><stop offset=".01" stop-color="#00a1ff"/><stop offset=".26" stop-color="#00beff"/><stop offset=".51" stop-color="#00d2ff"/><stop offset=".76" stop-color="#00dfff"/><stop offset="1" stop-color="#00e3ff"/></linearGradient><linearGradient id="b" x1="43.83" y1="172" x2="19.64" y2="172" gradientTransform="matrix(1 0 0 -1 0 202)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffe000"/><stop offset=".41" stop-color="#ffbd00"/><stop offset=".78" stop-color="orange"/><stop offset="1" stop-color="#ff9c00"/></linearGradient><linearGradient id="c" x1="34.83" y1="169.7" x2="12.07" y2="146.95" gradientTransform="matrix(1 0 0 -1 0 202)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ff3a44"/><stop offset="1" stop-color="#c31162"/></linearGradient><linearGradient id="d" x1="17.3" y1="191.82" x2="27.46" y2="181.66" gradientTransform="matrix(1 0 0 -1 0 202)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#32a071"/><stop offset=".07" stop-color="#2da771"/><stop offset=".48" stop-color="#15cf74"/><stop offset=".8" stop-color="#06e775"/><stop offset="1" stop-color="#00f076"/></linearGradient></defs><title>fil_get</title><path fill="none" d="M0 0h155v60H0z"/><rect x="10" y="10" width="135" height="40" rx="5" ry="5"/><path d="M140 10.8a4.2 4.2 0 0 1 4.2 4.2v30a4.2 4.2 0 0 1-4.2 4.2H15a4.2 4.2 0 0 1-4.2-4.2V15a4.2 4.2 0 0 1 4.2-4.2h125m0-.8H15a5 5 0 0 0-5 5v30a5 5 0 0 0 5 5h125a5 5 0 0 0 5-5V15a5 5 0 0 0-5-5z" fill="#a6a6a6"/><path d="M57.42 20.24a2.71 2.71 0 0 1-.75 2 2.91 2.91 0 0 1-2.2.89 3.15 3.15 0 0 1-2.21-5.37 3 3 0 0 1 2.21-.9 3.1 3.1 0 0 1 1.23.25 2.47 2.47 0 0 1 .94.67l-.53.53a2 2 0 0 0-1.64-.71 2.32 2.32 0 0 0-2.33 2.4 2.36 2.36 0 0 0 4 1.73 1.89 1.89 0 0 0 .5-1.22h-2.17v-.72h2.91a2.54 2.54 0 0 1 .04.45zM62 17.74h-2.7v1.9h2.46v.72H59.3v1.9H62V23h-3.5v-6H62zM65.28 23h-.77v-5.26h-1.68V17H67v.74h-1.72zM69.94 23v-6h.77v6zM74.13 23h-.77v-5.26h-1.68V17h4.12v.74h-1.67zM83.61 22.22a3.12 3.12 0 0 1-4.4 0 3.24 3.24 0 0 1 0-4.45 3.1 3.1 0 0 1 4.4 0 3.23 3.23 0 0 1 0 4.45zm-3.83-.5a2.31 2.31 0 0 0 3.26 0 2.56 2.56 0 0 0 0-3.44 2.31 2.31 0 0 0-3.26 0 2.56 2.56 0 0 0 0 3.44zM85.58 23v-6h.94l2.92 4.67V17h.77v6h-.8l-3.05-4.89V23z" fill="#fff" stroke="#fff" stroke-miterlimit="10" stroke-width=".2"/><path d="M78.14 31.75A4.25 4.25 0 1 0 82.41 36a4.19 4.19 0 0 0-4.27-4.25zm0 6.83a2.58 2.58 0 1 1 2.4-2.58 2.46 2.46 0 0 1-2.4 2.58zm-9.31-6.83A4.25 4.25 0 1 0 73.09 36a4.19 4.19 0 0 0-4.27-4.25zm0 6.83A2.58 2.58 0 1 1 71.22 36a2.46 2.46 0 0 1-2.4 2.58zm-11.09-5.52v1.8h4.32a3.77 3.77 0 0 1-1 2.27 4.42 4.42 0 0 1-3.33 1.32 4.8 4.8 0 0 1 0-9.6A4.6 4.6 0 0 1 61 30.14l1.27-1.27A6.29 6.29 0 0 0 57.74 27a6.61 6.61 0 1 0 0 13.21 6 6 0 0 0 4.61-1.85 6 6 0 0 0 1.56-4.22 5.87 5.87 0 0 0-.1-1.13zm45.31 1.4a4 4 0 0 0-3.64-2.71 4 4 0 0 0-4 4.25 4.16 4.16 0 0 0 4.22 4.25 4.23 4.23 0 0 0 3.54-1.88l-1.45-1a2.43 2.43 0 0 1-2.09 1.18 2.16 2.16 0 0 1-2.06-1.29l5.69-2.35zm-5.8 1.42a2.33 2.33 0 0 1 2.22-2.48 1.65 1.65 0 0 1 1.58.9zM92.63 40h1.87V27.5h-1.87zm-3.06-7.3h-.07a3 3 0 0 0-2.24-1 4.26 4.26 0 0 0 0 8.51 2.9 2.9 0 0 0 2.24-1h.06v.61c0 1.63-.87 2.5-2.27 2.5a2.35 2.35 0 0 1-2.14-1.51l-1.63.68A4.05 4.05 0 0 0 87.29 44c2.19 0 4-1.29 4-4.43V32h-1.72zm-2.14 5.88a2.59 2.59 0 0 1 0-5.16A2.4 2.4 0 0 1 89.7 36a2.38 2.38 0 0 1-2.28 2.58zm24.38-11.08h-4.47V40h1.87v-4.74h2.61a3.89 3.89 0 1 0 0-7.76zm0 6h-2.61v-4.26h2.65a2.14 2.14 0 1 1 0 4.29zm11.53-1.8a3.5 3.5 0 0 0-3.33 1.91l1.66.69a1.77 1.77 0 0 1 1.7-.92 1.8 1.8 0 0 1 2 1.61v.13a4.13 4.13 0 0 0-1.95-.48c-1.79 0-3.6 1-3.6 2.81a2.89 2.89 0 0 0 3.1 2.75 2.63 2.63 0 0 0 2.4-1.2h.06v1h1.8v-4.81c0-2.19-1.66-3.46-3.79-3.46zm-.23 6.85c-.61 0-1.46-.31-1.46-1.06 0-1 1.06-1.33 2-1.33a3.32 3.32 0 0 1 1.7.42 2.26 2.26 0 0 1-2.19 2zM133.74 32l-2.14 5.42h-.06L129.32 32h-2l3.33 7.58-1.9 4.21h1.95L135.82 32zm-16.81 8h1.87V27.5h-1.87z" fill="#fff"/><path d="M20.44 17.54a2 2 0 0 0-.46 1.4v22.12a2 2 0 0 0 .46 1.4l.07.07L32.9 30.15v-.29L20.51 17.47z" fill="url(#a)"/><path d="M37 34.28l-4.1-4.13v-.29l4.1-4.14.09.05L42 28.56c1.4.79 1.4 2.09 0 2.89l-4.89 2.78z" fill="url(#b)"/><path d="M37.12 34.22L32.9 30 20.44 42.46a1.63 1.63 0 0 0 2.08.06l14.61-8.3" fill="url(#c)"/><path d="M37.12 25.78l-14.61-8.3a1.63 1.63 0 0 0-2.08.06L32.9 30z" fill="url(#d)"/><path d="M37 34.13l-14.49 8.25a1.67 1.67 0 0 1-2 0l-.07.07.07.07a1.66 1.66 0 0 0 2 0l14.61-8.3z" style="isolation:isolate" opacity=".2"/><path d="M20.44 42.32a2 2 0 0 1-.46-1.4v.15a2 2 0 0 0 .46 1.4l.07-.07zM42 31.3l-5 2.83.09.09L42 31.44A1.75 1.75 0 0 0 43 30a1.86 1.86 0 0 1-1 1.3z" style="isolation:isolate" opacity=".12"/><path d="M22.51 17.62L42 28.7a1.86 1.86 0 0 1 1 1.3 1.75 1.75 0 0 0-1-1.44L22.51 17.48c-1.4-.79-2.54-.13-2.54 1.47v.15c.03-1.61 1.15-2.27 2.54-1.48z" style="isolation:isolate" fill="#fff" opacity=".25"/>' +
                '</svg>'
        },
        multi: true
    },
    {
        provide: SVG_ICON,
        useValue: {
            name: 'logo-app',
            svgSource: '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" width="100%" height="100%" fit=""> ' +
                '<g class="zuc-l-h-arrow"> ' +
                '    <rect class="zuc-l-a-line" x="6.57" y="13.79" width="6.25" height="1.79"/> ' +
                '    <polygon class="zuc-l-a-head" points="2.96 14.69 6.57 18.27 6.57 11.11 2.96 14.69"/> ' +
                '</g> ' +
                '<g class="zuc-r-h-arrow"> ' +
                '    <polygon class="zuc-r-a-head" points="21.04 9.31 17.43 12.89 17.43 5.73 21.04 9.31"/> ' +
                '    <rect class="zuc-r-a-line" x="11.18" y="8.42" width="6.25" height="1.79" transform="translate(28.6 18.63) rotate(180)"/> ' +
                '</g> ' +
                '<path class="zuc-u" d="M19.78,18.07c0,1.92-.9,2.88-2.71,2.88s-2.63-.94-2.63-2.81v-3.7H15.9v3.71q0,1.56,1.23,1.56t1.2-1.5V14.44h1.45Z"/> ' +
                '<path class="zuc-z" d="M9.51,9.56H4.22V8.71L7.59,4.24H4.46V3.05h5v.82L6.21,8.37h3.3Z"/> ' +
                '</svg>'
        },
        multi: true
    },
    {
        provide: SVG_ICON,
        useValue: {
            name: 'logo-myanmartools',
            svgSource: '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" width="100%" height="100%" fit=""> ' +
                '<path d="M13.5,12.7c-0.1,0.4-0.2,0.8-0.1,1.3c0.1,0.1,0.7,1.3,0.7,1.3s0.1,0.2,0.2,0.3c0,0.1,0,0.3-0.2,0.6c0,0-0.5,0.6-0.3,1.2' +
                'l0.7,0.7c0,0,0.2,1,0.4,1.5c0,0,0.4,0.8,0.3,0.9c0,0-0.4,1-0.7,1.5h4.3l2.7-4.6l-2.7-4.6h-5.3V12.7z" /> ' +
                '<path d="M14.1,20.4c0.2-0.2,0.1-1.4-0.2-1.6l-0.2-0.6l-0.3-0.1L13.1,17L13,15.3l-0.8-0.6l-1.5,2.6l2.7,4.6h0.7' +
                'C14.1,21.5,14,20.6,14.1,20.4z" /> ' +
                '<path d="M9.1,15.6c0,0,0.7-1.9-0.3-3.2c0,0-0.4,0-0.6-0.4c0,0,0.1-0.1,0.2-0.3c0,0-0.3-0.7-1.6-1.5V9.7c0-0.1,0.1-0.3,0.3-0.3h0.1' +
                'V9.1c0-0.2,0.1-0.3,0.3-0.3h0.2V8.1c0-0.2,0.2-0.3,0.3-0.3V7.6H5l-2.7,4.6L5,16.9h5.3l0.8-1.3L10.5,16C10.5,16,9.5,15.8,9.1,15.6z" /> ' +
                '<path d="M14,2.5c0,0,0.4,1,0,2.2c0,0-1.2,1.1-0.9,2c0,0,1.1-0.6,1.2-0.2l0.3,0.8c0,0,0.4,0.1,0.6,0.3c0,0-0.1,0.9-0.2,0.9' +
                'c0.1,0,0.5-0.2,0.6,0c0,0,0.5,0.6,0.4,0.7h0.7c0,0,0.7-0.3,0.2,0.3c0,0-0.5,0.7-1.2,1.2c0,0-0.3,0.3-0.6,0.5H19l2.7-4.6L19,2h-5.3' +
                'c0.1,0.1,0.2,0.3,0.2,0.6H14V2.5z" /> ' +
                '</svg>'
        },
        multi: true
    },
    {
        provide: SVG_ICON,
        useValue: {
            name: 'logo-facebook',
            svgSource: '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" width="100%" height="100%" fit=""> ' +
                '<path d="M22,12.1c0-5.5-4.5-10-10-10c-5.5,0-10,4.5-10,10c0,5,3.7,9.1,8.4,9.9v-7H7.9v-2.9h2.5V9.9c0-2.5,1.5-3.9,3.8-3.9' +
                'c1.1,0,2.2,0.2,2.2,0.2v2.5h-1.3c-1.2,0-1.6,0.8-1.6,1.6v1.9h2.8L15.9,15h-2.3v7C18.3,21.2,22,17.1,22,12.1z"/> ' +
                '</svg>'
        },
        multi: true
    },
    {
        provide: SVG_ICON,
        useValue: {
            name: 'logo-youtube',
            svgSource: '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" width="100%" height="100%" fit=""> ' +
                '<path d="M21.6,7.2c-0.2-0.8-0.9-1.5-1.7-1.7C18.3,5,12,5,12,5S5.8,5,4.2,5.4C3.3,5.7,2.7,6.3,2.4,7.2C2.1,8.8,2,10.4,2,12' +
                'c0,1.6,0.1,3.2,0.4,4.8c0.2,0.8,0.9,1.5,1.7,1.7C5.7,19,12,19,12,19s6.3,0,7.8-0.4c0.8-0.2,1.5-0.9,1.7-1.7c0.3-1.6,0.4-3.2,0.4-4.8' +
                'C22,10.4,21.9,8.8,21.6,7.2z M10,15V9l5.2,3L10,15z"/> ' +
                '</svg>'
        },
        multi: true
    },
    {
        provide: SVG_ICON,
        useValue: {
            name: 'logo-medium',
            svgSource: '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" width="100%" height="100%" fit=""> ' +
                '<path d="M2,2v20h20V2H2z M18.6,6.7l-1.1,1c-0.1,0.1-0.1,0.2-0.1,0.3v7.6c0,0.1,0,0.2,0.1,0.3l1,1v0.2h-5.3V17l1.1-1.1' +
                'c0.1-0.1,0.1-0.1,0.1-0.3V9.5l-3,7.7h-0.4L7.6,9.5v5.1c0,0.2,0,0.4,0.2,0.6l1.4,1.7v0.2h-4v-0.2l1.4-1.7c0.2-0.2,0.2-0.4,0.2-0.6' +
                'V8.7c0-0.2,0-0.3-0.2-0.4L5.3,6.7V6.5h3.9l3,6.6l2.6-6.6h3.7V6.7z"/> ' +
                '</svg>'
        },
        multi: true
    },
    {
        provide: SVG_ICON,
        useValue: {
            name: 'logo-github',
            svgSource: '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" width="100%" height="100%" fit=""> ' +
                '<path d="M12,2.2c-5.5,0-10,4.5-10,10c0,4.4,2.9,8.2,6.8,9.5c0.5,0.1,0.7-0.2,0.7-0.5c0-0.2,0-0.9,0-1.7c-2.8,0.6-3.4-1.3-3.4-1.3' +
                'C5.7,17.1,5,16.7,5,16.7c-0.9-0.6,0.1-0.6,0.1-0.6c1,0.1,1.5,1,1.5,1C7.5,18.7,9,18.3,9.5,18c0.1-0.6,0.3-1.1,0.6-1.3' +
                'c-2.2-0.3-4.6-1.1-4.6-4.9c0-1.1,0.4-2,1-2.7C6.5,8.8,6.2,7.8,6.7,6.4c0,0,0.8-0.3,2.7,1c0.8-0.2,1.7-0.3,2.5-0.3' +
                'c0.8,0,1.7,0.1,2.5,0.3c1.9-1.3,2.7-1,2.7-1c0.5,1.4,0.2,2.4,0.1,2.6c0.6,0.7,1,1.6,1,2.7c0,3.8-2.3,4.7-4.6,4.9' +
                'c0.3,0.3,0.7,0.9,0.7,1.8c0,1.3,0,2.4,0,2.7c0,0.3,0.2,0.6,0.7,0.5c4-1.3,6.9-5.1,6.9-9.5C22,6.7,17.5,2.2,12,2.2"/> ' +
                '</svg>'
        },
        multi: true
    },
    {
        provide: SVG_ICON,
        useValue: {
            name: 'logo-gitter',
            svgSource: '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" width="100%" height="100%" fit=""> ' +
                '<path d="M9.1,5.3h1.7V22H9.1V5.3z M14.9,5.3V22h-1.7V5.3H14.9z M4.9,2h1.7v12.5H4.9V2z M17.4,5.3h1.7v9.2h-1.7V5.3z"/> ' +
                '</svg>'
        },
        multi: true
    },
    {
        provide: SVG_ICON,
        useValue: {
            name: 'logo-messenger',
            svgSource: '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" width="100%" height="100%" fit=""> ' +
                '<path d="M2,11.7C2,6.1,6.4,2,12,2s10,4.1,10,9.7s-4.4,9.7-10,9.7c-1,0-2-0.1-2.9-0.4c-0.2,0-0.4,0-0.5,0l-2,0.9' +
                'c-0.4,0.2-0.9,0-1.1-0.4c0-0.1-0.1-0.2-0.1-0.3l-0.1-1.8c0-0.2-0.1-0.4-0.3-0.6C3.1,17,2,14.4,2,11.7z M8.9,9.9L6,14.5' +
                'c-0.3,0.4,0.3,0.9,0.7,0.6l3.2-2.4c0.2-0.2,0.5-0.2,0.7,0l2.3,1.7c0.7,0.5,1.7,0.3,2.2-0.4L18,9.5c0.3-0.4-0.3-0.9-0.7-0.6l-3.2,2.4' +
                'c-0.2,0.2-0.5,0.2-0.7,0l-2.3-1.7C10.4,9,9.5,9.1,9,9.8C9,9.8,9,9.8,8.9,9.9z"/>' +
                '</svg>'
        },
        multi: true
    }
];
