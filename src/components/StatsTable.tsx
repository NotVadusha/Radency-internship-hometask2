import { AiOutlineShoppingCart, AiOutlineBulb } from "react-icons/ai";
import { LuBrainCog } from "react-icons/lu";
import { LiaQuoteRightSolid } from "react-icons/lia";

interface statsInterface {
  [key: string]: { archived: number; active: number };
}
type InputProps = {
  stats: statsInterface;
};
const StatsTable = ({ stats }: InputProps) => {
  return (
    <>
      <table className="mx-auto container overflow-scroll table-auto border-separate border-spacing-x-0 border-spacing-y-2">
        <thead className="table-header-group">
          <tr className="bg-gray-300 rounded">
            <th className="text-center w-14 h-14 rounded-l my-4"></th>
            <th className="text-left">Name</th>
            <th className="text-left">Active</th>
            <th className="text-left rounded-r">Archived</th>
          </tr>
        </thead>
        <tbody className="">
          {Object.keys(stats).map((category) => (
            <tr className="bg-blue-200 rounded">
              <th className="text-center h-14 rounded-l">
                <div className="bg-gray-200 h-12 w-12 mx-auto rounded-full">
                  {category === "Task" && (
                    <AiOutlineShoppingCart className="w-10 h-10 mx-auto inline my-1" />
                  )}
                  {category === "Thoughts" && (
                    <LuBrainCog className="w-10 h-10 mx-auto inline my-1" />
                  )}
                  {category === "Idea" && (
                    <AiOutlineBulb className="w-10 h-10 mx-auto inline my-1" />
                  )}
                  {category === "Quote" && (
                    <LiaQuoteRightSolid className="w-10 h-10 mx-auto inline my-1" />
                  )}
                </div>
              </th>
              <td>{category}</td>
              <td>{stats[category].active}</td>
              <td className="rounded-r">{stats[category].archived}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default StatsTable;
