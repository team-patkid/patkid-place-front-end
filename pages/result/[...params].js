// import Seo from "@/components/Seo";
import { useRouter } from "next/router"

// /movies/121231 [변수명].js
export default function Detail({params}) {
  const router = useRouter();
  const [title, id] = params || [];
  // console.log(router);
  // return "detail";
  return(
    <div>
      {/* <Seo title={title}/> */}
      <h4>{title}</h4>
    </div>
  );
}

//SEO최적화
export function getServerSideProps({params:{params}}){
  return{
    props:{
      params,
    },
  };
}