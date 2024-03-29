import { Suspense } from "react";
import HeroBanner from "../components/HeroBanner.client";
import { Layout } from "../components/Layout.server";
import ServerTest from "./ServerTest.server";

export default function Home() {
  return (
    <Layout>
      <Suspense>
        <div className="text-center">
          <HeroBanner />
          <ServerTest />
        </div>
      </Suspense>
    </Layout>
  );
}
