import Link from "./Link";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        Accordion
      </Link>
      <Link href="/list" className="item">
        Search
      </Link>
      <Link href="/dropdown" className="item">
        Dropdown
      </Link>
      <Link href="/translate" className="item">
        Translate
      </Link>
      <Link href="/increment" className="item">
        Increment
      </Link>
      <Link href="/news" className="item">
        News
      </Link>
    </div>
  );
};

export default Header;
