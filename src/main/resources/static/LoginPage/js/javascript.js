document.getElementById('submitButton').addEventListener('click', function () {
    const msisdn = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    // Burada msisdn'nin doğru değeri aldığını kontrol edin
    console.log("MSISDN:", msisdn);

    fetch('http://35.242.205.201/v1/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            msisdn: msisdn,
            password: password,
        }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.statusCodeValue == 200) {
            localStorage.removeItem('msisdn');
            localStorage.setItem('msisdn', msisdn);
            window.location.href = `UserInformationPage.html`;
        } else {
            console.log(data)
            alert('Login failed: ' + data.message);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
});
