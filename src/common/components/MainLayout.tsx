import React, { useState } from "react";
// import ProfileSidebar from "../../profileSidebar/ProfileSidebar";
// import Sidebar from "../../sidebar/Sidebar";
import Sidebar from "./../sidebar/Sidebar";
// import TopNavigation from "../../topNavigation/TopNavigation";

interface IMainLayoutProps {
  children: any;
}

const MainLayout: React.FC<IMainLayoutProps> =({ children})=> {
  const [isOpenProfileSidebar, setIsOpenProfileSidebar] = useState(true);
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);

  return (
    <div>
      {/* topNavigation */}
      {/* <div className="top-navigation-wrapper">
        <TopNavigation
          setIsOpenSidebar={setIsOpenSidebar}
          isOpenSidebar={isOpenSidebar}
          isOpenProfileSidebar={isOpenProfileSidebar}
          setIsOpenProfileSidebar={setIsOpenProfileSidebar}
        />
        <h1>Top Navigation</h1>
      </div> */}
      {/* sidebar */}
      <div className={isOpenSidebar ? "sidebar width-15" : "sidebar width-0"}>
        <Sidebar setIsOpenSidebar={setIsOpenSidebar} />
        <h2>Sidebar</h2>
      </div>
      {/* profile sidebar */}
      {/* <div
        className={
          isOpenProfileSidebar ? "profile-sidebar" : "profile-sidebar view"
        }
        onClick={() => setIsOpenProfileSidebar(!isOpenProfileSidebar)}
      >
        <ProfileSidebar
          isOpenProfileSidebar={isOpenProfileSidebar}
          setIsOpenProfileSidebar={setIsOpenProfileSidebar}
        />
        <h1>Profile Sidebar</h1>
      </div> */}

      <div className={isOpenSidebar ? "body width-85" : "body width-100"}>
        {children}
      </div>

      {/* <ICustomTable headers={headers} bodyData={bodyData} /> */}
    </div>
  );
}

export default MainLayout;