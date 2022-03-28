import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties, FC } from "react";

interface ActiveLinkProps {
  text: string;
  href: string;
}

const ActiveLink: FC<ActiveLinkProps> = ({ text, href }) => {

  const {asPath} = useRouter();

  const style: CSSProperties = {
    color: "#0070f3",
    textDecoration: "underline",
  };

  return (
    <Link href={href}>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  );
};

export default ActiveLink;
