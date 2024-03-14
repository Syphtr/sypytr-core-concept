import { ThemedLayoutV2, ThemedSiderV2, ThemedTitleV2 } from "@refinedev/antd";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { authProvider } from "~/authProvider";
import { Header } from "~/components/header";
import { AppIcon } from "~/components/app-icon";

export default function BaseLayout() {
  return (
    <ThemedLayoutV2
      Header={() => <Header sticky />}
      Sider={(props) => <ThemedSiderV2 {...props} fixed />}
      Title={({ collapsed }) => (
        <ThemedTitleV2
          collapsed={collapsed}
          text="Refine Project"
          icon={<AppIcon />}
        />
      )}
    >
      <Outlet />
    </ThemedLayoutV2>
  );
}

/**
 * We're checking if the current session is authenticated.
 * If not, we're redirecting the user to the login page.
 * This is applied for all routes that are nested under this layout (_protected).
 */
export async function loader({ request }: LoaderFunctionArgs) {
  const { authenticated, redirectTo } = await authProvider.check(request);

  if (!authenticated) {
    throw redirect(redirectTo ?? "/login");
  }

  return {};
}
