import pb from '../lib/Pocketbase';

export default function useTasks() {
  async function getTasks(userId, sort = '-created') {
    try {
      const tasks = await pb.collection('tasks').getList(1, 3, {
        sort: sort,
      });
      return tasks.items;
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  }
  return {
    getTasks,
  };
}
