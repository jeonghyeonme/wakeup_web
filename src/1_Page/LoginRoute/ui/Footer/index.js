import React, { useEffect } from "react";
import STYLE from "./style";
import pageConfig from "./config/pageConfig";
import usePageChange from "./model/usePageChange";
import { useCookies } from "react-cookie";
const Footer = () => {
  const [activeTab, setActiveTab] = usePageChange();
  const [cookie] = useCookies(["type"]);

  return (
    <STYLE.NavContainer>
      {pageConfig.map((tab) => (
        <STYLE.NavItem
          key={tab.key}
          active={
            (["/admin", "/crew"].includes(activeTab) && tab.key === "/home") ||
            tab.key === activeTab
          }
          onClick={() => {
            if (tab.key === "/home") {
              setActiveTab(`/${cookie.type}`);
              return;
            }
            setActiveTab(tab.key);
          }}>
          {tab.icon}
          <span>{tab.label}</span>
        </STYLE.NavItem>
      ))}
    </STYLE.NavContainer>
  );
};

export default Footer;
