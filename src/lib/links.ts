type linkType = {
  name: string;
  path: string;
};

type selectLinkType = {
  pathname: string;
  lng: string;
  home: string;
  services: string;
  resume: string;
  projects: string;
  contact: string;
};

export const selectLink = ({
  pathname,
  lng,
  home,
  services,
  resume,
  projects,
  contact,
}: selectLinkType) => {
  const links: linkType[] = [
    {
      name: home,
      path: `/${lng}`,
    },
    {
      name: services,
      path: verifyPath(pathname, lng, "services"),
    },
    {
      name: resume,
      path: verifyPath(pathname, lng, "resume"),
    },
    {
      name: projects,
      path: verifyPath(pathname, lng, "projects"),
    },
    {
      name: contact,
      path: verifyPath(pathname, lng, "contact"),
    },
  ];

  return links;
};

const verifyPath = (pathname: string, lng: string, changePath?: string) => {
  const defaultUrl = `/${lng}`; // /pt-BR ou /en-US
  const regex = `/${lng}\/([a-zA-Z-]+)/`;

  if (pathname && pathname.match(regex)) return defaultUrl;

  return defaultUrl.concat(`/${changePath}`);
};
