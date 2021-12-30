//localhost:3000/news/something-important
//for dynamic rendering use [] in front of extension
// [newsid].js name is upto you [whatever] inside of brackets,which is indentifier
//for dynamic routing use hook
import { useRouter } from "next/router";

const DetailPage = () => {
  //router object
  const router = useRouter();
  // query property and indentifier
  //concrete data encoded in the url
  // const routeurl = router.query.newsid;
  // console.log(routeurl);
  //send a request to backend API
  //to fetch new item with newsid
  const newsid = router.query.newsid;
  console.log(newsid);

  return <h1>This is Detail page</h1>;
};
export default DetailPage;
