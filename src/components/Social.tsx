import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

interface SocialProps {
  containerStyles: string;
  iconStyles: string;
}

const socials = [
  {
    icon: <FaGithub />,
    path: "",
  },
  {
    icon: <FaLinkedinIn />,
    path: "",
  },
  {
    icon: <FaTwitter />,
    path: "",
  },
];

export default function Social({ containerStyles, iconStyles }: SocialProps) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}
