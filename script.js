document.getElementById('openAppButton').addEventListener('click', function() {
    // Generate random device_id, conversation_id, and log_id for demonstration
    const device_id = Math.random().toString(36).substring(2, 15);
    const conversation_id = Math.random().toString(36).substring(2, 15);
    const log_id = Math.random().toString(36).substring(2, 15);

    const baseLink = 'snssdk1180://';
    const params = `?device_id=${device_id}&conversation_id=${conversation_id}&log_id=${log_id}`;

    const deeplink = baseLink + params;

    // Attempt to open the app
    window.location.href = deeplink;

    // Fallback for when the app is not installed
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
        // For Android, you can redirect to the Play Store
        setTimeout(function() {
            window.location.href = 'https://play.google.com/store/apps/details?id=com.lemon.lvoverseas';
        }, 2500);
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        // For iOS, you can redirect to the App Store
        setTimeout(function() {
            window.location.href = 'https://apps.apple.com/app/id1500855883'; // Example App Store URL
        }, 2500);
    }
});