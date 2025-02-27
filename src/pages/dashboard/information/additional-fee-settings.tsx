import React from "react";
import { Button, Space } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";

export const FEE_SAMPLES: FeeData[] = Array.from(
  { length: 20 },
  (_, index) => ({
    categoryCode: "10",
    feeCode: `100${index + 1}`,
    feeName: "краны хөлс - 40тн-ын чингэлэг Ачаатай",
    measurementUnit: "1чингэлэг",
    feeAmount: `60000${index}`,
  })
);

interface FeeData {
  categoryCode: string;
  feeCode: string;
  feeName: string;
  measurementUnit: string;
  feeAmount: string;
}

const handleEdit = (record: FeeData) => {
  console.log("Editing:", record);
};

const handleDelete = (record: FeeData) => {
  console.log("Deleting:", record);
};

const handleView = (record: FeeData) => {
  console.log("Viewing:", record);
};

export const FEE_COLUMNS = [
  {
    title: "Ангилал код",
    dataIndex: "categoryCode",
    width: 368,
    sorter: (a: FeeData, b: FeeData) =>
      a.categoryCode.localeCompare(b.categoryCode),
  },
  {
    title: "Хураамжийн код",
    dataIndex: "feeCode",
    width: 368,
    sorter: (a: FeeData, b: FeeData) => a.feeCode.localeCompare(b.feeCode),
  },
  {
    title: "Хураамжийн нэр",
    dataIndex: "feeName",
    width: 500,
    sorter: (a: FeeData, b: FeeData) => a.feeName.localeCompare(b.feeName),
  },
  {
    title: "Хэмжих нэгж",
    dataIndex: "measurementUnit",
    width: 368,
    sorter: (a: FeeData, b: FeeData) =>
      a.measurementUnit.localeCompare(b.measurementUnit),
  },
  {
    title: "Хураамжийн дүн",
    dataIndex: "feeAmount",
    width: 168,
    sorter: (a: FeeData, b: FeeData) =>
      Number(a.feeAmount) - Number(b.feeAmount),
  },
  // {
  //   title: "Үйлдэл",
  //   key: "operation",
  //   fixed: "right",
  //   width: 160,
  //   render: (_: any, record: FeeData) => (
  //     <Space>
  //       <Button icon={<EyeOutlined />} onClick={() => handleView(record)} />
  //       <Button icon={<EditOutlined />} onClick={() => handleEdit(record)} />
  //       <Button
  //         icon={<DeleteOutlined />}
  //         danger
  //         onClick={() => handleDelete(record)}
  //       />
  //     </Space>
  //   ),
  // },
];
