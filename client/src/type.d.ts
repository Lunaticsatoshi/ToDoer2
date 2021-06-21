interface ITodo {
  _id: string;
  title: string;
  description: string;
  status: boolean;
  createdAt?: string;
  updatedAt?: string;
}

interface TodoProps {
  todo: ITodo;
}

type APIDataType = {
  message: string;
  status: string;
  todo: ITodo;
  todos: ITodo[];
};
