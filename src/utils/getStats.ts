import { INote } from "../types/INote";
import categories from "./categories";
interface statsInterface {
  [key: string]: { archived: number; active: number };
}
function getStats(notes: Array<INote>) {
  const stats: statsInterface = {};
  categories.forEach((category) => {
    stats[category] = { active: 0, archived: 0 };
    notes.forEach((note) => {
      if (note.category === category && !note.is_archived) {
        stats[category].active++;
      } else if (note.category === category && note.is_archived) {
        stats[category].archived++;
      }
    });
  });
  return stats;
}
export default getStats;
