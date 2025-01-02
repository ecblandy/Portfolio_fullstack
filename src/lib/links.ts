interface LinksProps {
  name: string;
  path: string;
}

export const selectLink = (
  pathname: string,
  lng: string | string[] | undefined
) => {
  const links: LinksProps[] = [
    {
      name: "início",
      path: `/${lng}`,
    },
    {
      name: "serviços",
      path: verifyPath(pathname, lng, "services"),
    },
    {
      name: "resumo",
      path: verifyPath(pathname, lng, "resume"),
    },
    {
      name: "projetos",
      path: verifyPath(pathname, lng, "projects"),
    },
    {
      name: "contato",
      path: verifyPath(pathname, lng, "contact"),
    },
  ];

  return links;
};

const verifyPath = (
  path: string,
  lng: string | string[] | undefined,
  changePath?: string
) => {
  const defaultUrl = `/${lng}`; // /pt-BR ou /en-US
  const regex = `/${lng}\/([a-zA-Z-]+)/`;

  if (path.match(regex)) return defaultUrl;

  return defaultUrl.concat(`/${changePath}`);
};
