import axios from 'axios';


const createRecordUrl = 'https://api.airtable.com/v0/appvao7Efftfzq9wm/favlist'
const bearerToken = 'Bearer patDcFKAE6lSV2xY9.0138e6e7433458bb2de1e7c120b705cb40aef21b318f87d74bcec8dd11a45020'

const postDataToAirtable = async (exerciseData) => {
  try {
    const response = await axios.post(
      createRecordUrl,
      {
        fields: {
            name: exerciseData.name,
            id:exerciseData.id,
            bodyPart : exerciseData.bodyPart,
            gifUrl : exerciseData.gifUrl,
            equipment:exerciseData.equipment,
            
            
        }
         // Pass the data to be added to Airtable
      },
      {
        headers: {
          Authorization:bearerToken,
        }
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default postDataToAirtable;
