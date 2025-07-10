import Link from "next/link";
import OptimizedImage from "@components/common/OptimizedImage";
import {
  visitBorderStyle,
  visitIconStyle,
  visitTeamLinkStyle,
  visitTeamText,
  visitTitleBoxStyle,
  visitTitleStyle,
  visitContainerStyle,
} from "./Visit.css";

const Visit = () => {
  return (
    <div className={visitContainerStyle}>
      <div className={visitTitleBoxStyle}>
        <OptimizedImage className={visitIconStyle} src="/go.webp" alt="Go icon" width={30} height={30} />
        <p className={visitTitleStyle}>PATKID 팀을 더 알고 싶다면</p>
      </div>
      <Link
        className={visitTeamLinkStyle}
        href="https://www.notion.so/PATKID-b28bf7de62bb4e95919b5dca4e8c08ec?pvs=4"
        target="_blank"
      >
        <OptimizedImage className={visitBorderStyle} src="/visit.webp" alt="Visit border" width={300} height={60} draggable={false} />
        <p className={visitTeamText}>PATKID 팀 페이지 방문하기</p>
      </Link>
    </div>
  );
};

export default Visit;
