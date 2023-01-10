import { Left } from './Left';
import { Nav } from './Nav';
import { Right } from './Right';

export const Topbar = () => {
  return (
    <div>
      <Left />
      <Nav />
      <Right />
    </div>
  );
};
