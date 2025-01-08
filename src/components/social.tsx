import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

interface SocialProps {
  containerStyles: string;
  iconStyles: string;
}

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/ecblandy",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://linkedin.com/in/viniciusblandy/",
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
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}
