import { Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import {
  ErrorComponent,
  ThemedLayoutV2,
  ThemedSiderV2,
  ThemedTitleV2,
  useNotificationProvider,
} from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import routerBindings, {
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { dataProvider as testProvider } from "./providers/data-provider";
import { App as AntdApp } from "antd";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { AppIcon } from "./components/app-icon";
import { Header } from "./components/header";
import { ColorModeContextProvider } from "./contexts/color-mode";
import { SearchList } from "./routes/search";

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <AntdApp>
            <Refine
              dataProvider={{ default: testProvider }}
              notificationProvider={useNotificationProvider}
              routerProvider={routerBindings}
              resources={[
                {
                  name: "search",
                  list: "/search",
                  // create: "/categories/create",
                  // edit: "/categories/edit/:id",
                  // show: "/categories/show/:id",
                  meta: {
                    canDelete: true,
                    label: "Search",
                  },
                },
                {
                  name: "job",
                  list: "/job",
                  // create: "/categories/create",
                  // edit: "/categories/edit/:id",
                  // show: "/categories/show/:id",
                  meta: {
                    canDelete: true,
                    label: "Jobs",
                  },
                },
                {
                  name: "admin",
                  list: "/admin",
                  // create: "/categories/create",
                  // edit: "/categories/edit/:id",
                  // show: "/categories/show/:id",
                  meta: {
                    canDelete: true,
                    label: "Admin",
                  },
                },
              ]}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                useNewQueryKeys: true,
                projectId: "KdI5Vm-clLnqA-ah49Sw",
              }}
            >
              <Routes>
                <Route
                  element={
                    <ThemedLayoutV2
                      Header={() => <Header sticky />}
                      Sider={(props) => <ThemedSiderV2 {...props} fixed />}
                      Title={({ collapsed }) => (
                        <ThemedTitleV2
                          collapsed={collapsed}
                          text="Syphtr"
                          icon={<AppIcon />}
                        />
                      )}
                    >
                      <Outlet />
                    </ThemedLayoutV2>
                  }
                >
                  <Route
                    index
                    element={<NavigateToResource resource="search" />}
                  />
                  <Route path="/search">
                    <Route index element={<SearchList />} />
                  </Route>
                  <Route path="*" element={<ErrorComponent />} />
                </Route>
              </Routes>

              <RefineKbar />
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
          </AntdApp>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
