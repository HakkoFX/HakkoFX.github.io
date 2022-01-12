class index
{
    constructor()
    {
    }
    async loginSession() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        var encodedPWD = "YjY3ZjNlYTNmZWYzNmRlYzE5MDU2MGMwZjhkOTdlMWMzYWEwNDFlYTQzNWRkYWVlZDNhYzY1NWZkNTRhNDY3MzYwZjFhYTBkMTllNDUyODFkZGNlZDdmNDRkM2EwYTA2ZGMzZjQ5MWUyYWFiNzM2MjNjMWM3ODQzMjMyNGUxNmY=";
        var preparedSTR = new TextEncoder().encode(password);
        var pwdActEnc = await crypto.subtle.digest("SHA-512", preparedSTR);
        var pwdActEncHArr = Array.from(new Uint8Array(pwdActEnc));
        var hexActEncS = pwdActEncHArr.map(b => b.toString(16).padStart(2, '0')).join('');

        if (encodedPWD == btoa(hexActEncS) && username == "HakkoFX") {
            location.href="../homepage.html";
        }
        preparedSTR = null;
        pwdActEnc = null;
        pwdActEncHArr = null;
        hexActEncS = null;
    }
}