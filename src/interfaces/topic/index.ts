import { QuizInterface } from 'interfaces/quiz';
import { CourseInterface } from 'interfaces/course';
import { GetQueryInterface } from 'interfaces';

export interface TopicInterface {
  id?: string;
  name: string;
  course_id?: string;
  created_at?: any;
  updated_at?: any;
  quiz?: QuizInterface[];
  course?: CourseInterface;
  _count?: {
    quiz?: number;
  };
}

export interface TopicGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  course_id?: string;
}
