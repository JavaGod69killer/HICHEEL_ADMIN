import React from "react";
import { Button, Space } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { AlignJustify } from "untitledui-js-base";

// Define status colors
const statusColors: Record<string, { color: string; backgroundColor: string }> =
  {
    pending: { color: "#389e0d", backgroundColor: "#f6ffed" }, // Green - Шинээр ирсэн
    canceled: { color: "#d46b08", backgroundColor: "#fff7e6" }, // Orange - Цуцалсан
  };

// Sample Data
export const TICKET_CANCELLATION_SAMPLES: TicketCancellationData[] = Array.from(
  { length: 20 },
  (_, index) => ({
    date: new Date(2025, 1, index + 1).toISOString().split("T")[0], // Generates different dates (YYYY-MM-DD)
    ticketNumber: `${4567890 + index}`,
    code: "0528",
    feeName: "hi dafee",
    category: "hi category",
    requestingCashier: "boss",
    status: index % 2 === 0 ? "pending" : "canceled", // Change boolean to string
  })
);

// Define Data Interface
interface TicketCancellationData {
  date: string;
  ticketNumber: string;
  code: string;
  feeName: string;
  category: string;
  requestingCashier: string;
  status: string; // Change from boolean to string
}

// Action Handlers
const handleEdit = (record: TicketCancellationData) =>
  console.log("Editing:", record);
const handleDelete = (record: TicketCancellationData) =>
  console.log("Deleting:", record);
const handleView = (record: TicketCancellationData) =>
  console.log("Viewing:", record);

// Table Columns
export const TICKET_CANCELLATION_COLUMNS = [
  {
    title: "Огноо",
    dataIndex: "date",
    width: 150,
    sorter: (a: TicketCancellationData, b: TicketCancellationData) =>
      new Date(a.date).getTime() - new Date(b.date).getTime(),
  },
  {
    title: "Тасалбарын дугаар",
    dataIndex: "ticketNumber",
    width: 180,
    sorter: (a: TicketCancellationData, b: TicketCancellationData) =>
      Number(a.ticketNumber) - Number(b.ticketNumber),
  },
  {
    title: "Код",
    dataIndex: "code",
    width: 120,
    sorter: (a: TicketCancellationData, b: TicketCancellationData) =>
      a.code.localeCompare(b.code),
  },
  {
    title: "Хураамжийн нэр",
    dataIndex: "feeName",
    width: 200,
    sorter: (a: TicketCancellationData, b: TicketCancellationData) =>
      a.feeName.localeCompare(b.feeName),
  },
  {
    title: "Ангилал",
    dataIndex: "category",
    width: 180,
    sorter: (a: TicketCancellationData, b: TicketCancellationData) =>
      a.category.localeCompare(b.category),
  },
  {
    title: "Хүсэлт явуулсан кассир",
    dataIndex: "requestingCashier",
    width: 220,
    sorter: (a: TicketCancellationData, b: TicketCancellationData) =>
      a.requestingCashier.localeCompare(b.requestingCashier),
  },
  {
    title: "Төлөв",
    dataIndex: "status",
    width: 150,
    sorter: (a: TicketCancellationData, b: TicketCancellationData) =>
      a.status.localeCompare(b.status), // Now safe to compare strings
    render: (status: string) => {
      let text = status === "pending" ? "Шинээр ирсэн" : "Цуцалсан";
      return (
        <div
          style={{
            color: statusColors[status].color,
            backgroundColor: statusColors[status].backgroundColor,
            padding: "4px 8px",
            borderRadius: "4px",
            display: "inline-block",
          }}
        >
          {text}
        </div>
      );
    },
  },
  // {
  //   title: "Үйлдэл",
  //   key: "operation",
  //   fixed: "right",
  //   width: 70,
  //   render: (_: any, record: TicketCancellationData) => (
  //     <Space>
  //       <Button
  //         style={{
  //           display: "flex",
  //           justifyContent: "center",
  //           alignItems: "center",
  //         }}
  //         icon={<DeleteOutlined />}
  //         danger
  //         onClick={() => handleDelete(record)}
  //       />{" "}
  //     </Space>
  //   ),
  // },
];
