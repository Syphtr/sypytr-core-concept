import { Outlet, json, useLocation, Link } from "@remix-run/react";

export async function loader() {
  return json({ msg: "hello" });
}

export default function DashboardRoute() {
  const location = useLocation();

  return (
    <main>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          background: "blue",
          padding: "1rem",
          color: "white",
        }}
      >
        <nav>
          <ul>
            <li>
              <Link
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
                to="/"
              >
                Home
              </Link>
            </li>
          </ul>
        </nav>
        {location.pathname === "/dashboard/search" && <input type="text" />}
      </header>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "15rem 1fr",
        }}
      >
        <aside
          style={{
            background: "red",
            height: "100vh",
            padding: "1rem",
          }}
        >
          <>
            <p style={{ color: "white" }}>
              <Link
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
                to="/dashboard"
                className="text-blue-600 underline"
              >
                Overview page
              </Link>
            </p>
            <p style={{ color: "white" }}>
              <Link
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
                to="search"
                className="text-blue-600 underline"
              >
                Search page
              </Link>
            </p>
            <p style={{ color: "white" }}>
              <Link
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
                to="jobs"
                className="text-blue-600 underline"
              >
                Jobs page
              </Link>
            </p>
          </>
        </aside>
        <div>
          <Outlet />
        </div>
      </div>
    </main>
  );
}
