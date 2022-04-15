const GradientBackground: React.FC = () => (
  <div className="fixed top-0 w-full h-3/5 overflow-hidden">
    <div className="absolute w-full h-full bg-gradient-to-t from-gray-50 z-10" />

    <svg
      viewBox="0 0 960 743"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="filter blur-[30px]"
      aria-hidden="true"
    >
      <defs>
        <path fill="#fff" d="M0 0h960v540H0z" id="reuse-0" />
      </defs>
      <g clipPath="url(#a)">
        <use xlinkHref="#reuse-0" />
        <path d="M960 0H0v743h960V0Z" fill="#7CFBEE" />
        <path
          d="M831 380c200.48 0 363-162.521 363-363s-162.52-363-363-363c-200.479 0-363 162.521-363 363s162.521 363 363 363Z"
          fill="#4F98D0"
        />
        <path
          d="M579 759c200.479 0 363-162.521 363-363S779.479 33 579 33 216 195.521 216 396s162.521 363 363 363Z"
          fill="#7CFBEE"
        />
        <path
          d="M178 691c200.479 0 363-162.521 363-363S378.479-35 178-35c-200.4794 0-363 162.521-363 363s162.5206 363 363 363Z"
          fill="#4F98D0"
        />
        <path
          d="M490 414c200.479 0 363-162.521 363-363S690.479-312 490-312 127-149.479 127 51s162.521 363 363 363Z"
          fill="#4F98D0"
        />
        <path
          d="M354 569c200.479 0 363-162.521 363-363 0-200.47937-162.521-363-363-363S-9 5.52063-9 206c0 200.479 162.521 363 363 363Z"
          fill="#7CFBEE"
        />
        <path
          d="M630 532c200.479 0 363-162.521 363-363 0-200.4794-162.521-363-363-363S267-31.4794 267 169c0 200.479 162.521 363 363 363Z"
          fill="#4F98D0"
        />
      </g>
      <path fill="#fff" d="M0 540h960v203H0z" />
      <defs>
        <clipPath id="a">
          <use xlinkHref="#reuse-0" />
        </clipPath>
      </defs>
    </svg>
  </div>
);

export default GradientBackground;