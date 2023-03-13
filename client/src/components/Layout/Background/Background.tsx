import { isMobile } from '@common/utils';
import { Box } from '@components';

import { IBackground } from './Background.types';

export const Background: React.FC<IBackground> = ({ children }) => {
  return (
    <Box
      py="24px"
      px={isMobile() ? '3%' : '12%'}
      backgroundColor="#eef7f4"
      width="100vw"
      minHeight="100vh"
    >
      {children}
    </Box>
  );
};
