import StatsTable from "../components/StatsTable";
export default {
  title: "StatsTable",
  component: StatsTable,
};

const exampleStats = {
  Task: {
    active: 1,
    archived: 2,
  },
  Thoughts: {
    active: 3,
    archived: 2,
  },
  Idea: {
    active: 5,
    archived: 4,
  },
  Quote: {
    active: 0,
    archived: 7,
  },
};

export const Table = () => <StatsTable stats={exampleStats} />;
