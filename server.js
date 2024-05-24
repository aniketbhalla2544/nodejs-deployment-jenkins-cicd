const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    msg: 'Happy!! Nodejs api running.',
  });
});

app.get('/api/products', (req, res) => {
  res.json({
    products: [
      {
        id: 1,
        name: 'Eco-Friendly Yoga Mat',
        description:
          'Non-slip, environmentally friendly yoga mat made from natural rubber. Ideal for both beginners and advanced yoga practitioners.',
        price: 50.0,
        category: 'Fitness',
      },
      {
        id: 2,
        name: 'Smart Fitness Watch',
        description:
          'Advanced fitness tracker with heart rate monitor, GPS tracking, and 7-day battery life. Waterproof and suitable for all types of exercise.',
        price: 199.99,
        category: 'Electronics',
      },
      {
        id: 3,
        name: 'New product has been added',
        description:
          'Non-slip, environmentally friendly yoga mat made from natural rubber. Ideal for both beginners and advanced yoga practitioners.',
        price: 50.0,
        category: 'Fitness',
      },
      {
        id: 4,
        name: 'Aniket Product',
        description:
          'Non-slip, environmentally friendly yoga mat made from natural rubber. Ideal for both beginners and advanced yoga practitioners.',
        price: 50.0,
        category: 'Fitness',
      },
    ],
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
