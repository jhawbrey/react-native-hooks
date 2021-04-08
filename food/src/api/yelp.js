import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
      Authorization: 'Bearer nhW7hdOgNFN1bn5gaTGHZBy4itaomBeBFaI3omzL5VxXnQa7Mf40KtRNi7nKJfBPJtYMxEm8L5ITTOn4000Sm1eSSissO2qBov92mva7qSRqCDzeukwQDcIhywNSXXYx'
    }
});