import { TopicInterface } from 'interfaces/topic';
import { TrainerInterface } from 'interfaces/trainer';
import { GetQueryInterface } from 'interfaces';

export interface CourseInterface {
  id?: string;
  name: string;
  trainer_id?: string;
  created_at?: any;
  updated_at?: any;
  topic?: TopicInterface[];
  trainer?: TrainerInterface;
  _count?: {
    topic?: number;
  };
}

export interface CourseGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  trainer_id?: string;
}
