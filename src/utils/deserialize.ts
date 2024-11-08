export function deserializecontent(activityData : string) {
    try {
      return JSON.parse(activityData);
    } catch (error) {
      console.error(error);
    }
  };