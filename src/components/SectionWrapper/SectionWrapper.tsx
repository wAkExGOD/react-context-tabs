import s from "./SectionWrapper.module.scss";

export const SectionWrapper = ({
  children
}: React.PropsWithChildren) => {
  return (
    <div className={s.sectionWrapper}>
      {children}
    </div>
  );
};