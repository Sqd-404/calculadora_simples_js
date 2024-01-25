document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('generate-button').addEventListener('click', function () {
        const eventName = document.getElementById('event-name').value;
        const eventDescription = document.getElementById('event-description').value;
        const eventDate = document.getElementById('event-date').value;
        const eventTime = document.getElementById('event-time').value;
        const reminderValue = document.getElementById('reminder-value').value;
        const reminderType = document.querySelector('input[name="reminder"]:checked').value;

        const eventDateTime = eventDate.replace(/-/g, '').replace(/:/g, '') + '00';

        const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Jeferson Lima//Agenda de Medicamentos//PT-BR

BEGIN:VEVENT
DTSTART:${eventDateTime}
SUMMARY:${eventName}
DESCRIPTION:${eventDescription}
BEGIN:VALARM
TRIGGER:${reminderType === 'before' ? 'PT' : '-PT'}${reminderValue}M
ACTION:DISPLAY
END:VALARM
END:VEVENT

END:VCALENDAR`;

        const icsBlob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
        const url = window.URL.createObjectURL(icsBlob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'evento.ics';
        a.click();
        window.URL.revokeObjectURL(url);
    });

    window.addEventListener('resize', handleResize);

    function handleResize() {
        const windowWidth = window.innerWidth;
        const formContainer = document.querySelector('.container');

        if (windowWidth <= 768) {
            formContainer.style.maxWidth = '90%';
        } else {
            formContainer.style.maxWidth = '400px';
        }
    }
});
