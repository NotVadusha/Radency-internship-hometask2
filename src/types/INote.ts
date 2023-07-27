export interface INote {
  id: string;
  name: string;
  createDate: Date;
  category: string;
  content: string;
  is_archived: boolean;
}
