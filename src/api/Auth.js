export const apiLogIn = async (email, password) => {
    let user = {
      email: email,
      password: password
    };

    return fetch(
      `https://loft-taxi.glitch.me/auth`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
      }
    ).then(res => res.json());
  };
  
  
