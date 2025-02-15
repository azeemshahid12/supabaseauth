import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'
const supabaseUrl = 'https://zbpjxujtlcqvmidqxljz.supabase.co'
const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpicGp4dWp0bGNxdm1pZHF4bGp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkzODcxOTEsImV4cCI6MjA1NDk2MzE5MX0.c-1DM7zUMHgsiyeudD5Jkase4J4KqkhXpOl5kAsSeho'
const supabase = createClient(supabaseUrl, supabaseKey)
let name = document.getElementById('name')
let email = document.getElementById('email');
let password = document.getElementById('pswrd');
let button = document.getElementById('butn');

button.addEventListener("click", async () => {
  if (!name.value || !email.value || !password.value) {
   alert('Please fill all fields')
    return;
  }
  else {
    if(!email.value.includes('@gmail.com')){
      alert('The email must contain abc123@gmail.com')
    }
    else{
    try {

      const { data, error } = await supabase.auth.signUp({
        name: name.value,
        email: email.value,
        password: password.value
      }); 
      console.log("Success")
    }
    catch (err) {
      console.error(err);
      alert('The email is invalid')
      alert(err.message)
    }
  }
}
}
);