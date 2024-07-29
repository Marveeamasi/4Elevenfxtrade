'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function CryptoSlider() {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=7d');
        setCryptoData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCryptoData();
  }, []);

  const sliderSettings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  if (loading) {
    return <div className='w-full flex items-center justify-center font-bold text-col dark-bg'>Loading...</div>;
  }

  if (error) {
    return <div className='w-full flex items-center justify-center font-bold text-col dark-bg'>Please check you internet connection</div>;
  }

  function trim(str) { 
    return str.length > 5 ? str.substring(0, 8) + '..' : str;
  }

  return (
    <div className="bg-[#000]">
    <Slider {...sliderSettings}>
      {cryptoData.map((coin) => (
        <div key={coin.id} className="p-3">
        <div className='p-3 flex justify-center items-center flex-col max-sm:shadow-glow rounded-lg'>
          <img src={coin.image} alt={coin.name} className='w-8 rounded-full h-auto bg'/>
          <div className='text-sm text-col font-bold'>{trim(coin.name)}</div>
          <p>${coin.current_price}</p>
        </div>
        </div>
      ))}
    </Slider>
    </div> 
  );

}
