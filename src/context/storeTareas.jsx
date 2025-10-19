import { create } from "zustand";

const storeTareas = create((set) => ({
  tareas: [],
  agregarTarea: (nuevaTarea) =>
    set((state) => ({ tareas: [...state.tareas, nuevaTarea] })),
}));

export default storeTareas;
