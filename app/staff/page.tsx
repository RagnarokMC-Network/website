import { PrismaClient } from "@/prisma/generated/client_luckperms";

import Image from "next/image";

import Hero from "@/components/Hero";
import SectionDescriptor from "@/components/home/SectionDescriptor";
import CardStaff from "@/components/staff/CardStaff";
import styles from "./page.module.scss";

const getUsers = async () => {
  const prisma = new PrismaClient();

  const permissions = [
    "owner",
    "admin",
    "moderator+",
    "moderator",
    "builder",
    "helper",
  ];

  const permUsers = await prisma.luckperms_user_permissions.findMany();
  const permitted = permUsers.filter((el) => {
    if (permissions.some((al) => el.permission.includes(al))) {
      return el;
    }

    return;
  });

  const usernames = await prisma.luckperms_players.findMany();
  const permNames = usernames.filter((el) => {
    if (permitted.some((al) => al.uuid == el.uuid)) {
      return el;
    }
  });

  console.log(permNames);

  let res = permNames.sort(
    (a: any, b: any) =>
      permissions.indexOf(a.primary_group) -
      permissions.indexOf(b.primary_group)
  );

  return res;
};

const Staff = async () => {
  const users: any[] = await getUsers();

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
          {users.map((user, i, arr) =>
            i < arr.length - 1 &&
            user.primary_group == arr[i + 1].primary_group ? (
              <CardStaff
                key={i}
                username={user.username}
                uuid={user.uuid}
                tag={user.primary_group}
              />
            ) : (
              <>
                <CardStaff
                  key={i}
                  username={user.username}
                  uuid={user.uuid}
                  tag={user.primary_group}
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
