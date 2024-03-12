const API = "http://192.168.1.63:3000/tasks";

export const DeleteTask = async (id) => {
  await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
};

export const GetTasks = async () => {
  const res = await fetch(API, {
    method: "GET",
  });
  return await res.json();
};

export const SaveTask = async (newTask) => {
  
  const res = await fetch(API, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTask),
  });
  return await res.json();
};

export const GetTask = async (taskId) => {
  const res = await fetch(`${API}/${taskId}`);
  return await res.json();
};

export const UpdateTask = async (taskId, newTask) => {
  const res = await fetch(`${API}/${taskId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTask),
  });
  return res;
};