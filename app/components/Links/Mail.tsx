import Link from "next/link";

type Props = {};

const Mail = (props: Props) => {
  return (
    <Link
      href="#contactMe"
      className="font-medium text-xs sm:text-lg"
      onClick={() => alert("Contact clicked")}
    >
      Contact
    </Link>
  );
};

export default Mail;
