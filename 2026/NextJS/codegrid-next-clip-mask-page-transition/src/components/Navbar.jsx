import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar" style={{ viewTransitionName: "navbar" }}>
      <div className="navbar-logo">
        <div className="navbar-item">
          <Link href="/">Aethos</Link>
        </div>
      </div>
      <div className="navbar-items">
        <div className="navbar-item">
          <Link href="/">Genesis</Link>
        </div>
        <div className="navbar-item">
          <Link href="/gateway">Gateway</Link>
        </div>
        <div className="navbar-item">
          <Link href="/colony">Colony</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
