import Link from "next/link";

type Props = {};

const Mail = (props: Props) => {
  return (
    <Link
      href="#contactMe"
      className="font-medium text-md sm:text-xl"
    >
      Contact
    </Link>
  );
};

export default Mail;
