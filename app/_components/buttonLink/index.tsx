import Styles from "./index.module.css";

type props = {
  href: string;
  children: React.ReactNode;
};

export default function ButtonLink({ href, children }: props) {
  return (
    <a href={href} className={Styles.button}>
      {children}
    </a>
  );
}
