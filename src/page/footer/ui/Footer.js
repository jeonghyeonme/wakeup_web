import React, { useEffect, useState } from "react";
import { NavContainer, NavItem } from "./style";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import usePageChange from "../model/usePageChange";

const Footer = () => {
  const [activeTab, setActiveTab] = useState("home");
  const pageChange = usePageChange();
  useEffect(() => {
    pageChange(activeTab);
  }, [activeTab]);

  return (
    <NavContainer>
      <NavItem
        active={activeTab === "home"}
        onClick={() => setActiveTab("home")}>
        <FaStar />
        <span>홈</span>
      </NavItem>
      <NavItem
        active={activeTab === "stats"}
        onClick={() => setActiveTab("stats")}>
        <FaStar />
        <span>통계</span>
      </NavItem>
      <NavItem
        active={activeTab === "more"}
        onClick={() => setActiveTab("more")}>
        <FaStar />
        <span>더보기</span>
      </NavItem>
    </NavContainer>
  );
};

export default Footer;
