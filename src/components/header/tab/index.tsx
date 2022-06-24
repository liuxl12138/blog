import { tabType } from "@/types/base";
import { useState } from "react";
import "./index.scss";

const Tab = () => {
  const [tabList] = useState<tabType[]>([
    { name: "全部", id: 0 },
    { name: "js", id: 1 },
    { name: "html", id: 2 },
    { name: "css", id: 3 },
    { name: "vue", id: 4 },
    { name: "react", id: 5 },
  ]);
  const [activeTabId, setActiveTabId] = useState<number>(0);

  return (
    <>
      <div className="tab-container">
        <div className="tab-box">
          {tabList.map((item) => (
            <span
              key={item.id}
              className={`tab-item ${
                activeTabId === item.id ? "active" : undefined
              }`}
              onClick={() => {
                setActiveTabId(item.id);
              }}
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tab;
