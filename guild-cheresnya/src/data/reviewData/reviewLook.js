
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