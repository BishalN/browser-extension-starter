interface IEntry {
  uuid: string;
  timestamp: string;
}

export interface IPBOD extends IEntry {
  name: string;
  image?: string;
  richText?: string;
}

export interface ISettingsGoals {
  goalOrQuote: string;
  authorName: string;
  useRandomQuote: boolean;
}

export interface ISettingsBackground {
  id: string;
  url: string;
  height?: number;
  width?: number;
  description?: string;
  tags?: string[];
  useDefault: boolean;
}

export interface ITodo extends IEntry {
  text: string;
  completed: boolean;
  updatedAt: string;
}
