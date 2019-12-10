import axios from 'axios';
import { URLS } from '../configAndUtils';

const API = URLS.apiUrl;

export class RequestHandler {
  static fetchStudents() {
    return axios.get(`${API}/student`);
  }

  static fetchStudent(id) {
    return axios.get(`${API}/student/${id}`);
  }

  static editStudent(id) {
    return axios.put(`${API}/student/${id}`);
  }

  static deleteStudent(id) {
    return axios.delete(`${API}/student/${id}`);
  }
}
