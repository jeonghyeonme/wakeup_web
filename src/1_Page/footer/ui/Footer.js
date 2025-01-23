import React, { useEffect, useState } from "react";
import { NavContainer, NavItem } from "./style";
import { FaStar } from "react-icons/fa";
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
        active={activeTab === "trip"}
        onClick={() => setActiveTab("trip")}>
        <FaStar />
        <span>배차</span>
      </NavItem>
      <NavItem
        active={activeTab === "profile"}
        onClick={() => setActiveTab("profile")}>
        <FaStar />
        <span>프로필</span>
      </NavItem>
    </NavContainer>
  );
};

export default Footer;
