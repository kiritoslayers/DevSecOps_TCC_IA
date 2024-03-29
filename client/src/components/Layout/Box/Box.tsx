import { Button, Box as MuiBox } from '@mui/material';

import { IBox } from './Box.types';

export const Box: React.FC<IBox> = ({
  borderColor,
  backgroundColor,
  width,
  height,
  flexDirection = 'column',
  gap,
  minHeight,
  minWidth,
  borderRadius,
  p,
  pt,
  pr,
  pb,
  pl,
  px,
  py,
  m,
  mt,
  mr,
  mb,
  ml,
  mx,
  my,
  onClick,
  style = {},
  children,
}) => {
  const shouldRenderMuiButton = onClick;

  return (
    <MuiBox
      component={shouldRenderMuiButton && Button}
      onClick={shouldRenderMuiButton}
      sx={{
        backgroundColor: backgroundColor,
        ...filterStyles(style).generalStyles,
        ':hover': {
          ...filterStyles(style).hoverStyles,
          backgroundColor: shouldRenderMuiButton && backgroundColor,
        },
      }}
      borderRadius={borderRadius}
      gap={gap}
      alignItems="initial"
      justifyContent="initial"
      display="flex"
      flexDirection={flexDirection}
      borderColor={borderColor}
      width={width}
      height={height}
      minHeight={minHeight}
      minWidth={minWidth}
      p={p}
      pt={pt}
      pr={pr}
      pb={pb}
      pl={pl}
      px={px}
      py={py}
      m={m}
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
      mx={mx}
      my={my}
    >
      {children}
    </MuiBox>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const filterStyles = (style: any) => {
  const stylePropContainsHover = Object.prototype.hasOwnProperty.call(
    style,
    ':hover'
  );

  if (stylePropContainsHover) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { [':hover']: _, ...rest } = style;

    return { generalStyles: rest, hoverStyles: style[':hover'] };
  } else {
    return { generalStyles: style };
  }
};
