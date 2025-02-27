import ProLayout from "@ant-design/pro-layout";
import { Avatar, Popover } from "antd";
import file from "api/file";
import { AuthContext } from "context/AuthContext";
import { useContext, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import menuData from "./menu";
import { IClock } from "components/clock";

const Logo = () => {
  return (
    <div>
      <img
        src="/assets/icons/image_2025-02-07_082618137-removebg-preview.png"
        alt="Logo"
        height={40}
        width={40}
      />
    </div>
  );
};

const DashboardLayout: React.FC = () => {
  const [user] = useContext(AuthContext);
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <ProLayout
      style={{ borderRadius: "100px", fontFamily: "Inter, sans-serif" }}
      logo={<Logo />}
      title=""
      menuItemRender={(item, dom) => (
        <Link to={item.path as string} key={item.path}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
              position: "relative",
            }}
          >
            <div className="text-md font-semibold">{dom}</div>
            {location.pathname === item.path && (
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: "#E7EDEE",
                  position: "absolute",
                  bottom: "-11px",
                  transform: "rotate(45deg)",
                }}
              />
            )}
          </div>
        </Link>
      )}
      contentStyle={{
        margin: 0,
        background: "#E7EDEE",
        minHeight: "100vh",
        fontFamily: "Inter, sans-serif",
      }}
      menu={{
        request: async () => menuData,
      }}
      location={{ pathname: location.pathname }}
      layout="top"
      rightContentRender={() => (
        <div className="flex items-center gap-4 text-white pr-10">
          <IClock />
          <div className="flex items-center gap-3">
            <Avatar
              size={32}
              src={file.fileToUrl(user?.user?.profile?.physical_path)}
              className="uppercase"
            />
            <Popover
              placement="bottom"
              arrow={false}
              overlayInnerStyle={{ padding: 0 }}
              content={
                <div className="flex flex-col">
                  <div
                    className="flex items-center gap-3 p-2 m-2 cursor-pointer"
                    onClick={() => {}}
                  >
                    <div>Нууц үг солих</div>
                  </div>
                  <div style={{ borderTop: "1px solid #EAECF0" }}>
                    <div
                      className="flex items-center gap-3 p-2 m-2 bg-[#FEF3F2] text-[#F04438] rounded-md cursor-pointer"
                    >
                      <div>Системээс гарах</div>
                    </div>
                  </div>
                </div>
              }
            >
              <div className="flex flex-col">
                <div className="text-sm">{user?.user?.first_name || "Тамир"}</div>
                <div className="text-sm">{user?.user?.role || "админ"}</div>
              </div>
            </Popover>
          </div>
        </div>
      )}
      token={{
        header: {
          heightLayoutHeader: 72,
          colorBgHeader: "#0077F4",
          colorTextMenu: "#fff",
          colorTextMenuSelected: "#fff",
        },
      }}
    >
      <Outlet />
    </ProLayout>
  );
};

export default DashboardLayout;
