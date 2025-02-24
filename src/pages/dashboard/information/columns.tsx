import React from "react";
import { Button, Space, Switch } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";

export const CAPACITY_SAMPLES: CapacityData[] = Array.from(
  { length: 20 },
  (_, index) => ({
    abbreviation: "MGL",
    companyName: `MOT forex ${index + 1}`,
    isBroker: index % 2 === 0,
    account: `${4567890 + index}`,
    contactNumber: `8947518${index}`,
  })
);

interface CapacityData {
  abbreviation: string;
  companyName: string;
  isBroker: boolean;
  account: string;
  contactNumber: string;
}

const handleEdit = (record: CapacityData) => {
  console.log("Editing:", record);
};

const handleDelete = (record: CapacityData) => {
  console.log("Deleting:", record);
};

const handleView = (record: CapacityData) => {
  console.log("Viewing:", record);
};

const handleToggleChange = (record: CapacityData, checked: boolean) => {
  console.log("Toggled Switch for:", record.companyName, "New Value:", checked);
  // Ideally, update the state here if managing data dynamically
};

export const CAPACITY_COLUMNS = [
  {
    title: "Товчлол",
    dataIndex: "abbreviation",
    width: 368,
    sorter: (a: CapacityData, b: CapacityData) =>
      a.abbreviation.localeCompare(b.abbreviation),
  },
  {
    title: "Компаний нэр",
    dataIndex: "companyName",
    width: 368,
    sorter: (a: CapacityData, b: CapacityData) =>
      a.companyName.localeCompare(b.companyName),
  },
  {
    title: "Зууч эсэх",
    dataIndex: "isBroker",
    width: 368,
    sorter: (a: CapacityData, b: CapacityData) =>
      Number(a.isBroker) - Number(b.isBroker),
    render: (isBroker: boolean, record: CapacityData) => (
      <Space>
        <Switch
          checked={isBroker}
          onChange={(checked) => handleToggleChange(record, checked)}
        />
      </Space>
    ),
  },
  {
    title: "Данс",
    dataIndex: "account",
    width: 368,

    sorter: (a: CapacityData, b: CapacityData) =>
      Number(a.account) - Number(b.account),
  },
  {
    title: "Харилцах дугаар",
    dataIndex: "contactNumber",
    width: 160,
    sorter: (a: CapacityData, b: CapacityData) =>
      Number(a.contactNumber) - Number(b.contactNumber),
  },
  {
    title: "Үйлдэл",
    key: "operation",
    fixed: "right",
    width: 160,
    render: (_: any, record: CapacityData) => (
      <Space>
        <Button
          icon={<EyeOutlined />}
          onClick={() => handleView(record)}
          style={{ marginRight: "8px" }}
        />
        <Button
          icon={<EditOutlined />}
          onClick={() => handleEdit(record)}
          style={{ marginRight: "8px" }}
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
// import React, { useState, useEffect } from "react";
// import { Button, Space, Switch } from "antd";
// import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
// import axios from "axios";

// interface CapacityData {
//   abbreviation: string;
//   companyName: string;
//   isBroker: boolean;
//   account: string;
//   contactNumber: string;
// }

// // State for fetched data
// export const useCapacityData = () => {
//   const [capacitySamples, setCapacitySamples] = useState<CapacityData[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://jsonplaceholder.typicode.com/users"
//         );
//         const transformedData = response.data.map(
//           (user: any, index: number) => ({
//             abbreviation: user.username.slice(0, 3).toUpperCase(),
//             companyName: user.company.name,
//             isBroker: index % 2 === 0, // Just randomizing for demo
//             account: `${4567890 + index}`,
//             contactNumber: user.phone.split(" ")[0],
//           })
//         );
//         setCapacitySamples(transformedData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return capacitySamples;
// };

// // Column Definitions
// const handleEdit = (record: CapacityData) => console.log("Editing:", record);
// const handleDelete = (record: CapacityData) => console.log("Deleting:", record);
// const handleView = (record: CapacityData) => console.log("Viewing:", record);
// const handleToggleChange = (record: CapacityData, checked: boolean) =>
//   console.log("Toggled:", record.companyName, "New Value:", checked);

// export const CAPACITY_COLUMNS = [
//   {
//     title: "Товчлол",
//     dataIndex: "abbreviation",
//     width: 150,
//     sorter: (a: CapacityData, b: CapacityData) =>
//       a.abbreviation.localeCompare(b.abbreviation),
//   },
//   {
//     title: "Компаний нэр",
//     dataIndex: "companyName",
//     width: 250,
//     sorter: (a: CapacityData, b: CapacityData) =>
//       a.companyName.localeCompare(b.companyName),
//   },
//   {
//     title: "Зууч эсэх",
//     dataIndex: "isBroker",
//     width: 150,
//     sorter: (a: CapacityData, b: CapacityData) =>
//       Number(a.isBroker) - Number(b.isBroker),
//     render: (isBroker: boolean, record: CapacityData) => (
//       <Space>
//         <Switch
//           checked={isBroker}
//           onChange={(checked) => handleToggleChange(record, checked)}
//         />
//       </Space>
//     ),
//   },
//   {
//     title: "Данс",
//     dataIndex: "account",
//     width: 200,
//     sorter: (a: CapacityData, b: CapacityData) =>
//       Number(a.account) - Number(b.account),
//   },
//   {
//     title: "Харилцах дугаар",
//     dataIndex: "contactNumber",
//     width: 200,
//     sorter: (a: CapacityData, b: CapacityData) =>
//       Number(a.contactNumber) - Number(b.contactNumber),
//   },
//   {
//     title: "Үйлдэл",
//     key: "operation",
//     fixed: "right",
//     width: 180,
//     render: (_: any, record: CapacityData) => (
//       <Space>
//         <Button icon={<EyeOutlined />} onClick={() => handleView(record)} />
//         <Button icon={<EditOutlined />} onClick={() => handleEdit(record)} />
//         <Button
//           icon={<DeleteOutlined />}
//           danger
//           onClick={() => handleDelete(record)}
//         />
//       </Space>
//     ),
//   },
// ];
