export interface PermissionItemProps {
  id: number;
  permission: string;
  url?: string;
  sort: number;
  idParent?: number;
  type?: number;
  icon?: string;
  children: PermissionItemProps[];
  pageTitle: string;
  isTitleOnly?: boolean;
  isAction?: boolean;
  isDisable?: boolean;
}

export interface TypeFileUpload {
  fileKey?: string;
  fileName: string;
  filePath?: string;
  fileSize?: number;
  fileType?: string;
}

export interface TypeFile {
  id: number;
  fileKey: string;
  fileName: string;
  filePath: string;
  fileSize: number;
  fileType: string;
}
