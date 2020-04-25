import { create } from 'apisauce';
import { CamelcaseSerializer } from 'cerealizr';
import Config from 'react-native-config';
import Reactotron from 'reactotron-react-native';

const camelCaseSerializer = new CamelcaseSerializer();

const baseURL = Config.API;

const api = create({
  baseURL,
  timeout: 5000
});

api.addMonitor(Reactotron.apisauce);

export const apiSetup = (/* dispatch */) => {
  api.addResponseTransform(response => {
    if (response.data) response.data = camelCaseSerializer.serialize(response.data);
  });
};

export default api;
