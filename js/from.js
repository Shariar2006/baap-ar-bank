document.getElementById('login-btn').addEventListener('click', function(){
    const emailFild = document.getElementById('user-email');
    const email = emailFild.value;
    const passwordFild = document.getElementById('user-password');
    const password = passwordFild.value;
    if(email === 'shariarnafis86@gmail.com' && password === 'shariar'){
        window.location.href = 'bank.html'
    }
    else{alert('invalid user')}
})