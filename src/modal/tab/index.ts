export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export interface TabProps {
  data: Array<{
    id: number;
    label: string;
    icon?: any;
    subLabel?: string;
    componentContent: React.ReactElement;
  }>;
  sx?: any;
  btn?: React.ReactElement;
  element?: React.ReactElement;
  onClickTab?: Function;
  isSwitchTab?: boolean;
}
