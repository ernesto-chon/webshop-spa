import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="flex justify-between gap-4 text-lg">
      <Link to="/">home</Link>
      <Link to="/products">products</Link>
      <Link to="/my-account">My Account</Link>
      <Link to="/who-we-are">who-we-are</Link>
      <Link to="/404">404</Link>
      <Link to="/a-terrible-place-to-be">Something terrible</Link>
    </div>
  );
}
