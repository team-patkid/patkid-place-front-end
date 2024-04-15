import Link from "next/link";
import {
  visitBorderStyle,
  visitIconStyle,
  visitTeamLinkStyle,
  visitTeamText,
  visitTitleBoxStyle,
  visitTitleStyle,
} from "./Visit.css";

const Visit = () => {
  return (
    <div className="visit">
      <div className={visitTitleBoxStyle}>
        <img className={visitIconStyle} src="/go.webp" />
        <p className={visitTitleStyle}>PATKID 팀을 더 알고 싶다면</p>
      </div>
      <Link
        className={visitTeamLinkStyle}
        href="https://www.notion.so/PATKID-b28bf7de62bb4e95919b5dca4e8c08ec?pvs=4"
        target="_blank"
      >
        <img className={visitBorderStyle} src="/visit.webp" draggable={false} />
        <p className={visitTeamText}>PATKID 팀 페이지 방문하기</p>
      </Link>
    </div>
  );
};

export default Visit;
