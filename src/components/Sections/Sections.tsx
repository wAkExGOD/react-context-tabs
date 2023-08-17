import { useTabsContext } from "../../store/TabsContext";

type SectionsProps = {
  getItem: (active: number) => React.ReactNode
}

export const Sections: React.FC<SectionsProps> = ({ getItem }) => {
  const { activeTabId } = useTabsContext();

  return getItem(activeTabId);
};