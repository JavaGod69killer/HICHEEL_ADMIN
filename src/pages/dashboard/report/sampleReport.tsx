import React from "react";
import { Button, Space, Switch } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";

export const REPORT_SAMPLES: ReportData[] = Array.from({ length: 20 }, (_, index) => ({
  status: "Хаагдах",
  type: "Худалдаа",
  documentNumber: `${4567890 + index}`,
  date: "2021-09-01",
  totalPaid: 1000000,
  cash: 500000,
  nonCash: 500000,
  totalPayment: 1000000,
  craneFee: 100000,
  roadUsage: 100000,
  cargoStorage: 100000,
  containerWagonCleaning: 100000,
  wagonUsage: 100000,
  tlWagonUsage: 100000,
  customsInspection: 100000,
  forklift: 100000,
  vehicleEntry: 100000,
}));

interface ReportData {
  status: string;
  type: string;
  documentNumber: string;
  date: string;
  totalPaid: number;
  cash: number;
  nonCash: number;
  totalPayment: number;
  craneFee: number;
  roadUsage: number;
  cargoStorage: number;
  containerWagonCleaning: number;
  wagonUsage: number;
  tlWagonUsage: number;
  customsInspection: number;
  forklift: number;
  vehicleEntry: number;
}

const handleEdit = (record: ReportData) => {
  console.log("Editing:", record);
};

const handleDelete = (record: ReportData) => {
  console.log("Deleting:", record);
};

const handleView = (record: ReportData) => {
  console.log("Viewing:", record);
};

export const REPORT_COLUMNS = [
  {
    title: "Төлөв",
    dataIndex: "status",
    width: 184,
    sorter: (a: ReportData, b: ReportData) => a.status.localeCompare(b.status),
  },
  {
    title: "Төрөл",
    dataIndex: "type",
    width: 184,
    sorter: (a: ReportData, b: ReportData) => a.type.localeCompare(b.type),
  },
  {
    title: "Баримт дугаар",
    dataIndex: "documentNumber",
    width: 180,
    sorter: (a: ReportData, b: ReportData) => Number(a.documentNumber) - Number(b.documentNumber),
  },
  {
    title: "Огноо",
    dataIndex: "date",
    width: 184,
    sorter: (a: ReportData, b: ReportData) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  },
  {
    title: "Нийт төлсөн",
    dataIndex: "totalPaid",
    width: 184,
    sorter: (a: ReportData, b: ReportData) => a.totalPaid - b.totalPaid,
  },
  {
    title: "Бэлнээр",
    dataIndex: "cash",
    width: 120,
    sorter: (a: ReportData, b: ReportData) => a.cash - b.cash,
  },
  {
    title: "Бэлэн бусаар",
    dataIndex: "nonCash",
    width: 120,
    sorter: (a: ReportData, b: ReportData) => a.nonCash - b.nonCash,
  },
  {
    title: "Нийт төлбөр",
    dataIndex: "totalPayment",
    width: 184,
    sorter: (a: ReportData, b: ReportData) => a.totalPayment - b.totalPayment,
  },
  {
    title: "Краны хөлс",
    dataIndex: "craneFee",
    width: 184,
    sorter: (a: ReportData, b: ReportData) => a.craneFee - b.craneFee,
  },
  {
    title: "Зам талбай ашиглалт",
    dataIndex: "roadUsage",
    width: 184,
    sorter: (a: ReportData, b: ReportData) => a.roadUsage - b.roadUsage,
  },
  {
    title: "Ачаа хадгаламж",
    dataIndex: "cargoStorage",
    width: 184,
    sorter: (a: ReportData, b: ReportData) => a.cargoStorage - b.cargoStorage,
  },
  {
    title: "Чингэлэг вагон цэвэрлэгээ",
    dataIndex: "containerWagonCleaning",
    width: 180,
    sorter: (a: ReportData, b: ReportData) => a.containerWagonCleaning - b.containerWagonCleaning,
  },
  {
    title: "Вагон ашиглалт",
    dataIndex: "wagonUsage",
    width: 184,
    sorter: (a: ReportData, b: ReportData) => a.wagonUsage - b.wagonUsage,
  },
  {
    title: "TL Вагон ашиглалт",
    dataIndex: "tlWagonUsage",
    width: 184,
    sorter: (a: ReportData, b: ReportData) => a.tlWagonUsage - b.tlWagonUsage,
  },
  {
    title: "Гаалийн үзлэг",
    dataIndex: "customsInspection",
    width: 184,
    sorter: (a: ReportData, b: ReportData) => a.customsInspection - b.customsInspection,
  },
  {
    title: "Авто ачигч",
    dataIndex: "forklift",
    width: 184,
    sorter: (a: ReportData, b: ReportData) => a.forklift - b.forklift,
  },
  {
    title: "Машин оролт",
    dataIndex: "vehicleEntry",
    width: 184,
    sorter: (a: ReportData, b: ReportData) => a.vehicleEntry - b.vehicleEntry,
  },
//   {
//     title: "Үйлдэл",
//     key: "operation",
//     fixed: "right",
//     width: 184,
//     render: (_: any, record: ReportData) => (
//       <Space>
//         <Button icon={<EyeOutlined />} onClick={() => handleView(record)} style={{ marginRight: "8px" }} />
//         <Button icon={<EditOutlined />} onClick={() => handleEdit(record)} style={{ marginRight: "8px" }} />
//         <Button icon={<DeleteOutlined />} danger onClick={() => handleDelete(record)} />
//       </Space>
//     ),
//   },
];
