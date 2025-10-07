export interface TreeNodeData {
  id: string;
  name: string;
  description: string;
  children?: TreeNodeData[];
  overview?: string;
  howItWorks?: string;
  applications?: string[];
  advantages?: string[];
  limitations?: string[];
  gettingStarted?: string[];
  pitfalls?: string[];
}

export interface NodePosition {
  x: number;
  y: number;
  angle: number;
  radius: number;
}