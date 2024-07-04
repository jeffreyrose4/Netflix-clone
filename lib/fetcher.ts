// import axios from "axios";

// const fetcher = (url: string) => axios.get(url).then((res) => res.data);

// export default fetcher;

import axios from "axios";

const fetcher = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default fetcher;