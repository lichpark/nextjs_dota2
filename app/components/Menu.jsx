"use client";

import Link from "next/link";
import { headerStyle } from "../style/HeaderStyle";
import { useState } from "react";
const Menu = () => {
  const [viewchk, setViewChk] = useState(false);
  const hoverview = () => {
    console.log("t");
    setViewChk((prev) => true);
  };
  const hoverHide = () => {
    setViewChk((prev) => false);
  };

  return (
    <nav className="w-full flex py-3  gap-10">
      <div className="w-2/12 text-center text-2xl">
        <Link href="/">
          <img src="https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/global/dota2_logo_horiz.png"></img>
        </Link>
      </div>

      <ul className="w-3/12 flex justify-between text-center">
        <li
          style={{ position: "relative" }}
          className={`${headerStyle.flexCenterPackage} text-zinc-50 text-xl`}
          onMouseOver={hoverview}
          onMouseOut={hoverHide}
        >
          <div>
            <span
              className={`${headerStyle.flexCenterPackage} gap-2`}
              style={{
                padding: "10px",
                borderTop: viewchk ? "2px solid gray" : "none",
                borderRight: viewchk ? "2px solid gray" : "none",
                borderLeft: viewchk ? "2px solid gray" : "none",
                borderBottom: "none",
                borderRadius: viewchk ? "5px" : "none",
              }}
            >
              게임{" "}
              <img src="https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/arrow_over.png"></img>
            </span>
          </div>
          <div
            style={{
              display: viewchk ? "block" : "none",
              position: "absolute",
              top: "85%",
              left: "0",
              width: "200px",
              backgroundColor: "rgba(244, 244, 244, .2)",
              backdropFilter: "blur(10px)",
            }}
          >
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",

                padding: "10px",
                border: "2px solid gray",
                fontSize: "14px",
              }}
            >
              <Link href="/">
                <li>패치</li>
              </Link>
              <Link href="/">
                <li>게임플레이 업데이트</li>
              </Link>
              <Link href="/">
                <li>이전 업데이트</li>
              </Link>
            </ul>
          </div>
        </li>

        <Link
          href="/"
          className={`${headerStyle.flexCenterPackage} text-zinc-50 text-xl`}
        >
          <li className={headerStyle.flexCenterPackage}>영웅</li>
        </Link>
        <Link
          href="/"
          className={`${headerStyle.flexCenterPackage} text-zinc-50 text-xl`}
        >
          <li className={headerStyle.flexCenterPackage}>소식</li>
        </Link>
        <Link
          href="/"
          className={`${headerStyle.flexCenterPackage} text-zinc-50 text-xl`}
        >
          <li className={headerStyle.flexCenterPackage}>E스포츠</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Menu;
