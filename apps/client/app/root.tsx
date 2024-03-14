import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { useNotificationProvider } from "@refinedev/antd";
import {  Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import routerProvider, {
  UnsavedChangesNotifier,
} from "@refinedev/remix-router";

import { ColorModeContextProvider } from "@contexts";
import resetStyle from "@refinedev/antd/dist/reset.css";
import dataProvider from "@refinedev/nestjsx-crud";
import { App as AntdApp } from "antd";
import { authProvider } from "~/authProvider";

const API_URL = "https://api.nestjsx-crud.refine.dev";

export const meta: MetaFunction = () => [
  {
    title: "New Remix + Refine App",
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <RefineKbarProvider>
          <ColorModeContextProvider>
            <AntdApp>

                <Refine
                  routerProvider={routerProvider}
                  dataProvider={dataProvider(API_URL)}
                  notificationProvider={useNotificationProvider}
                  authProvider={authProvider}
                  resources={[
                    {
                      name: "blog_posts",
                      list: "/blog-posts",
                      create: "/blog-posts/create",
                      edit: "/blog-posts/edit/:id",
                      show: "/blog-posts/show/:id",
                      meta: {
                        canDelete: true,
                      },
                    },
                    {
                      name: "categories",
                      list: "/categories",
                      create: "/categories/create",
                      edit: "/categories/edit/:id",
                      show: "/categories/show/:id",
                      meta: {
                        canDelete: true,
                      },
                    },
                  ]}
                  options={{
                    syncWithLocation: true,
                    warnWhenUnsavedChanges: true,
                    useNewQueryKeys: true,
                    projectId: "eOO8vW-Hchmod-1eK6ZE",
                  }}
                >
                  <>
                    <Outlet />
                    <UnsavedChangesNotifier />
                    <RefineKbar />
                  </>
                </Refine>

            </AntdApp>
          </ColorModeContextProvider>
        </RefineKbarProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: resetStyle }];
}
