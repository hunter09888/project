import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Ricardo',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
      isSeller: true,
       seller: {
         name: 'Puma',
         logo: '/images/logo1.png',
         description: 'best seller',
         rating: 4.5,
         numReviews: 120,
       },
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Calvin Klein Slim Shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Calvin Klein',
      rating: 4.5,
      numReviews: 10,
      description: 'High Quality Product',
    },
    {
      name: 'Kenneth Cole Fitted Shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 100,
      countInStock: 20,
      brand: 'Kenneth Cole',
      rating: 4.0,
      numReviews: 10,
      description: 'High Quality Product',
    },
    {
      name: 'Lacoste Free Shirt',
      category: 'Shirts',
      image: '/images/p3.jpg',
      price: 220,
      countInStock: 0,
      brand: 'Lacoste',
      rating: 4.8,
      numReviews: 17,
      description: 'High Quality Product',
    },
    {
      name: 'Calvin Klein Slim Pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 78,
      countInStock: 15,
      brand: 'Calvin Klein',
      rating: 4.5,
      numReviews: 14,
      description: 'High Quality Product',
    },
    {
      name: 'Bar III Slim Pant',
      category: 'Pants',
      image: '/images/p5.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Bar III',
      rating: 4.5,
      numReviews: 10,
      description: 'High Quality Product',
    },
    {
      name: 'Kenneth Cole Fit Pant',
      category: 'Pants',
      image: '/images/p6.jpg',
      price: 139,
      countInStock: 12,
      brand: 'Kenneth Cole',
      rating: 4.5,
      numReviews: 15,
      description: 'High Quality Product',
    },
  ],
};
  export default data;