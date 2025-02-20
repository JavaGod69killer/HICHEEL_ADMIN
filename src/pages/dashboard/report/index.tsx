import React, { useState } from "react";
import { Segmented, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import ProTable from "@ant-design/pro-table";
import { REPORT_COLUMNS, REPORT_SAMPLES } from "./sampleReport";

const Segment_Option = [
  { label: "Э/Х орлогын тайлан", value: "financialReport" },
];

const Report: React.FC = () => {
  const [segment, setSegment] = useState(Segment_Option[0].value);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (value: string) => setSearchText(value);

  return (
    <div className="mt-10">
      <div className="mt-[32px] mb-[48px] mx-[24px]">
        <Segmented
          options={Segment_Option}
          value={segment}
          onChange={setSegment}
          defaultValue="financialReport"
        />
      </div>

      {segment === "financialReport" && (
        <div
          className="mt-[32px] mb-[48px] mx-[24px]"
          style={{ overflowX: "auto", maxWidth: "100%" }} // Cool overflow
        >
          <ProTable
            className="w-full"
            dataSource={REPORT_SAMPLES}
            columns={REPORT_COLUMNS}
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
                Нийт: {REPORT_SAMPLES.length}
              </h2>,
              <Input
                key="search"
                placeholder="Хайх чингэлэгийн дугаар оруул"
                prefix={<SearchOutlined />}
                value={searchText}
                onChange={(e) => handleSearch(e.target.value)}
                style={{ width: 320, marginLeft: 500 }}
              />,
            ]}
          />
        </div>
      )}
    </div>
  );
};

export default Report;
