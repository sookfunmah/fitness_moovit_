import axios from 'axios';


const createRecordUrl = 'https://api.airtable.com/v0/appvao7Efftfzq9wm/favlist'
const bearerToken = process.env.REACT_APP_BEARER_TOKEN

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
