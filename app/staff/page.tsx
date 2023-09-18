"use client";

import executeQuery from "@/utils/connector";

import Image from "next/image";
import { useEffect, useState } from "react";

import Hero from "@/components/Hero";
import SectionDescriptor from "@/components/home/SectionDescriptor";
import CardStaff from "@/components/staff/CardStaff";
import styles from "./page.module.scss";

const Staff = async () => {
  let [users, setUsers]: any = useState(null);

  const getUsers = async () => {
    let usr = await fetch(`http://localhost:3002/api/staff`);
    let json = await usr.json();

    console.log(json);

    setUsers(json);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <main>
      <Hero
        title="Membri dello Staff"
        crumb={["Home", "Staff"]}
        href={["/", "/staff"]}
      />

      <section className={styles.staff}>
        <SectionDescriptor
          title="Il nostro staff"
          description="Soltanto i giocatori scritti qui sotto fanno realmente parte dello staff del network, quindi diffida di tutti gli altri"
        />

        <div className={styles.staffWrapper}>
          {users?.map((user: any, i: any, arr: any) =>
            i < arr.length - 1 &&
            user.primary_group == arr[i + 1].primary_group ? (
              <CardStaff
                key={user.username}
                username={user.username}
                uuid={user.uuid}
                tag={user.primary_group}
                color={user.color}
              />
            ) : (
              <>
                <CardStaff
                  key={user.username}
                  username={user.username}
                  uuid={user.uuid}
                  tag={user.primary_group}
                  color={user.color}
                />
                <div className={styles.lineBreak}></div>
              </>
            )
          )}
        </div>
      </section>
    </main>
  );
};

export default Staff;
