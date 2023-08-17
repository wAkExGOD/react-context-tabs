import { useState } from "react";
import { General, Security, Privacy, SectionWrapper, Sections, Tabs } from "..";
import { settingsTabs } from "../../constants";
import { TabsProvider } from "../../store/TabsContext";
import s from "./Settings.module.scss";

const getSettingsItem = (active: number) => {
  switch (active) {
    case settingsTabs[0].id:
      return <General />;
    case settingsTabs[1].id:
      return <Security />;
    case settingsTabs[2].id:
      return <Privacy />;
    default:
      console.warn("Uknown tab", active);
      return null;
  }
};

export const Settings: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState(settingsTabs[0].id);

  return (
    <TabsProvider value={{ activeTabId, setActiveTabId }}>
      <SectionWrapper>
        <h2 className={s.title}>Settings</h2>
        <div className={s.settings}>
          <div className={s.tabs}>
            <Tabs items={settingsTabs} />
          </div>
          <div className={s.section}>
            <Sections getItem={getSettingsItem} />
          </div>
        </div>
      </SectionWrapper>
    </TabsProvider>
  );
};
