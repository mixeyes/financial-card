import { FC } from 'react';

interface IAsideProps {
  children: React.ReactNode;
}

export const Aside: FC<IAsideProps> = ({ children }) => {
  return <aside>{children}</aside>;
};
