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
        // For Android, redirect to a download page as Google Play is not available in China.
        setTimeout(function() {
            alert('应用未安装，即将跳转到下载页面。');
            window.location.href = 'https://www.capcut.com/';
        }, 2500);
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        // For iOS, redirect to the App Store.
        setTimeout(function() {
            alert('应用未安装，即将跳转到 App Store。');
            window.location.href = 'https://apps.apple.com/app/id1500855883'; // CapCut App Store URL
        }, 2500);
    }
});