import { Radio, Space, Tabs, ConfigProvider } from "antd";

import styles from "./Settings.module.scss";

const Settings = () => {
  return (
    <div className={styles.card}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#8244a7",
            borderRadius: 2,
            colorBgContainer: "#30a458",
          },
        }}
      >
        <Space>
          <Tabs
            tabPosition={"left"}
            className={styles.tabMenu}
            items={new Array(3).fill(null).map((_, i) => {
              const id = String(i + 1);
              return {
                label: `Tab ${id}`,
                key: id,
                children: `Content of Tab ${id}`,
              };
            })}
          />
        </Space>
      </ConfigProvider>
    </div>
  );
};

export default Settings;
