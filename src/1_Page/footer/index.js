import React from "react";
import STYLE from "./style";
import pageConfig from "./config/pageConfig";
import usePageChange from "./model/usePageChange";

const Footer = () => {
  const { activeTab, setActiveTab } = usePageChange();

  return (
    <STYLE.NavContainer>
      {pageConfig.map((tab) => (
        <STYLE.NavItem
          key={tab.key}
          active={activeTab === tab.key}
          onClick={() => setActiveTab(tab.key)}>
          {tab.icon}
          <span>{tab.label}</span>
        </STYLE.NavItem>
      ))}
    </STYLE.NavContainer>
  );
};

export default Footer;
