export interface Career {
  id: number;
  user_id: number;
  name: string;
  contents: string;
  s_date: string;
  e_date: string;
  created_at: string;
  updated_at: string;
}

export interface CarreerSkill {
  id: number;
  user_id: number;
  career_id: number;
  created_at: string;
  updated_at: string;
}
