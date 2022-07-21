export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  ipAddress: string;
}

export const authors = [
  {
    id: 1,
    firstName: 'Flora',
    lastName: 'Twell',
    gender: 'Female',
    email: 'a@aa.com',
    ipAddress: '99.180.237.33',
  },
  {
    id: 2,
    firstName: 'Prisscella',
    lastName: 'Signe',
    gender: 'Male',
    email: 'b@bb.com',
    ipAddress: '183.243.228.65',
  },
  {
    id: 3,
    firstName: 'Pras',
    lastName: 'Geo',
    gender: 'Female',
    email: 'c@bb.com',
    ipAddress: '183.243.228.65',
  },
  {
    id: 4,
    firstName: 'Gu',
    lastName: 'Ba',
    gender: 'Female',
    email: 'd@bb.com',
    ipAddress: '183.243.228.65',
  },
  {
    id: 5,
    firstName: 'Fa',
    lastName: 'Me',
    gender: 'Male',
    email: 'e@bb.com',
    ipAddress: '183.243.228.65',
  },
];
