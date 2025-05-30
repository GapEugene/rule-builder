const Layout = ({ title, children }) => {
  return (
    <div className="container py-2">
      <h1 className="h4 mb-3">{title}</h1>
      {children}
    </div>
  );
};

export default Layout;
