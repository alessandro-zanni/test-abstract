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
    <GridItem area="header" bg="blue.300">
      <Header />
    </GridItem>
    <GridItem area="main" bg="red.300">
      <Outlet />
    </GridItem>
    <GridItem area="footer" bg="yellow.300">
      Footer
    </GridItem>
  </Grid>
);
