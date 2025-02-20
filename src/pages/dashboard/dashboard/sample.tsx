// export const CAPACIY_SAMPLES = Array(10).fill({
//   arrivalDate: "2025-02-15",
//   arrivalBorder: "MN",
//   import: true,
//   containerNumber: "21",
//   capacity: "1000",
//   brokerName: "tamira",
//   load: true,
//   sell: true,
//   price: "10000$",
//   brokerCode: "0528",
//   blockNumber: "10",
//   unloadedSite: true,
//   arrivedSite: true,
//   unloaded: true,
//   released: false,
//   loaded: false,
// });

// export const CAPACITY_COLUMNS = [
//   { title: "Дөхөлт огноо", dataIndex: "arrivalDate" },
//   { title: "Орох хил", dataIndex: "arrivalBorder" },
//   { title: "Ирэх/Явах", dataIndex: "import" },
//   { title: "Чингэлэгийн дугаар", dataIndex: "containerNumber" },
//   { title: "Багтаамж", dataIndex: "capacity" },
//   { title: "Зуучийн нэр", dataIndex: "brokerName" },
//   { title: "Ачилт хийсэн", dataIndex: "load" },
//   { title: "Борлуулалт", dataIndex: "sell" },
//   { title: "Үнэ", dataIndex: "price" },
//   { title: "Зуучийн код", dataIndex: "brokerCode" },
//   { title: "Блокийн дугаар", dataIndex: "blockNumber" },
//   { title: "Талбайд задарсан", dataIndex: "unloadedSite" },
//   { title: "Талбайд ирсэн", dataIndex: "arrivedSite" },
//   { title: "Задарсан", dataIndex: "unloaded" },
//   { title: "Суларсан", dataIndex: "released" },
//   { title: "Ачилт хийсэг", dataIndex: "loaded" },
// ];
import React from "react";
import { Button, Space, Switch } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";

export interface CapacityData {
  arrivalDate: string;
  arrivalBorder: string;
  isImport: boolean;
  containerNumber: string;
  capacity: string;
  brokerName: string;
  isLoaded: boolean;
  isSold: boolean;
  price: string;
  brokerCode: string;
  blockNumber: string;
  isUnloadedSite: boolean;
  isArrivedSite: boolean;
  isUnloaded: boolean;
  isReleased: boolean;
  isLoadedStatus: boolean;
}

export const CAPACITY_SAMPLES: CapacityData[] = Array.from(
  { length: 10 },
  (_, index) => ({
    arrivalDate: "2025-02-15",
    arrivalBorder: "MN",
    isImport: true,
    containerNumber: `21${index}`,
    capacity: "1000",
    brokerName: "Tamira",
    isLoaded: true,
    isSold: true,
    price: "10000$",
    brokerCode: "0528",
    blockNumber: "10",
    isUnloadedSite: true,
    isArrivedSite: true,
    isUnloaded: true,
    isReleased: false,
    isLoadedStatus: false,
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

export const CAPACITY_COLUMNS = [
  { title: "Дөхөлт огноо", dataIndex: "arrivalDate", width: 150 },
  { title: "Орох хил", dataIndex: "arrivalBorder", width: 120 },
  { title: "Импорт", dataIndex: "isImport", width: 120 },
  { title: "Чингэлэгийн дугаар", dataIndex: "containerNumber", width: 180 },
  { title: "Багтаамж", dataIndex: "capacity", width: 120 },
  { title: "Зуучийн нэр", dataIndex: "brokerName", width: 150 },
  { title: "Ачилт", dataIndex: "isLoaded", width: 120 },
  { title: "Борлуулалт", dataIndex: "isSold", width: 120 },
  { title: "Үнэ", dataIndex: "price", width: 120 },
  { title: "Зуучийн код", dataIndex: "brokerCode", width: 120 },
  { title: "Блокийн дугаар", dataIndex: "blockNumber", width: 120 },
  { title: "Талбайд задарсан", dataIndex: "isUnloadedSite", width: 150 },
  { title: "Талбайд ирсэн", dataIndex: "isArrivedSite", width: 150 },
  { title: "Задарсан", dataIndex: "isUnloaded", width: 120 },
  { title: "Суларсан", dataIndex: "isReleased", width: 120 },
  {
    title: "Үйлдэл",
    key: "operation",
    fixed: "right",
    width: 180,
    render: (_: any, record: CapacityData) => (
      <Space>
        <Button icon={<EyeOutlined />} onClick={() => handleView(record)} style={{ marginRight: "8px" }} />
        <Button icon={<EditOutlined />} onClick={() => handleEdit(record)} style={{ marginRight: "8px" }} />
        <Button icon={<DeleteOutlined />} danger onClick={() => handleDelete(record)} />
      </Space>
    ),
  },
];