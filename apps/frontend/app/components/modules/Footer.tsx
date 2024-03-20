import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <nav className="md:justify-self-end">
        <h6 className="footer-title">Services</h6>
        <Link to="/" className="link link-hover">
          Branding
        </Link>
        <Link to="/" className="link link-hover">
          Design
        </Link>
        <Link to="/" className="link link-hover">
          Marketing
        </Link>
        <Link to="/" className="link link-hover">
          Advertisement
        </Link>
      </nav>
      <nav className="md:justify-self-center">
        <h6 className="footer-title">Company</h6>
        <Link to="/" className="link link-hover">
          About us
        </Link>
        <Link to="/" className="link link-hover">
          Contact
        </Link>
        <Link to="/" className="link link-hover">
          Jobs
        </Link>
        <Link to="/" className="link link-hover">
          Press kit
        </Link>
      </nav>
      <nav className="md:justify-self-start">
        <h6 className="footer-title">Legal</h6>
        <Link to="/" className="link link-hover">
          Terms of use
        </Link>
        <Link to="/" className="link link-hover">
          Privacy policy
        </Link>
        <Link to="/" className="link link-hover">
          Cookie policy
        </Link>
      </nav>
    </footer>
  );
}
