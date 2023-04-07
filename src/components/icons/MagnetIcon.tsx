import { SvgIcon, SvgIconProps } from '@mui/material';

export function MagnetIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width="24px"
        height="24px"
        viewBox="6.744 4.762 18.512 20.49"
      >
        <path
          fill="#D61D2A"
          d="M25.01 19.642c.729-5.762.396-14.879-9.009-14.879-9.412 0-9.741 9.13-9.011 14.892l4.871.014c-.652-4.243-.629-9.901 4.138-9.902 4.761 0 4.79 5.644 4.139 9.886l4.872-.011z"
        />
        <path
          fill="#CCC"
          d="M6.989 19.652c.336 2.657.898 5.6.898 5.6h5s-.634-3.054-1.026-5.6H6.989zM20.133 19.652c-.392 2.546-1.026 5.6-1.026 5.6h5s.562-2.942.898-5.6h-4.872z"
        />
      </svg>
    </SvgIcon>
  );
}
