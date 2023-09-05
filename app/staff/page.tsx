import executeQuery from "@/utils/connector";

import Image from "next/image";

import Hero from "@/components/Hero";
import SectionDescriptor from "@/components/home/SectionDescriptor";
import CardStaff from "@/components/staff/CardStaff";
import styles from "./page.module.scss";

const getUsers = async () => {
  const uPerms: any = await executeQuery({
    query: "SELECT * FROM luckperms_user_permissions",
    values: null,
    dbs: "s63_luckperms",
  });

  const permissions = [
    { id: "owner", color: "#bf0f0f" },
    { id: "admin", color: "#ebab34" },
    { id: "moderator+", color: "#349beb" },
    { id: "moderator", color: "#349beb" },
    { id: "builder", color: "#b90fbf" },
    { id: "helper+", color: "#2ca122" },
    { id: "helper", color: "#2ca122" },
  ];

  const permitted = uPerms.filter((el: any) => {
    if (permissions.some((al) => el.permission.includes(al.id))) {
      return el;
    }

    return;
  });

  console.log(permitted);

  const users: any = await executeQuery({
    query: "SELECT * FROM luckperms_players",
    values: null,
    dbs: "s63_luckperms",
  });

  if (!users) return [];

  const permNames = users.filter((el: any) => {
    if (permitted.some((al: any) => al.uuid == el.uuid)) {
      return el;
    }
  });

  let resColorless = permNames.sort(
    (a: any, b: any) =>
      permissions.findIndex((el) => el.id == a.primary_group) -
      permissions.findIndex((el) => el.id == b.primary_group)
  );

  let res = resColorless.map((el: any) => {
    // @ts-ignore
    el.color = permissions.find((al) => al.id == el.primary_group)?.color;
    return el;
  });

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
            )
          )}
        </div>
      </section>
    </main>
  );
};

export default Staff;
