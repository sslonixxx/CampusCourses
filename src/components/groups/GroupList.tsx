import Header from "../Header";
import Group from "./Group";
import styles from "../../componentsCss/groupList.module.css";
import { getGroupList, getUserRole } from "../../requests";
import { useEffect, useState } from "react";
import SingleGroup from "./SingleGroup";
import Role from "../Role";
import ASingleGroup from "./ASingleGroup";

const GroupList: React.FC = () => {
  const [groupList, setGroupList] = useState<Group[]>([]);
  const [role, setRole] = useState<Role>();
  useEffect(() => {
    const fillGroupList = async () => {
      const response = await getGroupList();
      setGroupList(response);
    };
    fillGroupList();
  }, []);
  useEffect(() => {
    const getRole = async () => {
      const responce = await getUserRole();
      setRole(responce);
    };
    getRole();
  });
  return (
    <>
      <Header></Header>
      <main className={styles.main}>
        <div className={styles.mainContainer}>
          <h1 className={styles.title}>Группы кампусных курсов</h1>
          {role?.isAdmin == true && (
            <button className={styles.button}>Создать</button>
          )}
          <div className={styles.container}>
            {role?.isAdmin == false
              ? groupList.map((group) => (
                  <SingleGroup key={group.id} group={group} />
                ))
              : groupList.map((group) => (
                  <ASingleGroup key={group.id} group={group} />
                ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default GroupList;
