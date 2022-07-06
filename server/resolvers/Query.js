const BASE_URL = 'https://api.coinstats.app/public/v1/fiats';

exports.Query = {
  Coins: async () => {
    const res = await fetch(`${BASE_URL}`);
    return res.json();
  },
};
