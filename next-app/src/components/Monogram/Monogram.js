import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="46"
      height="29"
      viewBox="0 0 46 29"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M 12.65 0.475 L 12.65 0 L 20 0 A 21.006 21.006 0 0 1 21.971 0.086 Q 24.295 0.306 25.625 1.088 A 3.543 3.543 0 0 1 27.266 3.287 Q 27.446 3.929 27.471 4.714 A 8.117 8.117 0 0 1 27.475 4.975 A 6.629 6.629 0 0 1 27.297 6.567 A 3.952 3.952 0 0 1 25.225 9.25 A 8.258 8.258 0 0 1 23.499 9.884 Q 21.795 10.318 19.426 10.325 A 26.363 26.363 0 0 1 19.35 10.325 L 19.15 10.325 L 19.15 17.025 L 22.275 17.025 L 22.275 17.5 L 12.65 17.5 L 12.65 17.025 L 14.275 17.025 L 14.275 0.475 L 12.65 0.475 Z M 3.75 0.475 L 3.75 0 L 11.875 0 L 11.875 0.475 L 10.5 0.475 L 10.5 11.275 A 11.845 11.845 0 0 1 10.379 13.028 Q 10.245 13.927 9.959 14.644 A 4.55 4.55 0 0 1 8.975 16.188 Q 7.712 17.461 5.403 17.68 A 10.641 10.641 0 0 1 4.4 17.725 A 8.589 8.589 0 0 1 3.134 17.638 Q 2.483 17.54 1.948 17.335 A 4.035 4.035 0 0 1 1.188 16.95 Q 0 16.175 0 14.775 A 3.1 3.1 0 0 1 0.074 14.076 Q 0.194 13.56 0.505 13.192 A 1.934 1.934 0 0 1 0.6 13.088 A 1.988 1.988 0 0 1 1.646 12.532 A 2.925 2.925 0 0 1 2.238 12.475 A 3.259 3.259 0 0 1 2.821 12.524 Q 3.14 12.582 3.39 12.71 A 1.513 1.513 0 0 1 3.788 13 Q 4.3 13.525 4.3 14.263 A 4.213 4.213 0 0 1 4.104 15.516 A 4.877 4.877 0 0 1 4.025 15.75 L 3.05 15.75 Q 2.86 16.067 2.831 16.356 A 1.044 1.044 0 0 0 2.825 16.463 A 0.627 0.627 0 0 0 3.003 16.9 A 1.001 1.001 0 0 0 3.163 17.038 Q 3.459 17.246 3.918 17.272 A 2.373 2.373 0 0 0 4.05 17.275 A 1.928 1.928 0 0 0 4.529 17.22 Q 5.126 17.067 5.338 16.488 A 2.802 2.802 0 0 0 5.45 16.055 Q 5.596 15.282 5.62 13.734 A 41.591 41.591 0 0 0 5.625 13.075 L 5.625 0.475 L 3.75 0.475 Z M 19.825 0.475 L 19.15 0.475 L 19.15 9.85 L 19.675 9.85 A 3.405 3.405 0 0 0 20.446 9.769 Q 21.337 9.562 21.75 8.825 Q 22.236 7.959 22.311 6.182 A 16.135 16.135 0 0 0 22.325 5.5 L 22.325 4.3 A 13.305 13.305 0 0 0 22.292 3.317 Q 22.191 1.963 21.788 1.325 A 1.68 1.68 0 0 0 20.902 0.638 Q 20.604 0.531 20.234 0.494 A 4.152 4.152 0 0 0 19.825 0.475 Z" />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
