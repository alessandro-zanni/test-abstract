import { Grid, GridItem } from '@chakra-ui/react';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components';
import { FOOTER_HEIGHT, HEADER_HEIGHT } from '../../utils/constants';

export const MainLayout: FC = () => (
  <Grid
    templateAreas={`"header"
                    "main"
                    "footer"`}
    gridTemplateRows={`${HEADER_HEIGHT}px 1fr ${FOOTER_HEIGHT}px`}
    gridTemplateColumns="1fr"
    gap="0"
    minH="100vh"
  >
    <GridItem area="header" borderBottom="1px solid" borderColor="blue.500">
      <Header />
    </GridItem>
    <GridItem area="main">
      <Outlet />
    </GridItem>
    <GridItem area="footer" bg="blue.500">
      Footer
    </GridItem>
  </Grid>
);
