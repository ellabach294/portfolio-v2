import * as React from "react";

export const GitHubIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="rgba(255, 255, 255, 0)" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

export const LinkedInIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="rgba(255, 255, 255, 0)" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);

export const LinkArrow = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);

export const MailIcon = ({ className, ...rest }) => (
  <svg 
    fill= "none" 
    viewBox="0 0 24 24"
    className={`${className}`}
    {...rest}
  >
    <path stroke="#eee" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 8l-3.56 1.978c-1.986 1.103-2.979 1.655-4.03 1.87-.93.192-1.89.192-2.82 0-1.051-.215-2.044-.767-4.03-1.87L3 8m3.2 11h11.6c1.12 0 1.68 0 2.108-.218a2 2 0 00.874-.874C21 17.48 21 16.92 21 15.8V8.2c0-1.12 0-1.68-.218-2.108a2 2 0 00-.874-.874C19.48 5 18.92 5 17.8 5H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 00-.874.874C3 6.52 3 7.08 3 8.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874C4.52 19 5.08 19 6.2 19z"/>
  </svg>
);

export const PhoneIcon = ({ className, ...rest }) => (
  <svg 
    fill="none" 
    viewBox="0 0 24 24"
    className={`${className}`}
    {...rest}
  >
    <path stroke="#eee" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.05 6A5 5 0 0118 9.95M14.05 2A9 9 0 0122 9.94M18.5 21C9.94 21 3 14.06 3 5.5c0-.386.014-.77.042-1.148.032-.435.048-.653.162-.851a1.06 1.06 0 01.432-.402C3.842 3 4.082 3 4.562 3h2.817c.404 0 .606 0 .779.066a1 1 0 01.396.278c.122.14.191.33.329.71l1.166 3.206c.16.442.24.662.227.872a1 1 0 01-.182.513c-.121.171-.323.292-.725.534L8 10a12.1 12.1 0 006 6l.821-1.369c.242-.402.363-.604.534-.725a1 1 0 01.513-.182c.21-.014.43.066.872.227l3.207 1.166c.38.138.569.207.709.329a.999.999 0 01.277.396c.067.173.067.375.067.779v2.817c0 .48 0 .72-.1.926a1.06 1.06 0 01-.401.432c-.198.114-.416.13-.85.162-.38.028-.763.042-1.149.042z"/>
  </svg>
);

export const LocationIcon = ({ className, ...rest }) => (
  <svg 
    fill="none" 
    viewBox="0 0 24 24"
    className={`${className}`}
    {...rest}
  >
    <path stroke="#eee" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21c3.5-3.6 7-6.824 7-10.8C19 6.224 15.866 3 12 3s-7 3.224-7 7.2 3.5 7.2 7 10.8z"/><path stroke="#eee" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13a3 3 0 100-6 3 3 0 000 6z"/>
  </svg>
);




