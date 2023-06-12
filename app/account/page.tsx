import { useEffect } from "react";

import Hero from "@/components/Hero";

import styles from "./page.module.scss";

const Account = () => {
  return (
    <main>
      <Hero
        title="Profilo personale"
        crumb={["Home", "Account"]}
        href={["/", "/account"]}
      />

      <section></section>
    </main>
  );
};

export default Account;
