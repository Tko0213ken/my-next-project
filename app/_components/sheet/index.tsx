import Styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <div className={Styles.container}>{children}</div>
    </>
  );
}
