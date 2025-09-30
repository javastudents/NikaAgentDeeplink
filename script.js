document.getElementById('openAppButton').addEventListener('click', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const params = new URLSearchParams();

    const device_id = urlParams.get('device_id');
    if (device_id) {
        params.append('device_id', device_id);
    }

    const conversation_id = urlParams.get('conversation_id');
    if (conversation_id) {
        params.append('conversation_id', conversation_id);
    }

    const log_id = urlParams.get('log_id');
    if (log_id) {
        params.append('log_id', log_id);
    }

    const baseLink = 'snssdk1180://';
    const paramString = params.toString();
    const deeplink = baseLink + (paramString ? '?' + paramString : '');

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