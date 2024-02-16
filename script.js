document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('users.json')
    .then(response => response.json())
    .then(data => {
        const user = data.users.find(user => user.name === username);

        if (!user) {
            document.getElementById('errorMessage').innerText = 'Benutzer nicht gefunden.';
            return;
        }

        if (password === user.password) {
            document.getElementById('loginPage').style.display = 'none';
            document.getElementById('internalArea').style.display = 'block';
        } else {
            document.getElementById('errorMessage').innerText = 'Falsches Passwort.';
        }
    })
    .catch(error => {
        console.error('Fehler beim Laden der Benutzerdaten:', error);
    });
});
