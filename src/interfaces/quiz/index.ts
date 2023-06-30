import { TopicInterface } from 'interfaces/topic';
import { GetQueryInterface } from 'interfaces';

export interface QuizInterface {
  id?: string;
  name: string;
  topic_id?: string;
  created_at?: any;
  updated_at?: any;

  topic?: TopicInterface;
  _count?: {};
}

export interface QuizGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  topic_id?: string;
}
