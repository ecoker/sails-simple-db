import React from 'react';

export default function Logo() {
    return (
        <svg className="logo-wide" viewBox="0 0 175 50">
            <g fill="currentColor">
                <path d="M57.904 13.975h-2.878c-.282 0-.51-.228-.51-.51v-2.697c0-.282.228-.51.51-.51h10.45c.283 0 .51.228.51.51v2.697c0 .282-.227.51-.51.51H62.64c-.227 0-.41.183-.41.408v23.344c0 .282-.23.51-.51.51h-2.896c-.282 0-.512-.228-.512-.51V14.383c0-.225-.182-.408-.408-.408zm25.633 12.31c.23 0 .413-.187.41-.415-.058-3.703-.888-5.86-2.276-5.86-1.35 0-2.33 1.83-2.5 5.85-.01.23.18.426.41.426h3.96zm-8.14 1.8v-.84c0-6.995 2.876-10.632 6.274-10.632 3.52 0 5.88 3.718 5.88 10.632v1.466c0 .34-.27.62-.61.62h-7.31c-.24 0-.42.21-.41.44.3 3.76 1.93 5.28 3.81 5.28 1.16 0 1.98-.35 3.02-.99.33-.2.75.01.78.39l.21 2.3c.02.24-.09.47-.29.59-1.44.86-2.59 1.28-4.22 1.28-3.83 0-7.11-3.55-7.11-10.51l-.02-.02zM105.06 10.26h2.937c.282 0 .51.228.51.51v11.11c0 .226.183.41.41.41h4.74c.224 0 .407-.184.407-.41V10.768c0-.282.228-.51.51-.51h2.896c.282 0 .51.228.51.51v26.96c0 .28-.228.51-.51.51h-2.896c-.282 0-.51-.23-.51-.51V26.454c0-.226-.183-.41-.408-.41h-4.74c-.226 0-.408.184-.408.41v11.272c0 .282-.23.51-.51.51h-2.937c-.28 0-.51-.228-.51-.51v-26.96c0-.28.23-.51.51-.51v.004zm24.82 17.906v-1.12c0-4.597-1.08-7.035-2.6-7.035-1.56 0-2.64 2.44-2.64 7.04v1.12c0 4.6 1.08 7.04 2.64 7.04 1.52 0 2.6-2.43 2.6-7.03v-.01zm-9.03-.025v-1c0-6.79 2.8-10.51 6.44-10.51 3.64 0 6.4 3.72 6.4 10.52v1c0 6.8-2.8 10.47-6.39 10.47-3.64 0-6.43-3.67-6.43-10.47l-.02-.01zm30.06 9.15v-2.62c0-.37.4-.62.74-.46 1.31.63 2.47.97 3.507.94 1.136-.03 2.037-.95 2.037-2.09v-.02c0-1.08-.48-2-2.68-4.07-2.44-2.4-3.714-4.24-3.714-6.76v-.08c0-3.36 2.354-5.43 5.672-5.43 1.183 0 2.11.13 3.13.48.205.07.345.268.345.487v2.597c0 .36-.37.61-.704.47-.86-.367-1.734-.587-2.61-.587-1.28 0-2.12.76-2.12 1.88v.08c0 1.04.48 1.76 2.76 4.034 2.755 2.64 3.634 4.36 3.634 6.76v.08c0 3.473-2.52 5.67-5.68 5.67-1.364 0-2.727-.34-3.997-.86-.193-.08-.32-.26-.32-.47v-.02zm-2.79-20.32h-2.777c-.285 0-.51.23-.51.51v14.36c0 1.88-1.006 3.4-2.24 3.4-1.238 0-2.24-1.52-2.24-3.39v-14.4c0-.28-.23-.51-.51-.51h-2.778c-.285 0-.51.23-.51.51v14.36c0 3.758 2.7 6.8 6.032 6.8s6.034-3.044 6.034-6.797V17.44c0-.28-.23-.51-.51-.51l.01.037zm-80.74-.03h2.776c.28 0 .51.23.51.51v1.77c0 .11.15.14.19.04.635-1.42 1.63-2.44 3.147-2.55.293-.022.54.217.54.51v3.515c0 .265-.2.487-.46.51-2.287.195-3.418 1.873-3.418 4.777v11.72c0 .284-.23.513-.52.513h-2.77c-.28 0-.51-.23-.51-.51v-20.3c0-.283.23-.51.51-.51h.006zm30.285 9.36c.23 0 .413-.19.41-.413-.058-3.703-.888-5.86-2.276-5.86-1.36 0-2.33 1.83-2.51 5.85-.01.23.18.426.41.426h3.96zm-8.14 1.8v-.84c0-6.993 2.877-10.63 6.274-10.63 3.51 0 5.87 3.72 5.87 10.64v1.47c0 .34-.28.62-.62.62h-7.3c-.24 0-.43.21-.41.44.29 3.76 1.92 5.28 3.81 5.28 1.15 0 1.98-.35 3.01-.99.32-.2.74.01.78.39l.21 2.3c.02.24-.1.47-.3.59-1.44.86-2.59 1.28-4.23 1.28-3.84 0-7.12-3.553-7.12-10.51l.01-.036zm72.77 0v-.84c0-6.993 2.877-10.63 6.274-10.63 3.51 0 5.87 3.72 5.87 10.633v1.465c0 .33-.28.61-.62.61h-7.3c-.24 0-.43.2-.41.44.29 3.75 1.92 5.27 3.81 5.27 1.15 0 1.98-.35 3.01-.99.32-.2.74.01.78.39l.21 2.3c.02.23-.1.46-.3.58-1.44.86-2.59 1.27-4.23 1.27-3.83 0-7.11-3.56-7.11-10.51l.01.016zm8.14-1.8c.23 0 .413-.19.41-.412-.058-3.702-.888-5.86-2.276-5.86-1.36 0-2.33 1.83-2.51 5.85-.01.23.17.427.41.427h3.96zM26.822 30.51l6.675-5.64c.21-.178.238-.494.06-.705l-1.695-2.006c-.178-.21-.494-.24-.704-.06l-4.336 3.66v-8.33c0-.28-.223-.5-.5-.5h-2.644c-.276 0-.5.22-.5.5v8.33l-4.335-3.66c-.21-.18-.526-.15-.705.06l-1.694 2c-.18.21-.152.52.06.7l6.674 5.64v4.1h-8.152c-.47 0-.854-.39-.854-.86V20.15c0-.252.11-.49.302-.652l9.975-8.427c.19-.16.4-.2.55-.2.14 0 .35.04.55.2l9.97 8.43c.19.17.3.4.3.66v13.59c0 .48-.39.86-.86.86h-8.15v-4.1h.01zm0 15.782v-8.06h8.152c2.47 0 4.48-2.01 4.48-4.48V20.155c0-1.323-.58-2.57-1.59-3.423L27.89 8.306C27.085 7.624 26.06 7.25 25 7.25c-1.057 0-2.083.374-2.89 1.057l-9.975 8.426c-1.01.853-1.59 2.1-1.59 3.423V33.75c0 2.47 2.01 4.48 4.48 4.48h8.153v8.062C12.226 45.367 3.625 36.192 3.625 25c0-11.805 9.57-21.375 21.375-21.375S46.375 13.195 46.375 25c0 11.19-8.6 20.367-19.553 21.292zM25 0C11.193 0 0 11.193 0 25s11.193 25 25 25 25-11.193 25-25S38.807 0 25 0z"></path>
            </g>
        </svg>
    )
}