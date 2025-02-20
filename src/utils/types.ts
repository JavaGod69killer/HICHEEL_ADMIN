export interface AntdFile {
  uid: string;
  name?: string;
  status: string;
  response: string;
  url: any;
  originFileObj?: File;
}

export enum RoleType {
  ADMIN = "admin",
  USER = "user",
}

export enum GenderType {
  MALE = 0,
  FEMALE = 1,
}
export interface ActionComponentProps<T> {
  open: boolean;
  onCancel: () => void;
  onFinish?: () => void;
  detail?: T;
  details?: T[];
}

export interface RemoveModelConfig<T> {
  action?: (id: number) => Promise<SuccessResponse>;
  config: (record?: T) => {
    uniqueKey?: number;
    display: React.ReactNode;
    title?: string;
    body?: any;
    cancelTitle?: string;
    customTitle?: string;
  };
}
export type SuccessResponse = {success: boolean, message: string};

export const IsBoolEnum  = {
  "1" :{"value":true,"label":"Тийм"}, 
  
}