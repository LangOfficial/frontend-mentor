const markAllRead = document.getElementById('mark-all-read');
const notificationCount = document.getElementById('notification-count')
const unreadNotifications = Array.from(document.querySelectorAll('.notification-unread-container'));
const notificationAlerts = Array.from(document.querySelectorAll('.notification-alert'));

console.log('cihefo');
markAllRead.addEventListener('click', () => {
  unreadNotifications.forEach(unread => {
    unread.classList.remove('notification-unread-container');
    unread.classList.add('notification-read-container')
    notificationAlerts.forEach(alert => {
      alert.remove();
    })
    notificationCount.innerText = 0;
  })
})