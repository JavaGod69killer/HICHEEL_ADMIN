import { ProFormInstance } from "@ant-design/pro-form";
import { IModalForm } from "components/modal";
import { useRef, useEffect, useState } from "react";
import { ActionComponentProps } from "type";
import { Info } from "./parts/info";
import { useRequest } from "ahooks"; // For API request

export const DetailService = ({ ...rest }: ActionComponentProps<any>) => {
  const formRef = useRef<ProFormInstance>();
  const [detailData, setDetailData] = useState(null);

  // Example: Fetch detail data using rowKey
  const { run: fetchDetail } = useRequest(
    async (id) => {
      // Replace this with your actual API call
      // Example: await yourApi.getDetailById(id);
      return rest.record; // Assuming you pass the row data
    },
    {
      manual: true,
      onSuccess: (data) => {
        setDetailData(data);
      },
    }
  );

  // Fetch data when modal opens
  useEffect(() => {
    if (rest.open && rest.record?.id) {
      fetchDetail(rest.record.id);
    }
  }, [rest.open, rest.record]);

  return (
    <IModalForm
      open={rest.open}
      title="Дэлгэрэнгүй мэдээлэл"
      formRef={formRef}
      onOpenChange={() => {
        formRef.current?.resetFields();
      }}
      width={1000}
      scrollToFirstError={true}
      modalProps={{ maskClosable: true, onCancel: rest.onCancel }}
      cancelText={"Хаах"}
      okButtonProps={{ style: { display: "none" } }} // Hide the save button
      className="px-3"
    >
      {detailData ? (
        <Info actionName="detail" data={detailData} />
      ) : (
        <div>Уншиж байна...</div>
      )}
    </IModalForm>
  );
};
