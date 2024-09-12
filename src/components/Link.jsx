function Link({ url, children }) {
  return (
    <a href={url} className="text-blue-500 hover:text-blue-700">
      {children}
    </a>
  );
}

export default Link;
