import { ActivityStructure } from "../store/features/activities/types";

const activitiesMockData: ActivityStructure[] = [
  {
    _id: "656493fa44b5521c2584c216",
    activityType: "Workshop",
    activityName: "Generative plant gadering",
    ledBy: "Steve Green and Lia Rasmussen",
    date: "",
    startTime: "15:00",
    activityDescription:
      "Cultivate sustainable ideas in our playful Generative Plant Gathering workshop: where creativity blossoms with environmental consciousness.",
    imageUrl: "https://i.ibb.co/8zFCCQk/plant-gadering.webp",
    imageSmallUrl: "https://i.ibb.co/7vH8sj7/plant-gadering-small.webp",
  },
  {
    _id: "656493fa44b5521c2584c21c",
    activityType: "Talks",
    activityName: "Absurdity Unleashed Talk",
    ledBy: "Jester Jack",
    date: "",
    startTime: "11:45",
    activityDescription:
      "Jack humorously explores wildly creative yet absurd solutions to sustainable challenges in engaging, thought-provoking lectures.",
    imageUrl: "https://i.ibb.co/0jgqppJ/Absurdity-Talk.webp",
    imageSmallUrl: "https://i.ibb.co/vmR5Bbw/Absurdity-Talk-small.webp",
  },
];

export default activitiesMockData;
