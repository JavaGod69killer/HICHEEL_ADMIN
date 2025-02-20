import React from "react";
import { Button, Space, Switch } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";

export interface CapacityData {
  account: string;
  customerName: string;
  openingBalance: string;
  debit: string;
  credit: string;
  closingBalance: string;
}

export const ACCOUNT_SAMPLES: CapacityData[] = Array.from(
  { length: 20 },
  (_, index) => ({
    account: `${4567890 + index}`,
    customerName: "Tamir",
    openingBalance: `55435${index + 1}$`,
    debit: "1000",
    credit: "0",
    closingBalance: `23124${index + 1}$`,
  })
);

const handleEdit = (record: CapacityData) => {
  console.log("Editing:", record);
};

const handleDelete = (record: CapacityData) => {
  console.log("Deleting:", record);
};

const handleView = (record: CapacityData) => {
  console.log("Viewing:", record);
};

export const ACCOUNT_COLUMNS = [
  {
    title: "Данс",
    dataIndex: "account",
    width: 306.6666564941406,
    sorter: (a: CapacityData, b: CapacityData) =>
      Number(a.account) - Number(b.account),
  },
  {
    title: "Харилцагчийн нэр",
    dataIndex: "customerName",
    width: 306.66668701171875,
    sorter: (a: CapacityData, b: CapacityData) =>
      a.customerName.localeCompare(b.customerName),
  },
  {
    title: "Эхний үлдэгдэл",
    dataIndex: "openingBalance",
    width: 306.66668701171875,
    sorter: (a: CapacityData, b: CapacityData) =>
      Number(a.openingBalance.replace(/\D/g, "")) -
      Number(b.openingBalance.replace(/\D/g, "")),
  },
  {
    title: "Дебит",
    dataIndex: "debit",
    width: 306.66668701171875,
    sorter: (a: CapacityData, b: CapacityData) =>
      Number(a.debit) - Number(b.debit),
  },
  {
    title: "Кредит",
    dataIndex: "credit",
    width: 306.66668701171875,
    sorter: (a: CapacityData, b: CapacityData) =>
      Number(a.credit) - Number(b.credit),
  },
  {
    title: "Эцсийн үлдэгдэл",
    dataIndex: "closingBalance",
    width: 150,
    sorter: (a: CapacityData, b: CapacityData) =>
      Number(a.closingBalance.replace(/\D/g, "")) -
      Number(b.closingBalance.replace(/\D/g, "")),
  },
  {
    title: "Үйлдэл",
    key: "operation",
    fixed: "right",
    width: 150,
    render: (_: any, record: CapacityData) => (
      <Space>
        <Button
          icon={<EyeOutlined />}
          onClick={() => handleView(record)}
          style={{
            marginRight: "8px",
          }}
        />
        <Button
          icon={<EditOutlined />}
          onClick={() => handleEdit(record)}
          style={{
            marginRight: "8px",
          }}
        />
        <Button
          icon={<DeleteOutlined />}
          danger
          onClick={() => handleDelete(record)}
        />
      </Space>
    ),
  },
];
