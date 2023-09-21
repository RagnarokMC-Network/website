"use client";

import { useEffect, useState } from "react";

import Hero from "@/components/Hero";
import SectionDescriptor from "@/components/home/SectionDescriptor";
import CardStaff from "@/components/staff/CardStaff";
import styles from "./page.module.scss";
import utils from "@/utils/utils";

const Staff = () => {
  let [users, setUsers]: any = useState([]);

  useEffect(() => {
    fetch(`${utils.endpoint}/api/staff`)
      .then((res) => res.json())
      .then((json) => {
        setUsers(json);
      });
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
          {users?.map((user: any, i: any, arr: any) => {
            return i < arr.length - 1 &&
              user.primary_group == arr[i + 1].primary_group ? (
              <CardStaff
                key={user.uuid}
                username={user.username}
                uuid={user.uuid}
                tag={user.primary_group}
                color={user.color}
              />
            ) : (
              <>
                <CardStaff
                  key={i}
                  username={user.username}
                  uuid={user.uuid}
                  tag={user.primary_group}
                  color={user.color}
                />
                <div className={styles.lineBreak}></div>
              </>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Staff;
