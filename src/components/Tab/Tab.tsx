import { ITab } from '../../types';
import { useTabsContext } from '../../store/TabsContext';
import s from './Tab.module.scss';

export const Tab = (props: ITab) => {
  const { id, name } = props;

  const { activeTabId, setActiveTabId } = useTabsContext();

  return (
    <div
      className={[s.tab, activeTabId === id ? s.active : undefined].join(' ')}
      onClick={() => setActiveTabId(id)}
      >
      {name}
    </div>
  );
};