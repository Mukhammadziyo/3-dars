export type FormentryValue = null | FormDataEntryValue;

export interface Todo {
  id: number;
  title: string | FormentryValue;
  description: string | FormentryValue;
  type: "easy" | "normal" | "hard" | FormentryValue;
  completed: boolean | FormentryValue;
}
