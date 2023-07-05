// import Seo from "@/components/Seo";
import { useRouter } from "next/router"


export default function Detail({params}) {
  const router = useRouter();
  const [title, id] = params || [];

  return(
    <div>
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