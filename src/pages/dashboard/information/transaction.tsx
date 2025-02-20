import React from "react";
import { Button, Space, Switch } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";

export const TRANSACTION_SAMPLES: TransactionData[] = Array.from(
  { length: 20 },
  (_, index) => ({
    date: new Date(2025, 1, index + 1).toISOString().split("T")[0], // Generates different dates (YYYY-MM-DD)
    account: `${4567890 + index}`,
    cashAmount: `$${Math.floor(Math.random() * 5000) + 1000}`, // Formats as "$1,234"
    nonCashAmount: `$${Math.floor(Math.random() * 3000) + 500}`, // Formats as "$567"
    document: `Doc-${index + 1}`,
    payer: `Payer ${index + 1}`,
    transactionEmployee: `Employee ${index + 1}`,
  })
);

interface TransactionData {
  date: string;
  account: string;
  cashAmount: number;
  nonCashAmount: number;
  document: string;
  payer: string;
  transactionEmployee: string;
}

const handleEdit = (record: TransactionData) => {
  console.log("Editing:", record);
};

const handleDelete = (record: TransactionData) => {
  console.log("Deleting:", record);
};

const handleView = (record: TransactionData) => {
  console.log("Viewing:", record);
};

export const TRANSACTION_COLUMNS = [
  {
    title: "Огноо",
    dataIndex: "date",
    width: 200,
    sorter: (a: TransactionData, b: TransactionData) =>
      new Date(a.date).getTime() - new Date(b.date).getTime(),
  },
  {
    title: "Данс",
    dataIndex: "account",
    width: 200,
    sorter: (a: TransactionData, b: TransactionData) =>
      Number(a.account) - Number(b.account),
  },
  {
    title: "Бэлэн",
    dataIndex: "cashAmount",
    width: 200,
    sorter: (a: TransactionData, b: TransactionData) =>
      a.cashAmount - b.cashAmount,
  },
  {
    title: "Бэлэн бус",
    dataIndex: "nonCashAmount",
    width: 200,
    sorter: (a: TransactionData, b: TransactionData) =>
      a.nonCashAmount - b.nonCashAmount,
  },
  {
    title: "Баримт",
    dataIndex: "document",
    width: 200,
    sorter: (a: TransactionData, b: TransactionData) =>
      a.document.localeCompare(b.document),
  },
  {
    title: "Төлөгч",
    dataIndex: "payer",
    width: 200,
    sorter: (a: TransactionData, b: TransactionData) =>
      a.payer.localeCompare(b.payer),
  },
  {
    title: "Гүйлгээ хийсэн ажилтан",
    dataIndex: "transactionEmployee",
    width: 200,
    sorter: (a: TransactionData, b: TransactionData) =>
      a.transactionEmployee.localeCompare(b.transactionEmployee),
  },
  {
    title: "Үйлдэл",
    key: "operation",
    fixed: "right",
    width: 150,
    render: (_: any, record: TransactionData) => (
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
