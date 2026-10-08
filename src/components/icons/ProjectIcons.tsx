import React from "react";

interface ProjectIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

/**
 * Sittax official logo from AssetsAndReferences/SubIcons/Sittax_icon.svg
 */
export function SittaxProjectIcon({ size = 48, ...props }: ProjectIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 132 132"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Sittax"
      {...props}
    >
      <path
        d="M104.226 110.481C81.4576 93.1079 49.6971 93.1079 26.9268 110.481L45.4212 128.999C57.7159 121.314 73.4343 121.314 85.7291 128.999L104.225 110.481H104.226Z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="white"
      />
      <path
        d="M21.649 105.198C39.0008 82.4014 39.0023 50.6015 21.6505 27.803L3.15463 46.3218C10.8294 58.6318 10.8308 74.3711 3.15605 86.6826L21.649 105.198Z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="white"
      />
      <path
        d="M26.9297 22.5188C49.6985 39.892 81.4576 39.892 104.226 22.5173L85.7349 3.99999C73.4401 11.6857 57.7218 11.6843 45.427 3.99854L26.9311 22.5173L26.9297 22.5188Z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="white"
      />
      <path
        d="M109.506 27.803C92.1539 50.6001 92.1524 82.3999 109.504 105.198L128 86.6796C120.325 74.3696 120.324 58.6303 127.999 46.3189L109.506 27.803Z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="white"
      />
    </svg>
  );
}

/**
 * Portfolio `</>` logo from AssetsAndReferences/SubIcons/Portfolio_icon.svg
 */
export function PortfolioProjectIcon({ size = 48, ...props }: ProjectIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 163 134"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Portfolio"
      {...props}
    >
      <path
        d="M51.759 39.5295L57.2884 33.748L45.7255 22.6891L40.1961 28.4705L45.9775 34L51.759 39.5295ZM12 69.526L6.21855 63.9965L0.888533 69.5694L6.26199 75.1005L12 69.526ZM40.2395 110.075L45.8141 115.813L57.2901 104.663L51.7155 98.9255L45.9775 104.5L40.2395 110.075ZM121.804 28.4705L116.274 22.6891L104.712 33.748L110.241 39.5295L116.022 34L121.804 28.4705ZM150 69.526L155.738 75.1005L161.111 69.5694L155.781 63.9965L150 69.526ZM110.284 98.9255L104.71 104.663L116.186 115.813L121.76 110.075L116.022 104.5L110.284 98.9255ZM45.9775 34L40.1961 28.4705L6.21855 63.9965L12 69.526L17.7814 75.0554L51.759 39.5295L45.9775 34ZM12 69.526L6.26199 75.1005L40.2395 110.075L45.9775 104.5L51.7155 98.9255L17.738 63.9515L12 69.526ZM116.022 34L110.241 39.5295L144.219 75.0554L150 69.526L155.781 63.9965L121.804 28.4705L116.022 34ZM150 69.526L144.262 63.9515L110.284 98.9255L116.022 104.5L121.76 110.075L155.738 75.1005L150 69.526ZM58.5 134L66.1499 136.341L107.15 2.34065L99.5 0L91.8501 -2.34065L50.8501 131.659L58.5 134Z"
        fill="white"
      />
    </svg>
  );
}

/**
 * Unity Tools logo from AssetsAndReferences/SubIcons/UnityTools_icon.svg
 */
export function UnityToolsProjectIcon({ size = 48, ...props }: ProjectIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 132 132"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Unity Tools"
      {...props}
    >
      <path
        d="M35.2759 88.0909L16.3103 99.4545L66.3793 129L117.207 99.4545L97.4828 88.0909L76.2414 99.4545V69.1515L100.517 54.7576C100.77 63.0909 101.124 79.7576 100.517 79.7576C99.9103 79.7576 113.92 87.3333 121 91.1212V33.5455L70.1724 4V25.9697L92.1724 38.8485L66.3793 53.2424L40.5862 38.8485L61.8276 25.9697V4L11 33.5455V91.1212L29.9655 79.7576V54.7576L56.5172 69.1515V99.4545L35.2759 88.0909Z"
        fill="white"
      />
    </svg>
  );
}

/**
 * ArtStation logo from AssetsAndReferences/SubIcons/Artstation_icon.svg
 */
export function ArtstationProjectIcon({ size = 48, ...props }: ProjectIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 132 132"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ArtStation"
      {...props}
    >
      <path
        d="M77.9865 12.5462C78.9899 12.8471 79.962 13.2761 80.7393 13.9785C81.643 14.795 82.2821 15.5852 82.2821 15.5852C82.2821 15.5852 89.4272 27.0259 104.311 52.976C115.66 72.7634 125.207 89.4639 125.527 90.088C125.917 90.8483 126.154 92.2075 126.247 94.2059C126.419 97.8858 126.45 97.8138 119.439 109.92L114.432 118.565L83.8156 65.5298C66.9767 36.3601 53.1484 12.3653 53.0862 12.2074C53.0213 12.0437 58.0169 11.962 64.7581 12.0171L75.0363 12.1011C76.0358 12.1093 77.029 12.2591 77.9865 12.5462ZM69.5724 76.6553C69.5724 76.7322 57.3899 76.7951 42.5001 76.7951C27.6104 76.7951 15.4278 76.702 15.4278 76.5879C15.4278 76.4741 21.5112 65.8439 28.9465 52.9653L42.4648 29.5496L56.0187 53.0324C63.4732 65.948 69.5724 76.5785 69.5724 76.6553ZM86.9181 106.48C90.6628 112.991 93.7753 118.459 93.8346 118.631C93.9037 118.83 81.3756 118.944 59.2587 118.944C25.4491 118.944 24.5222 118.927 22.5136 118.293C20.2328 117.574 17.8656 115.986 16.6265 114.343C16.1813 113.753 13.6693 109.549 11.0447 105.002C8.42019 100.455 5.98628 96.2605 5.63644 95.6808L5 94.6271L42.5546 94.6339L80.1095 94.6407L86.9181 106.48Z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="white"
      />
    </svg>
  );
}
