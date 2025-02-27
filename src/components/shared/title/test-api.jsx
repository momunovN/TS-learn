import axios from 'axios';



export default testApi = async () =>{
    
    const options = {
      method: 'GET',
      url: 'https://api.dodois.io/dodopizza/ru/accounting/products',
      headers: {Accept: 'application/json', Authorization: 'Bearer 123'}
    };
    
    try {
      const { data } = await axios.request(options);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
}