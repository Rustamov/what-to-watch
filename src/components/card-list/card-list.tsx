import { useState } from 'react';

import type { Film } from '../../types/types';

import Card from '../card/card';

type CardListProps = {
    films: Film[];
};

const CardList = ({ films }: CardListProps): JSX.Element => {
  // Переменная activeOffer понадобится позже
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOffer, setActiveOffer] = useState<number | null>(null);

  const handleCardMouseMove = (id: number) => {
    setActiveOffer(id);
  };

  const handleCardMouseLeave = () => {
    setActiveOffer(null);
  };

  return (
    <div className="catalog__films-list">
      {films.map((offer) => (
        <Card
          key={offer.id}
          {...offer}
          onMouseMove={handleCardMouseMove}
          onMouseLeave={handleCardMouseLeave}
        />
      ))}
    </div>
  );
};

export default CardList;
