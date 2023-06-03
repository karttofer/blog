import React from "react";

const Header = ({ children }) => {
  return <header>{children}</header>;
};

const Main = ({ children }, props) => {
  return <main>{children}</main>;
};

const Footer = ({ children }) => {
  return <footer>{children}</footer>;
};

const Article = ({ children }) => {
  return <article>{children}</article>;
};

const Layout = ({ children }) => {
  return <>{children}</>;
};

Layout.Main = Main;
Layout.Header = Header;
Layout.Footer = Footer;
Layout.Article = Article;

export default Layout;
