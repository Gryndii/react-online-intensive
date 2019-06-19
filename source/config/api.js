// Core
import { getFullApiUrl } from 'instruments';

const GROUP_ID = 'qi6mqple8zsy';
const TOKEN = 'eo4wsmndmn';
const url = 'https://lab.lectrum.io/react/api';
const api = getFullApiUrl(url, GROUP_ID);

export { GROUP_ID, TOKEN, api, url };
