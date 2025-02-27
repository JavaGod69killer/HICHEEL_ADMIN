import React, { useState } from "react";
import { Segmented, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import ProTable from "@ant-design/pro-table";
import { REPORT_COLUMNS, REPORT_SAMPLES } from "./sampleReport";
import { PageCard } from "components/card";
import InitTableHeader from "components/table-header";
import { DatePicker } from "antd";
import { Divide01 } from "untitledui-js-base";

const Segment_Option = [
  { label: "Э/Х орлогын тайлан", value: "financialReport" },
];
const { RangePicker } = DatePicker;

const Report: React.FC = () => {
  const [segment, setSegment] = useState(Segment_Option[0].value);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (value: string) => setSearchText(value);

  return (
    <PageCard>
      <div className="mt-10">
        {segment === "financialReport" && (
          <div
            className="mt-[32px] mb-[48px] mx-[24px]"
            style={{ overflowX: "auto", maxWidth: "100%" }} // Cool overflow
          >
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
            />
          </div>
        )}
      </div>
    </PageCard>
  );
};

export default Report;
