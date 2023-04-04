import React from "react";
import './Authorization.css';

import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import {
  // Import predefined theme
  ThemeSupa,
} from '@supabase/auth-ui-shared'


const supabaseUrl = 'https://cyyyiyorohhyfjtgxcvn.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5eXlpeW9yb2hoeWZqdGd4Y3ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg4OTM1OTMsImV4cCI6MTk5NDQ2OTU5M30.5V2YVNcv6HF4mMPry3-Kd130HZA-BhG0SmDEk12OsVM"
const supabase = createClient(supabaseUrl, supabaseKey)




export class Authorization extends React.Component {



render() {


  

return (
  
<Auth
    supabaseClient={supabase}
  
    appearance={{ theme: ThemeSupa }}
    theme='dark'
  />
  )
  
}
}


