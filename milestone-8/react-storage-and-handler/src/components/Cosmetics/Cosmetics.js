import React, { useEffect, useState } from 'react';
// import { add } from '../utilities/calculate';
// import add from '../utilities/calculate';

const Cosmetics = () => {
  const [cosmetics, setCosmetics] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setCosmetics(data));
  }, []);

  return (
    <div>
      <h2>This is cosmetics components</h2>
      {cosmetics.map(cosmetic => {
        <Cosmetics key={cosmetic.id} cosmetic={cosmetic}></Cosmetics>;
      })}
      {/* <p>Total: {total}</p> */}
    </div>
  );
};

export default Cosmetics;
