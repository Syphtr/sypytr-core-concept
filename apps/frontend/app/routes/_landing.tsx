import { Outlet } from "@remix-run/react";
import Header from "~/components/modules/Header";
import Footer from "~/components/modules/Footer";

export default function _layout() {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}
