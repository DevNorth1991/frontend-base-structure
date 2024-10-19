//JavaScript
import { getAPI_URL } from "./config.js";

const API_URL = getAPI_URL();

const EP_AUTH = `${API_URL}auth`;
const EP_AUTH_GENERATETOKEN = `${EP_AUTH}/generateToken`;
const EP_AUTH_GETROLES = `${EP_AUTH}/getRoles`;

//aqui podemos dejar todos los enpoints que nuestra aplicacion va a necesitar 

export { EP_AUTH_GENERATETOKEN, EP_AUTH_GETROLES };