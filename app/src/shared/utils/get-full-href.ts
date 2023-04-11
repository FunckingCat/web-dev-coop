export const getFullHref = (isHashRouter = true) => {
  const { origin, pathname } = window.location;
  const fullHref = `${origin}${pathname}`;

  if (isHashRouter) {
    return `${fullHref}#`;
  }

  return fullHref;
};
