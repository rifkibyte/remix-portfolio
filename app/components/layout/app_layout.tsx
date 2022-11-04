import { Box } from '@chakra-ui/react';
import Footer from './footer';

export interface AppLayoutProps {
  children: React.ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <Box fontSize='xl' w={[`90%`, `85%`, `80%`]} maxW={800} mx='auto'>
        <Box pt={`7rem`} pb={10} minH='calc(100vh - 64px)'>
          {children}
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default AppLayout;
