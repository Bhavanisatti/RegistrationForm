document.getElementById('registrationForm').addEventListener('submit', async function (e) {
    e.preventDefault(); 
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const state = document.getElementById('state').value;


    if (password !== confirmPassword) 
        {
        alert('Passwords do not match');
        return;
      }

    const formData = 
    {
        username,
        email,
        password,
        dob,
        country,
        state
    };

    try {
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();
        if (data.success) 
        {
            alert('Registration successful');
        } else
         {
            alert('Registration failed: ' + data.message); 
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Registration failed. Please try again later.');
    }
});
