export type Job = {
  id: string;
  type: string;
  attributes: {
    title: string;
  };
  relationships: {
    skills: {
      id: string;
    };
  };
};

export type skill = {
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
}

// Store
export type Store = {
  jobs: Job[];
};
