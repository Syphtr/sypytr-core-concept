import { type MetaFunction } from "@remix-run/node";

// components
import Hero from "~/components/modules/Hero";
import Features from "~/components/modules/Features";
import Pricing from "~/components/modules/Pricing";
import SubscriptionBanner from "~/components/modules/SubscriptionBanner";

export const meta: MetaFunction = () => {
  return [
    { title: "Syphtr" },
    { name: "description", content: "Welcome to Syphtr!" },
  ];
};

export default function Index() {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <SubscriptionBanner />
    </>
  );
}
