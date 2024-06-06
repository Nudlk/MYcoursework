import React from 'react';
import '../reviewData/reviewLook.css'

const RewData = [
  {
    image: "images/Castle.jpg",
    gamename: "Castlevania: HoD",
    additionalText: ['Additional Text 1.1', 'Additional Text 1.2']
  },
  {
    image: "images/pvz.JPG",
    gamename: "Plants vs Zombies",
    additionalText: ['Additional Text 2.1', 'Additional Text 2.2']
  },
  {
    image: "images/ROR2.JPG",
    gamename: "Risk of Rain 2",
    additionalText: ['Additional Text 3.1', 'Additional Text 3.2']
  }
];

const ImageWithGameName = ({ image, gamename, additionalText}) => (
  <div className="Rew">
    <img src={image} alt={gamename} />
    <p>{gamename}</p>
  </div>
);

const Look = () => (
  <div className='Rew'>
    {RewData.map(item => (
      <ImageWithGameName
        key={item.gamename}
        image={item.image}
        gamename={item.gamename}
        additionalText={item.additionalText}
      />
    ))}
  </div>
);
export default Look;