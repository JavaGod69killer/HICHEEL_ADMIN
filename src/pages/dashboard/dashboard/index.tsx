import React, { useState } from "react";
import { DatePicker, Segmented, Input, Button } from "antd";
import { SearchOutlined, RedoOutlined, PlusOutlined } from "@ant-design/icons";
import { CAPACITY_COLUMNS, CAPACITY_SAMPLES } from "./sample";
import ProTable from "@ant-design/pro-table";
import {ITable} from "../../../components/table";
import Modal from "components/modal";
import create from "@ant-design/icons/lib/components/IconFont";

const Segment_Option = [
  {
    label: "Ачаа дөхөлт",
    value: "load-factor",
  },
  {
    label: "Үлдэгдэл",
    value: "capacity",
  },
  {
    label: "Талбайд ирснээр",
    value: "site-received",
  },
];

const { RangePicker } = DatePicker;


const Dashboard: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSegmentChange = (value: string) => {
    if (value === "load-factor") {
      setIsModalVisible(true);
    } else {
      setIsModalVisible(false);
    }
  };

  return (
    <>
      <div className="my-10 ">
        <Segmented
          options={Segment_Option}
          onChange={handleSegmentChange}
          defaultValue="capacity"
        />
      </div>
      <div>
        <ITable
        dataSource={CAPACITY_SAMPLES}
        columns={CAPACITY_COLUMNS}
        search={false}
        rowKey="documentNumber"
        pagination={{
          pageSize: 10, // 10 мөр тутамд хуудаслах
          showSizeChanger: true, // Page size өөрчлөх боломж
          position: ["bottomRight"], // Pagination доор байрлах
        }}
        scroll={{ x: "max-content" }} // Хүснэгт том байвал гүйлгэх боломжтой
        sticky={{ offsetHeader: 64 }} // Толгойг тогтоох
        style={{ opacity: 0.9 }} 
        toolBarRender={() => [
          <h2 key="counter" className="flex flex-nowrap">
            Нийт: {CAPACITY_SAMPLES.length}
          </h2>,
          <RangePicker key="rangePicker" />,

          <Input
            key="search"
            placeholder="Хайх чингэлэгийн дугаар оруул"
            prefix={<SearchOutlined />}
            style={{ width: 320, marginLeft: 500 }}
          />,
          
        ]}
        />
      {/* <ProTable
            className="w-full"
            dataSource={CAPACITY_SAMPLES}
            columns={CAPACITY_COLUMNS}
            search={false}
            rowKey="documentNumber"
            pagination={{
              pageSize: 10, // 10 мөр тутамд хуудаслах
              showSizeChanger: true, // Page size өөрчлөх боломж
              position: ["bottomRight"], // Pagination доор байрлах
            }}
            scroll={{ x: "max-content" }} // Хүснэгт том байвал гүйлгэх боломжтой
            sticky={{ offsetHeader: 64 }} // Толгойг тогтоох
            style={{ opacity: 0.9 }} // Гоё тунгалаг байдал
            toolBarRender={() => [
              <h2 key="counter" className="flex flex-nowrap">
                Нийт: {CAPACITY_SAMPLES.length}
              </h2>,
                            <RangePicker key="rangePicker" />,

              <Input
                key="search"
                placeholder="Хайх чингэлэгийн дугаар оруул"
                prefix={<SearchOutlined />}
                style={{ width: 320, marginLeft: 500 }}
              />,
            ]}
          /> */}
      {isModalVisible && <Modal />}
      </div>
    </>
  );
};

export default Dashboard;
