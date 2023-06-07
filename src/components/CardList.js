import React from 'react';
import Card from './Card';

const CardList = ({ movieslist }) => {
  return (
    <div>
      {
        movieslist.map((user, i) => {
          return (
            <Card
              key={i}
              id={movieslist[i].id}
              name={movieslist[i].name}
              phone={movieslist[i].phone}
              email={movieslist[i].email}
              rating={movieslist[i].rating}
              release={movieslist[i].release}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;