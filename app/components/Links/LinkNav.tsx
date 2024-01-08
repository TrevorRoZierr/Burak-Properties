import Link from "next/link";
import { ReactComponentElement } from "react";

const LinkNav = (props: {
  actualLink: string;
  linkName: string | ReactComponentElement<any>;
}) => {
  return (
    <div className="mt-1">
      <Link className="font-bold text-4xl sm:hidden" href={props.actualLink}>
        {props.linkName}
      </Link>
    </div>
  );
};

export default LinkNav;
