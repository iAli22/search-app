export type Job = {
  id: string;
  type: string;
  attributes: {
    title: string;
    name?: string;
    type: string;
    importance: string;
    level: string;
  };
  relationships: {
    skills: {
      id: string;
    }[];
  };
};

export type Skill = {
  id: string;
  type: string;
  attributes: Attributes;
  relationships: {
    jobs: { id: string }[];
    skills: { id: string }[];
  };
};

export interface Attributes {
  name: string;
  type: string;
  importance: string;
  level: string;
  title?: string;
}

// Store
export type Store = {
  jobs: {
    data: Job[];
    search: Job[];
    hasMore: boolean;
    cursor: number;
    loading: boolean;
  };
};
