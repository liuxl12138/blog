import { useState } from "react";
import "./index.scss";

const Sort = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <>
      <div className="sort-type">
        <span className={activeIndex === 0 ? "active" : undefined}>最新</span>
        <span className={activeIndex === 1 ? "active" : undefined}>最热</span>
      </div>
    </>
  );
};
export default Sort;
