import React from "react";
import STYLE from "./style";
import pageConfig from "./config/pageConfig";
import usePageChange from "./model/usePageChange";

const Footer = () => {
  const [activeTab, setActiveTab] = usePageChange();

  const isActive = (tab) => {
    return (
      (["/admin", "/crew"].includes(activeTab) && tab === "/") ||
      tab === activeTab
    );
  };

  return (
    <STYLE.NavContainer>
      {pageConfig.map((tab) => (
        <STYLE.NavItem
          key={tab.key}
          active={isActive(tab.key)}
          onClick={() => setActiveTab(tab.key)}>
          {tab.icon}
          <span>{tab.label}</span>
        </STYLE.NavItem>
      ))}
    </STYLE.NavContainer>
  );
};

export default Footer;
