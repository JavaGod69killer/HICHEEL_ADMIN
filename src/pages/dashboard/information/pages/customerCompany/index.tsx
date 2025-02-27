import React, { useState } from "react";
import { DatePicker, Segmented, Input, Button } from "antd";
import { SearchOutlined, RedoOutlined, PlusOutlined } from "@ant-design/icons";
import ProTable from "@ant-design/pro-table";
import { CAPACITY_COLUMNS, CAPACITY_SAMPLES } from "../../columns";
import { PageCard } from "components/card";
import InitTableHeader from "components/table-header";
import { ITable } from "../../../../../components/table";
import { UpdateService } from "./actions/update";
import { CreateService } from "./actions/create";
import { DetailService } from "./actions/detail";

const { RangePicker } = DatePicker;

const Information: React.FC = () => {
  const [segment, setSegment] = useState(Segment_Option[0].value);
  const [twoSegment, setTwoSegment] = useState(Two_Segment_Option[0].value);
  const [searchText, setSearchText] = useState("");
  const [form, setForm] = useState({ pageSize: 10 });

  const handleSearch = (value: string) => {
    setSearchText(value);
    // Implement search logic if necessary
  };

  const handleRefresh = () => {
    setSearchText("");
    // Implement refresh logic if necessary
  };

  const handleAddNew = () => {
    console.log("Add new item");
    // Implement add new logic
  };

  return (
    <>
      <PageCard xR>
        <div className="mt-10">
          {/* Show ProTable only if segment is "customer-company" */}
          <div className="mt-[32px] mb-[48px] mx-[24px]">
            <div className="px-2 pb-0">
              <div>
                <InitTableHeader
                  addButtonName="Шинэ"
                  customHeaderTitle={<RangePicker />}
                  searchPlaceHolder="Хайх чингэлэгийн дугаар оруул"
                  hideDownload={true}
                  CreateComponent={CreateService}
                />
              </div>
            </div>
            <ITable
              dataSource={CAPACITY_SAMPLES}
              columns={CAPACITY_COLUMNS}
              search={false}
              rowKey="documentNumber"
              form={form}
              pagination={{ pageSize: 10 }}
              setForm={setForm} // Pass form and setForm
              UpdateComponent={UpdateService}
              CreateComponent={CreateService}
              DetailComponent={DetailService}
              RemoveModelConfig={{
                config: (record) => ({
                  uniqueKey: record?.id,
                  display: record?.name,
                  title: "Remove",
                }),
              }}
            />

            {/* <ProTable
              dataSource={CAPACITY_SAMPLES}
              columns={CAPACITY_COLUMNS}
              search={false}
              rowKey="account"
              pagination={{ pageSize: 10 }}
            /> */}
          </div>
        </div>
      </PageCard>
    </>
  );
};

export default Information;
