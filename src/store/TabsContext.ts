import { createContext, useContext } from 'react';
import { ITabTabsContextData } from '../types';

const TabsContext = createContext<ITabTabsContextData | null>(null);
export const TabsProvider = TabsContext.Provider;

export const useTabsContext = () => {
  const data = useContext(TabsContext);

  if (!data) {
    throw new Error("Can not `useAppContext` outside of the TabsProvider");
  }

  return data;
}