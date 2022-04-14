import * as React from 'react';
import FooterPrimary from '../../shared/components/footer-primary/footer-primary';
import ClientsReviewPage from '../../shared/pages/clients-review-page';
import ListingDetailPage from '../../shared/pages/listing-detail-page';
import WelcomePageVariantThree from '../../shared/pages/welcome-page-v3';
import {BrownTheme} from '../../shared/styles/themes/brown-theme';
import {LightTheme} from '../../shared/styles/themes/light-theme';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/styles';
import { menu } from '../../shared/utils/constants';
import axios from "axios";
import { baseURL, httpMethod, apiRoute } from '../../shared/utils/constants';
import {useLocation} from "react-router-dom";

const theme = createTheme();

function ScreenSeven() {
  const useEffect = React.useEffect;
  const search = useLocation().search;
  const listingId = new URLSearchParams(search).get('id');
  const [listingDetail, setListingDetail] = React.useState({});
  const detailPage = {
    theme: LightTheme,
    showButtonGroup: false,
    listingDetail
  };
  const welcomePage = {
    theme: BrownTheme,
    showButton: false,
    menu,
    listingDetail
  };
  useEffect(() => {
    const getListing = axios.create({
        baseURL: baseURL + apiRoute.getRooms + `/${listingId}`,
        method: httpMethod.get,
    });
    getListing().then( res => {
        const room = res.data.room;
        setListingDetail(prev => {
           return {...prev, ...{
               rent: room.rent,
               images: room.images,
               address: room.house.address.house_number + ' ' + room.house.address.street,
               description: room.description,
               bath: room.house.number_of_washrooms || 0,
               bed: room.house.number_of_bedrooms || 0,
               id: room.id
           }}
        })
    }).catch(err => {
        console.log(err);
    });
}, [listingId]);
  return (
    <React.Fragment>
        <ThemeProvider theme={theme}>
          <WelcomePageVariantThree data={welcomePage}/>
          <ListingDetailPage data={detailPage}/>
          <ClientsReviewPage/>
          <FooterPrimary/>
        </ThemeProvider>
    </React.Fragment>
  );
}

export default ScreenSeven;