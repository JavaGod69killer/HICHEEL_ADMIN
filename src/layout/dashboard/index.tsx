import ProLayout from "@ant-design/pro-layout";
import { Avatar } from "antd";
import file from "api/file";
import { AuthContext } from "context/AuthContext";
import { useContext, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import menuData from "./menu";

const Logo = () => {
  return (
    <div>
      <img
        src="/src/assets/icons/image_2025-02-07_082618137-removebg-preview.png"
        alt=""
        height={"40px"}
        width={"40px"}
      />
    </div>
  );
};

const DashboardLayout: React.FC = () => {
  const [user] = useContext(AuthContext);
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(true);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <ProLayout
      style={{
        borderRadius: "100px",
        fontFamily: "Inter, sans-serif",
      }}
      logo={<Logo />}
      title="   "
      menuItemRender={(item, dom) => {
        return (
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
        );
      }}
      contentStyle={{
        margin: 0,
        background: "#E7EDEE",
        minHeight: "100vh",
        fontFamily: "Inter, sans-serif",
      }}
      menu={{
        request: async () => {
          return menuData;
        },
      }}
      location={{
        pathname: location.pathname,
      }}
      layout="top"
      rightContentRender={() => (
        <div className="flex items-center gap-4 text-white  pr-10">
          <div className="flex items-center gap-3">
            <Avatar
              size={32}
              src={file.fileToUrl(user?.user?.profile?.physical_path)}
              className="uppercase"
            >
              {/* {user?.user?.username?.substring(0, 2)} */}
            </Avatar>
            <div className="flex flex-col">
              {/* <div className="uppercase text-sm">{user?.user?.first_name}</div>
                <div className="text-xs">{user?.user?.phone}</div> */}
              <div className="text-sm">Тамир </div>
              <div className="text-sm">админ</div>
            </div>
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