import pb from '../lib/Pocketbase';

export default function useTasks() {
  async function getTasks(page, perPage, sort = '-created') {
    try {
      const tasks = await pb.collection('tasks').getList(page, perPage, {
        sort: sort,
      });
      return tasks.items;
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  }
  async function getTaskById(taskId) {
    try {
      const task = await pb.collection('tasks').getOne(taskId);
      console.log(`Fetched Task: ${task.name}`);
      return task;
    } catch (error) {
      console.error('Error fetching task:', error);
    }
  }

  async function editTask(taskId, taskData) {
    try {
      console.log(taskData);
      const editedTask = await pb.collection('tasks').update(taskId, taskData);
      console.log(`Edited Task: ${editedTask.name}`);
      return editedTask;
    } catch (error) {
      console.error('Error Editing task:', error);
    }
  }
  async function deleteTask(taskId) {
    try {
      await pb.collection('tasks').delete(taskId);
      console.log(`Task with ID ${taskId} got deleted successfully.`);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  }

  async function createTask(taskData) {
    try {
      const newTask = await pb.collection('tasks').create(taskData);
      console.log('Task created successfully:', newTask);
      return newTask;
    } catch (error) {
      console.error('Error creating task:', error);
    }
  }

  return {
    getTasks,
    getTaskById,
    editTask,
    deleteTask,
    createTask,
  };
}
