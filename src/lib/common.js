import _ from "lodash";

export const recomposeData = (data) => {
    if(!data || _.isEmpty(data)) return [];
    const groups = [[], [],[]];
    const groupHeight =[0,0,0];
    for (let i =0; i<data.length; i++){
        const ratioHeight = data[i].height /data[i].width;
        const minHeightIndex =groupHeight.indexOf(Math.min(...groupHeight));
        groups[minHeightIndex].push(data[i]);
        groupHeight[minHeightIndex] = groupHeight[minHeightIndex] + ratioHeight;
    }
    return groups;
}