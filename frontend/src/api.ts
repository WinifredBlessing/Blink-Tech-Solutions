import { Course, Lesson } from './types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Helper to get auth token
export const getAuthToken = () => localStorage.getItem('admin_token');

export const setAuthToken = (token: string) => localStorage.setItem('admin_token', token);

export const clearAuthToken = () => localStorage.removeItem('admin_token');

// Headers helper
const getHeaders = (requireAuth = false) => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'Bypass-Tunnel-Reminder': 'true'
  };
  
  if (requireAuth) {
    const token = getAuthToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  }
  
  return headers;
};

// --- PUBLIC APIS ---

export const fetchCourses = async (): Promise<Course[]> => {
  const res = await fetch(`${API_URL}/courses`, { headers: getHeaders() });
  if (!res.ok) throw new Error('Failed to fetch courses');
  return res.json();
};

export const fetchCourseById = async (id: string): Promise<Course & { lessons: Lesson[] }> => {
  const res = await fetch(`${API_URL}/courses/${id}`, { headers: getHeaders() });
  if (!res.ok) throw new Error('Failed to fetch course details');
  return res.json();
};

// --- ADMIN APIS ---

export const adminLogin = async (email: string, password: string) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({ email, password }),
  });
  
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Login failed');
  
  if (data.session?.access_token) {
    setAuthToken(data.session.access_token);
  }
  
  return data;
};

export const createCourse = async (courseData: Partial<Course>): Promise<Course> => {
  const res = await fetch(`${API_URL}/courses`, {
    method: 'POST',
    headers: getHeaders(true),
    body: JSON.stringify(courseData),
  });
  if (!res.ok) throw new Error('Failed to create course');
  return res.json();
};

export const updateCourse = async (id: string, courseData: Partial<Course>): Promise<Course> => {
  const res = await fetch(`${API_URL}/courses/${id}`, {
    method: 'PUT',
    headers: getHeaders(true),
    body: JSON.stringify(courseData),
  });
  if (!res.ok) throw new Error('Failed to update course');
  return res.json();
};

export const deleteCourse = async (id: string): Promise<void> => {
  const res = await fetch(`${API_URL}/courses/${id}`, {
    method: 'DELETE',
    headers: getHeaders(true),
  });
  if (!res.ok) throw new Error('Failed to delete course');
};

export const createLesson = async (lessonData: Partial<Lesson>): Promise<Lesson> => {
  const res = await fetch(`${API_URL}/lessons`, {
    method: 'POST',
    headers: getHeaders(true),
    body: JSON.stringify(lessonData),
  });
  if (!res.ok) throw new Error('Failed to create lesson');
  return res.json();
};

export const deleteLesson = async (id: string): Promise<void> => {
  const res = await fetch(`${API_URL}/lessons/${id}`, {
    method: 'DELETE',
    headers: getHeaders(true),
  });
  if (!res.ok) throw new Error('Failed to delete lesson');
};
