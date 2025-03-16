export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      demo_requests: {
        Row: {
          id: string
          name: string
          email: string
          company: string
          phone: string
          message: string | null
          created_at: string
          status: string
          scheduled_at: string | null
          user_id: string | null
        }
        Insert: {
          id?: string
          name: string
          email: string
          company: string
          phone: string
          message?: string | null
          created_at?: string
          status?: string
          scheduled_at?: string | null
          user_id?: string | null
        }
        Update: {
          id?: string
          name?: string
          email?: string
          company?: string
          phone?: string
          message?: string | null
          created_at?: string
          status?: string
          scheduled_at?: string | null
          user_id?: string | null
        }
      }
    }
  }
}

export type DemoRequest = Database['public']['Tables']['demo_requests']['Row']