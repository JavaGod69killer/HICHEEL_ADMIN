import React, { useState } from "react";
import { DatePicker, Segmented, Input, Button } from "antd";
import { SearchOutlined, RedoOutlined, PlusOutlined } from "@ant-design/icons";
import { CAPACITY_COLUMNS, CAPACITY_SAMPLES } from "./sample";
import { PageCard } from "components/card";
import ProTable from "@ant-design/pro-table";
import { ITable } from "../../../components/table";
import InitTableHeader from "components/table-header";
import Modal from "components/modal";

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
      <PageCard>
        <div className="my-10 ">
          <Segmented
            options={Segment_Option}
            onChange={handleSegmentChange}
            defaultValue="capacity"
          />
        </div>
        <div className="px-2 pb-0">
          <InitTableHeader
            addButtonName="Нэмэх"
            customHeaderTitle={"Харилцагч компанийн жагсаалт"}
            searchPlaceHolder="Нэр, данс"
            fileName="Харилцагч компанийн жагсаалт"
          />
        </div>

        <div>
          <ITable
            dataSource={CAPACITY_SAMPLES}
            columns={CAPACITY_COLUMNS}
            search={false}
            rowKey="documentNumber"
            pagination={{
              pageSize: 10,
              showSizeChanger: true,
              position: ["bottomRight"],
            }}
            scroll={{ x: "max-content" }}
            sticky={{ offsetHeader: 64 }}
            style={{ opacity: 0.9 }}
            toolBarRender={() => []}
          />
        </div>
        {isModalVisible && <Modal />}
      </PageCard>
    </>
  );
};

export default Dashboard;
