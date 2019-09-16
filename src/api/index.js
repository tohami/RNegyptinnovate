import config from '../config/config';

const errorResponse = { success: false, error: { message: 'Error Calling API' } };

export const fetchNews = async () => {
  try {
    const response = await fetch(`${config.API_URL}/GetNews`);
    if (response.status === 200) {
      const responseJson = await response.json();
      return { success: true, payload: responseJson.News };
    } 
    return errorResponse;
  } catch (error) {
    return errorResponse;
  }
};


export const fetchNewsDetails = async (newsId) => {
  try {
    const response = await fetch(`${config.API_URL}/GetNewsDetails?nid=${newsId}`);
    if (response.status === 200) {
      const responseJson = await response.json();
      return { success: true, payload: responseJson.newsItem };
    } 
    return errorResponse;
  } catch (error) {
    return errorResponse;
  }
};