document.getElementById('sender_link').onclick = senderToChat = () => {
    let el = document.getElementById("sender_link");
    let content = 'Не отмечайте. ' + '' + '' + '"Костя Ельский". Спасибо.';
    let val = 'https://api.telegram.org/bot929953209:AAE_oPT4aTBXsC3KlA7gXCY8PcC5YdlOZSI/sendMessage?chat_id=-1001115456835&text=' + content;
    el.setAttribute("href", val);
};
