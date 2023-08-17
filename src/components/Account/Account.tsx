import { SectionWrapper } from "..";
import s from "./Account.module.scss";

export const Account: React.FC = () => {
  return (
    <SectionWrapper>
      <h2 className={s.title}>Account</h2>
      <div className={s.account}>
        Account Info...
      </div>
    </SectionWrapper>
  );
};