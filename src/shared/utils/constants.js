export const menu = [
    {name: 'House Owners', route: '2'},
    {name: 'Flatmates', route: '3'},
    {name: 'Maintainance', route: '4'}, 
    {name: 'Property Management', route: '17'}
  ];

export const footerColumn = [
  {name: 'About Us', route: "6"},
  //{name: 'FAQs', route: ""}, 
  {name: 'Terms & Conditions', route: "8"}, 
  {name: 'Privacy Policy', route: "5"}
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