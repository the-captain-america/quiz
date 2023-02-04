const splitBy = (url) => {
  if (url.includes(':')) {
    return url.split(':');
  }
  return [url];
};

const breakdownOnly = (url) => (qantasAlias) => {
  const parts = splitBy(url);
  const initialPart = parts.map((curr) =>
    curr.replace('github.com', `${qantasAlias}:`)
  );
  return initialPart.join('');
};

const breakdownUrl = (url) => (isQantas) => (qantasAlias) => {
  //   git@github_qantas
  const parts = splitBy(url);
  if (isQantas) {
    const initialPart = parts.map((curr) =>
      curr.replace('github.com', `${qantasAlias}:`)
    );
    return initialPart.join('');
  }
  return url;
};

export { breakdownUrl, breakdownOnly };
