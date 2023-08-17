import { useState } from "react";
import { Tabs, Sections, Account, Settings } from "../../components";
import { mainTabs } from "../../constants";
import { TabsProvider } from "../../store/TabsContext";
import s from "./Profile.module.scss";

const getProfileItem = (active: number) => {
  switch (active) {
    case mainTabs[0].id:
      return <Account />;
    case mainTabs[1].id:
      return <Settings />;
    default:
      console.warn("Uknown tab", active);
      return null;
  }
};

export const Profile: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState(mainTabs[0].id);

  return (
    <TabsProvider value={{ activeTabId, setActiveTabId }}>
      <div className={s.profilePage}>
        <section className={s.profileInfoSection}>
          <div className={s.tabs}>
            <Tabs items={mainTabs} />
          </div>
          <Sections getItem={getProfileItem} />
        </section>
      </div>
    </TabsProvider>
  );
};
