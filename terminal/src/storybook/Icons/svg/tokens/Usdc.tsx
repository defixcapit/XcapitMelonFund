import React, { SVGProps } from 'react';

const SvgUsdc = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" {...props}>
    <image
      width={32}
      height={32}
      xlinkHref="data:image/png;base64,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"
      fill="none"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgUsdc;