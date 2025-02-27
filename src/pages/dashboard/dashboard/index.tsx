import React, { useState } from "react";
import { DatePicker, Segmented, Input, Button } from "antd";
import { SearchOutlined, RedoOutlined, PlusOutlined } from "@ant-design/icons";
import { CAPACITY_COLUMNS, CAPACITY_SAMPLES } from "./sample";
import { PageCard } from "components/card";
import { ITable } from "../../../components/table";
import InitTableHeader from "components/table-header";
import Modal from "components/modal";
import { UpdateService } from "./actions/update";
import { CreateService } from "./actions/create";
import { DetailService } from "../information/actions/detail";

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
  const [create, setCreate] = useState<boolean>(false);

  return (
    <>
      <div className="my-10 ">
        <Segmented
          options={Segment_Option}
          onChange={handleSegmentChange}
          defaultValue="capacity"
        />
      </div>
      <PageCard>
        <div className="px-2 pb-0">
          <div>
            <InitTableHeader
              addButtonName="Шинэ"
              customHeaderTitle={<RangePicker />}
              searchPlaceHolder="Хайх чингэлэгийн дугаар оруул"
              hideDownload={true}
            />
          </div>
        </div>

        <div>
          <ITable
            // total={record?}
            dataSource={CAPACITY_SAMPLES}
            columns={CAPACITY_COLUMNS}
            search={false}
            rowKey="documentNumber"
            pagination={{ pageSize: 10 }}
            UpdateComponent={UpdateService}
            DetailComponent={DetailService}
            RemoveModelConfig={{
              config: (record) => ({
                uniqueKey: record?.id,
                display: record?.name,
                title: "Remove",
              }),
            }}
          />
        </div>
        {isModalVisible && <Modal />}
      </PageCard>
    </>
  );
};

export default Dashboard;
