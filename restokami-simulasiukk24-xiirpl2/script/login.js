const user = {
    username: 'naufal',
    password: '123'
}

const inputUsername = document.getElementById('username')
const inputPassword = document.getElementById('password')

const login = () => {
    if (inputUsername.value == 0) {
        alert("username tidak boleh kosong")
    } else {
        if (user.username != inputUsername.value) {
            alert('username salah')
        } else {
            if (user.password != inputPassword.value) {
                alert ('password salah')
            } else {
                window.location.href = "index.html"
            }
        }
    }
}