import { useState } from "react";
import { articleType } from "@/types/base";

const ArticleList = () => {
  const [articleList] = useState<articleType[]>([]);

  return (
    <>
      <div className="article-list">
        {articleList.map((item) => (
          <div key={item.id}></div>
        ))}
      </div>
    </>
  );
};
export default ArticleList;
