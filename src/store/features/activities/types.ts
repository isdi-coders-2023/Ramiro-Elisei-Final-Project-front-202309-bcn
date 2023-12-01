export interface ActivityStructure {
  _id: string;
  activityType: string;
  activityName: string;
  ledBy: string;
  date: string;
  startTime: string;
  activityDescription: string;
  imageUrl: string;
  imageSmallUrl: string;
}

export interface ActivitiesInitialStructure {
  activities: ActivityStructure[];
}
