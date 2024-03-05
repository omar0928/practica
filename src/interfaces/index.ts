export interface Task {
  id: string;
  name: string;
  descripcion: string;
  status: string;
  colaborador: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: string;
  tasks: Task[];
}
