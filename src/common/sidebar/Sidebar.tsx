/* eslint-disable react-hooks/exhaustive-deps */
import {
  AccountBalanceOutlined, DashboardOutlined, InsertChartOutlinedRounded, LocalMallOutlined, PersonOutlined, SettingsOutlined, StorageOutlined, StoreMallDirectoryOutlined, SwapHorizOutlined, VerifiedUserOutlined
} from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

import Loading from "../Loading";
import menuList from "./menu.js";

interface ISidebarProps {
  setIsOpenSidebar: (isOpen: boolean) => void;
}

const Sidebar: React.FC<ISidebarProps> = ({ setIsOpenSidebar }) => {
  const allIconsObj = {
    DashboardOutlined,
    LocalMallOutlined,
    SwapHorizOutlined,

    AccountBalanceOutlined,
    PersonOutlined,
    InsertChartOutlinedRounded,
    StoreMallDirectoryOutlined,
    StorageOutlined,
    VerifiedUserOutlined,
    SettingsOutlined,
  };
  // eslint-disable-next-line no-unused-vars
  const [selectedFirstLevelMenu, setSelectedFirstLevelMenu] = useState<any>("");
  const [selectedSecondLevelMenu, setSelectedSecondLevelMenu] = useState<any>("");
  const [loading, setLoading] = useState(false);



  return (
    <>
      <div className="menu">
        <ul className="list-unstyled components">
          {loading && <Loading />}
          {menuList?.map((firstLevel: any, index: number) => (
            <li key={index} className="firstLevel-li">
              {/* {console.log(firstLevel, "firstLevel")} */}

              {firstLevel?.secondLabelMenuList?.length > 0 && (
                <ul
                  className="dropdown-content firstLabel-dropdown-show">
                  {firstLevel?.secondLabelMenuList?.map(
                    (secondLevel: any, index: number) => (
                      <li key={index}>
                        <div
                          className="d-flex align-items-center justify-content-around"
                          onClick={() => {

                            setSelectedSecondLevelMenu(secondLevel?.strLabel)
                          }}
                        >
                          {secondLevel?.nestedSubs ? (
                            <div className="sidebar-dropdown sidebar-second-dropdown">
                              <span className="menu-bullet"></span>
                              {secondLevel?.strLabel}
                            </div>
                          ) : (
                            <div
                              style={{ width: "100%" }}
                              onClick={() => {
                                if (window.innerWidth < 991) {
                                  setIsOpenSidebar(true);
                                }
                              }}
                            >
                              <Link
                                to={secondLevel?.strTo}
                                // className="sidebar-dropdown sidebar-second-dropdown"
                                className="active sidebar-dropdown sidebar-second-dropdown"
                              >
                                <span className="menu-bullet"></span>
                                {/* {secondLevel?.strLabel} */}
                                {secondLevel?.strLabel}
                              </Link>
                            </div>
                          )}
                        </div>

                        {secondLevel?.nestedSubs?.length > 0 && (
                          <ul
                            className={
                              selectedSecondLevelMenu === secondLevel?.label
                                ? "dropdown-content dropdown-second-content secondLevel-dropdown-show"
                                : "dropdown-content dropdown-second-content secondLevel-dropdown-hide"
                            }
                          >
                            {secondLevel?.nestedSubs?.map(
                              (thirdLevel:any, index:number) => (
                                <li key={index}>
                                  <div
                                    style={{ width: "100%" }}
                                    onClick={() => {
                                      if (window.innerWidth < 991) {
                                        setIsOpenSidebar(true);
                                      }
                                    }}
                                  >
                                    <Link to={thirdLevel?.strTo}>
                                      <span className="menu-bullet"></span>
                                      {thirdLevel?.label}
                                    </Link>
                                  </div>
                                </li>
                              )
                            )}
                          </ul>
                        )}
                      </li>
                      // </ul>
                    )
                  )}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
