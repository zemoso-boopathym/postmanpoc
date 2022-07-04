import React, { useContext, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../firebase/auth';
import LoadingSpinner from '../component/LoadingSpinner';

const GET_COINS = gql`
  query {
    Coins {
      imageUrl
      name
      rate
      symbol
    }
  }
`;

function CoinList() {
  const { error, loading, data } = useQuery(GET_COINS);
  const currentUser = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      return navigate('/login');
    }
  }, [currentUser, navigate]);

  if (loading) return <LoadingSpinner />;

  if (error) return <h1>Something went wrong!</h1>;

  return (
    <>
      <div className='container'>
        {data.Coins.map((coin, index) => (
          <div className='coins' key={`${coin.name}-${index}`}>
            <h2>{coin.name}</h2>
            <img src={coin.imageUrl} alt={coin.name} width='150' height='150' />
            <h3>{coin.symbol}</h3>
            <h4>{coin.rate}</h4>
          </div>
        ))}
      </div>
    </>
  );
}

export default CoinList;
