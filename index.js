const offCanvas = document.getElementById('messageContainer')
const messages = document.getElementById('messages')
const messageIcon = document.getElementById('messageArrow')

offCanvas.addEventListener('click', () => {
    if (messages.style.display === 'block') {
        messages.style.display = 'none'
        messageIcon.classList.add('bi-arrow-up')
        messageIcon.classList.remove('bi-arrow-down')

    } else {
        offCanvas.classList.add('showMessages')
        messages.style.display = 'block'
        messageIcon.classList.remove('bi-arrow-up')
        messageIcon.classList.add('bi-arrow-down')
    }
})