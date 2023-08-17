import { Tab } from '../';
import { ITab } from '../../types';

type Props = {
  items: ITab[],
}

export const Tabs: React.FC<Props> = ({ items }) => {
  return (
    <>
      {items.map(({ id, name }) => (
        <Tab
          key={id}
          id={id}
          name={name}
        />
      ))}
    </>
  );
};