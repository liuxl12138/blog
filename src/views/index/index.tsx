import Header from "@/components/Header/Header";
import Tab from "@/components/tab/Tab";
import ArticleList from "@/components/Article/List";
import "./index.scss";

const BlogHome = () => {
  return (
    <>
      <Header></Header>
      <Tab></Tab>
      <div className="main-container">
        <div className="sort-type">
          <span>最热</span>
          <span>最新</span>
        </div>
        <ArticleList></ArticleList>
      </div>
    </>
  );
};
export default BlogHome;
