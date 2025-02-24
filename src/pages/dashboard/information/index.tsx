import React, { useState } from "react";
import { DatePicker, Segmented, Input, Button } from "antd";
import { SearchOutlined, RedoOutlined, PlusOutlined } from "@ant-design/icons";
import ProTable from "@ant-design/pro-table";
import { CAPACITY_COLUMNS, CAPACITY_SAMPLES } from "./columns";
import { FEE_SAMPLES, FEE_COLUMNS } from "./additional-fee-settings";
import { ACCOUNT_COLUMNS, ACCOUNT_SAMPLES } from "./account";
import { TRANSACTION_SAMPLES, TRANSACTION_COLUMNS } from "./transaction";
import {
  TICKET_CANCELLATION_SAMPLES,
  TICKET_CANCELLATION_COLUMNS,
} from "./ticket-cancellation";
import { PageCard } from "components/card";
import { ITable } from "../../../components/table";

const Segment_Option = [
  { label: "Харилцагч компани", value: "customer-company" },
  { label: "Нэмэлт хураамж тохиргоо", value: "additional-fee-settings" },
  { label: "Харилцагчдын дансны тооцоо", value: "customer-accounting" },
  { label: "Э/Х тасалбар хүчингүй болгох", value: "ticket-cancellation" },
];

const Two_Segment_Option = [
  { label: "Данс", value: "account" },
  { label: "Гүйлгээ", value: "transaction" },
];

const { RangePicker } = DatePicker;

const Information: React.FC = () => {
  const [segment, setSegment] = useState(Segment_Option[0].value);
  const [twoSegment, setTwoSegment] = useState(Two_Segment_Option[0].value);
  const [searchText, setSearchText] = useState("");

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
    <PageCard>
      <div className="mt-10">
        <div className="mt-[32px] mb-[48px] mx-[24px]">
          <Segmented
            options={Segment_Option}
            value={segment}
            onChange={setSegment}
          />
        </div>

        {/* Show ProTable only if segment is "customer-company" */}
        {segment === "customer-company" && (
          <div className="mt-[32px] mb-[48px] mx-[24px]">
            <ProTable
              dataSource={CAPACITY_SAMPLES}
              columns={CAPACITY_COLUMNS}
              search={false}
              rowKey="account"
              pagination={{ pageSize: 10 }}
              toolBarRender={() => [
                <h2 key="counter" className="flex flex-nowrap"></h2>,
                <RangePicker key="rangePicker" />,
                <Input
                  key="search"
                  placeholder="Хайх чингэлэгийн дугаар оруул"
                  prefix={<SearchOutlined />}
                  value={searchText}
                  onChange={(e) => handleSearch(e.target.value)}
                  style={{ width: 320, marginLeft: 500 }}
                />,
                <Button
                  key="refresh"
                  icon={<RedoOutlined />}
                  onClick={handleRefresh}
                />,
                <Button
                  key="addNew"
                  icon={<PlusOutlined />}
                  onClick={handleAddNew}
                >
                  Шинэ
                </Button>,
              ]}
            />
          </div>
        )}
        {segment === "additional-fee-settings" && (
          <div className="mt-[32px] mb-[48px] mx-[24px]">
            <ProTable
              dataSource={FEE_SAMPLES}
              columns={FEE_COLUMNS}
              search={false}
              rowKey="account"
              pagination={{ pageSize: 10 }}
              toolBarRender={() => [
                <h2 key="counter" className="block">
                  Нийт: {FEE_SAMPLES.length}
                </h2>,
                <RangePicker key="rangePicker" />,
                <Input
                  key="search"
                  placeholder="Хайх чингэлэгийн дугаар оруул"
                  prefix={<SearchOutlined />}
                  value={searchText}
                  onChange={(e) => handleSearch(e.target.value)}
                  style={{ width: 320, marginLeft: 500 }}
                />,
                <Button
                  key="refresh"
                  icon={<RedoOutlined />}
                  onClick={handleRefresh}
                />,
                <Button
                  key="addNew"
                  icon={<PlusOutlined />}
                  onClick={handleAddNew}
                >
                  Шинэ
                </Button>,
              ]}
            />
          </div>
        )}
        {segment === "customer-accounting" && (
          <div className="mt-[32px] mb-[48px] mx-[24px]">
            <Segmented
              options={Two_Segment_Option}
              value={twoSegment}
              onChange={setTwoSegment}
            />
            {twoSegment === "account" && (
              <ProTable
                dataSource={ACCOUNT_SAMPLES}
                columns={ACCOUNT_COLUMNS}
                search={false}
                rowKey="account"
                pagination={{ pageSize: 10 }}
                toolBarRender={() => [
                  <h2 key="counter">Нийт: {ACCOUNT_SAMPLES.length}</h2>,
                  <RangePicker key="rangePicker" />,
                  <Input
                    key="search"
                    placeholder="Хайх чингэлэгийн дугаар оруул"
                    prefix={<SearchOutlined />}
                    value={searchText}
                    onChange={(e) => handleSearch(e.target.value)}
                    style={{ width: 320, marginLeft: 500 }}
                  />,
                  <Button
                    key="refresh"
                    icon={<RedoOutlined />}
                    onClick={handleRefresh}
                  />,
                  <Button
                    key="addNew"
                    icon={<PlusOutlined />}
                    onClick={handleAddNew}
                  >
                    Шинэ
                  </Button>,
                ]}
              />
            )}
            {twoSegment === "transaction" && (
              <ProTable
                dataSource={TRANSACTION_SAMPLES}
                columns={TRANSACTION_COLUMNS}
                search={false}
                rowKey="account"
                pagination={{ pageSize: 10 }}
                toolBarRender={() => [
                  <h2 key="counter">Нийт: {TRANSACTION_SAMPLES.length}</h2>,
                  <RangePicker key="rangePicker" />,
                  <Input
                    key="search"
                    placeholder="Хайх чингэлэгийн дугаар оруул"
                    prefix={<SearchOutlined />}
                    value={searchText}
                    onChange={(e) => handleSearch(e.target.value)}
                    style={{ width: 320, marginLeft: 500 }}
                  />,
                  <Button
                    key="refresh"
                    icon={<RedoOutlined />}
                    onClick={handleRefresh}
                  />,
                  <Button
                    key="addNew"
                    icon={<PlusOutlined />}
                    onClick={handleAddNew}
                  >
                    Шинэ
                  </Button>,
                ]}
              />
            )}
          </div>
        )}
        {segment === "ticket-cancellation" && (
          <div className="mt-[32px] mb-[48px] mx-[24px]">
            <ProTable
              dataSource={TICKET_CANCELLATION_SAMPLES}
              columns={TICKET_CANCELLATION_COLUMNS}
              search={false}
              rowKey="account"
              pagination={{ pageSize: 10 }}
              toolBarRender={() => [
                <h2 key="counter" className="block">
                  Нийт: {TICKET_CANCELLATION_SAMPLES.length}
                </h2>,
                <RangePicker key="rangePicker" />,
                <Input
                  key="search"
                  placeholder="Хайх чингэлэгийн дугаар оруул"
                  prefix={<SearchOutlined />}
                  value={searchText}
                  onChange={(e) => handleSearch(e.target.value)}
                  style={{ width: 320, marginLeft: 500 }}
                />,
                <Button
                  key="refresh"
                  icon={<RedoOutlined />}
                  onClick={handleRefresh}
                />,
                <Button
                  key="addNew"
                  icon={<PlusOutlined />}
                  onClick={handleAddNew}
                >
                  Шинэ
                </Button>,
              ]}
            />
          </div>
        )}
      </div>
    </PageCard>
  );
};

export default Information;
