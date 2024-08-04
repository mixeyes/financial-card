import { Children, FC, ReactNode } from 'react';
import './styles/list.css';

interface ICardList {
  children: ReactNode;
}
export const CardList: FC<ICardList> = ({ children }) => {
  return (
    <div className='card-list'>
      {Children.map(children, (child) => (
        <div className='card-list__item'>{child}</div>
      ))}
    </div>
  );
};
