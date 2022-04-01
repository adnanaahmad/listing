export const screens = {
  1: '/home',
  2: '/house-owners',
  3: '/flatmates',
  4: '/maintainance',
  5: '/privacy-policy',
  6: '/about-us',
  7: '/listing-detail',
  8: '/terms-and-condtions',
  9: '/9',
  10: '/10',
  11: '/enquire',
  12: '/12',
  13: '/13',
  14: '/14',
  15: '/15',
  16: '/16',
  17: '/property-management',
  18: '/18',
  19: '/19',
  20: '/20'
}

export const menu = [
    {name: 'House Owners', route: screens[2]},
    {name: 'Flatmates', route: screens[3]},
    {name: 'Maintainance', route: screens[4]}, 
    {name: 'Property Management', route: screens[17]}
  ];

export const footerColumn = [
  {name: 'About Us', route: screens[6]},
  //{name: 'FAQs', route: ""}, 
  {name: 'Terms & Conditions', route: screens[8]}, 
  {name: 'Privacy Policy', route: screens[5]}
];

export const baseURL = 'http://friendly-flats.herokuapp.com/api/v1';

export const apiRoute = {
    getRooms: '/rooms',
    enquiry: '/enquiries',
}
export const httpMethod = {
    get: 'get',
    post: 'post',
    put: 'put',
    patch: 'patch',
    delete: 'delete'
}
