import { type FunctionComponent } from 'react'

export const Arc: FunctionComponent = () => {
  return (
    <svg width="200" height="95">
      <path
        d="M 10 100 A 90 90 0 0 1 190 100"
        stroke="#e5e7eb"
        strokeWidth="12"
        fill="transparent"
      />
    </svg>
  );
};
