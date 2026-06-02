 <script>
        const SUPABASE_URL = "https://pqgvxedfjgmdhyvayytm.supabase.co"; 
        const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxZ3Z4ZWRmamdtZGh5dmF5eXRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAzMTE3MjcsImV4cCI6MjA5NTg4NzcyN30.IaiAlbn6TwdyF1iE4Lmo_2VNNq27unQwyIFAAUXipTg";
        const BASE_URL = "https://vajira-official-apis.vercel.app";
        const PREMIUM_KEY = "vajira-VajiraOfficial2003";

        const apiData = [
            { id: 1, name: "YouTube Video Downloader", endpoint: "/api/ytmp4", category: "downloaders", param: "url", description: "Download YouTube Video in multiple formats.", example: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", method: "GET", status: "active" },
            { id: 2, name: "YouTube Audio Downloader", endpoint: "/api/ytmp3", category: "downloaders", param: "url", description: "Download YouTube Audio in multiple formats.", example: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", method: "GET", status: "active" },
            { id: 3, name: "Twitter/X Downloader", endpoint: "/api/twitterdl", category: "downloaders", param: "url", description: "Extract videos from Twitter/X.", example: "https://twitter.com/user/status/123", method: "GET", status: "active" },
            { id: 4, name: "Instagram Downloader", endpoint: "/api/igdl", category: "downloaders", param: "url", description: "Download Instagram content.", example: "https://www.instagram.com/p/Cxxx/", method: "GET", status: "active" },
            { id: 5, name: "Facebook Downloader", endpoint: "/api/fbdl", category: "downloaders", param: "url", description: "Premium Facebook video download.", example: "https://www.facebook.com/watch/?v=123", method: "GET", status: "active" },
            { id: 6, name: "Spotify Downloader", endpoint: "/api/spotifydl", category: "downloaders", param: "url", description: "Extract Spotify tracks with HQ quality.", example: "https://open.spotify.com/track/...", method: "GET", status: "active" },
            { id: 7, name: "GitHub Cloner", endpoint: "/api/gitclone", category: "downloaders", param: "url", description: "Clone GitHub repositories as ZIP.", example: "https://github.com/user/repo", method: "GET", status: "active" },
            { id: 8, name: "Aptoide Search", endpoint: "/api/aptoide", category: "ai", param: "q", description: "Search Android apps on Aptoide.", example: "WhatsApp", method: "GET", status: "active" },
            { id: 9, name: "Spotify Search", endpoint: "/api/spotifysearch", category: "ai", param: "query", description: "Advanced Spotify metadata search.", example: "Ed Sheeran", method: "GET", status: "active" },
            { id: 10, name: "TikTok Search", endpoint: "/api/ttsearch", category: "ai", param: "q", description: "TikTok content discovery engine.", example: "funny videos", method: "GET", status: "active" },
            { id: 11, name: "Blackbox AI", endpoint: "/api/blackboxai", category: "ai", param: "q", description: "Advanced AI reasoning responses.", example: "How to code in C++?", method: "GET", status: "active" },
            { id: 12, name: "Gemini AI", endpoint: "/api/gemini", category: "ai", param: "text", description: "Interface with Google Gemini AI.", example: "Explain quantum physics", method: "GET", status: "active" },
            { id: 13, name: "Text to Image AI", endpoint: "/api/txt2img", category: "ai", param: "text", description: "Generate images from text prompts.", example: "Cyberpunk city 8k", method: "GET", status: "active" },
            { id: 14, name: "Genshin Build Helper", endpoint: "/api/genshinbuild", category: "utilities", param: "q", description: "Get optimal Genshin builds.", example: "Zhongli", method: "GET", status: "active" },
            { id: 15, name: "Pastebin Reader", endpoint: "/api/getpastebin", category: "utilities", param: "url", description: "Read Pastebin content easily.", example: "https://pastebin.com/...", method: "GET", status: "active" },
            { id: 16, name: "Website to ZIP", endpoint: "/api/web2zip", category: "downloaders", param: "url", description: "Convert websites to ZIP files.", example: "https://example.com", method: "GET", status: "active" },
            { id: 17, name: "Website Screenshot", endpoint: "/api/ssweb", category: "images", param: "url", description: "Take website screenshots.", example: "https://google.com", method: "GET", status: "active" },
            { id: 18, name: "Text Translator", endpoint: "/api/translate", category: "utilities", param: "text", description: "Multi-language neural translation.", example: "Hello", method: "GET", status: "active" },
            { id: 19, name: "Weather API", endpoint: "/api/cuaca", category: "utilities", param: "kota", description: "Real-time global weather data.", example: "London", method: "GET", status: "active" },
            { id: 20, name: "Virtual Credit Card", endpoint: "/api/vcc", category: "utilities", param: "query", description: "Generate test VCC details.", example: "4111...", method: "GET", status: "active" },
            { id: 21, name: "Welcome/Goodbye Image", endpoint: "/api/welcome-goodbye-image", category: "images", param: "name", description: "Generate welcome banners.", example: "John", method: "GET", status: "active" },
            { id: 22, name: "Emoji Mixer", endpoint: "/api/emojimix", category: "images", param: "emojis", description: "Mix two emojis into one.", example: "😀+🔥", method: "GET", status: "active" },
            { id: 23, name: "Quote Creator", endpoint: "/api/qc", category: "images", param: "text", description: "Create stylish quote images.", example: "Stay hungry", method: "GET", status: "active" },
            { id: 24, name: "Brat Image Generator", endpoint: "/api/brat", category: "images", param: "text", description: "Generate brat-style text.", example: "Brat", method: "GET", status: "active" },
            { id: 25, name: "Handwriting Generator", endpoint: "/api/nulis", category: "images", param: "text", description: "Convert text to handwriting.", example: "Homework", method: "GET", status: "active" },
            { id: 26, name: "QR Code Generator", endpoint: "/api/qrcodegenerator", category: "images", param: "text", description: "Generate clean QR codes.", example: "https://google.com", method: "GET", status: "active" },
            { id: 27, name: "Ghibli Images", endpoint: "/api/ghibliimage", category: "images", param: "query", description: "Studio Ghibli art search.", example: "Totoro", method: "GET", status: "active" },
            { id: 28, name: "Tweet Generator", endpoint: "/api/tweet", category: "images", param: "text", description: "Create fake tweet images.", example: "Hello", method: "GET", status: "active" },
            { id: 29, name: "Khodam Checker", endpoint: "/api/cekkhodam", category: "utilities", param: "name", description: "Spiritual analysis.", example: "Ahmad", method: "GET", status: "active" },
            { id: 30, name: "Spotify DL Search", endpoint: "/api/spotidl", category: "downloaders", param: "q", description: "Spotify downloader.", example: "Pasoori", method: "GET", status: "active" },
            { id: 31, name: "Movies Search", endpoint: "/api/moviesearch", category: "movie", param: "query", description: "Find movie metadata.", example: "Doctor Strange", method: "GET", status: "active" },
            { id: 32, name: "Movies Downloader", endpoint: "/api/moviesdl", category: "movie", param: "q", description: "Download movie content.", example: "Movie name", method: "GET", status: "active" },
            { id: 33, name: "Animexine Search", endpoint: "/api/animexinsearch", category: "movie", param: "q", description: "Search anime.", example: "Tales", method: "GET", status: "active" },
            { id: 34, name: "Animexine Downloader", endpoint: "/api/animexindetails", category: "movie", param: "url", description: "Get anime download links.", example: "Animexine URL", method: "GET", status: "active" },
            { id: 35, name: "MovieBd Search", endpoint: "/api/moviebdsearch", category: "movie", param: "q", description: "Movie database search.", example: "2025", method: "GET", status: "active" },
            { id: 36, name: "MovieBd Dl", endpoint: "/api/moviebddl", category: "movie", param: "url", description: "Download from MovieBd.", example: "MovieBd URL", method: "GET", status: "active" },
            { id: 37, name: "TikTok Downloader", endpoint: "/api/ttdl", category: "downloaders", param: "url", description: "No-Watermark download.", example: "TikTok URL", method: "GET", status: "active" },
            { id: 38, name: "Wallpaper", endpoint: "/api/wallpaper", category: "ai", param: "q", description: "HQ Wallpaper search.", example: "Nature", method: "GET", status: "active" },
            { id: 39, name: "Sticker", endpoint: "/api/sticker", category: "ai", param: "q", description: "WhatsApp sticker search.", example: "Anime", method: "GET", status: "active" },
            { id: 40, name: "Voice Gpt", endpoint: "/api/voicegpt", category: "ai", param: "q", description: "AI Voice interaction.", example: "How are you?", method: "GET", status: "active" },
            { id: 41, name: "Npm Search", endpoint: "/api/npmsearch", category: "ai", param: "q", description: "Search npm packages.", example: "axios", method: "GET", status: "active" },
            { id: 42, name: "Xnxx Search", endpoint: "/api/xnxx-search", category: "downloaders", param: "q", description: "Adult site search.", example: "search name", method: "GET", status: "active" },
            { id: 43, name: "Xnxx Dl", endpoint: "/api/xnxx-dl", category: "downloaders", param: "url", description: "Adult content downloader.", example: "Xnxx URL", method: "GET", status: "active" },
            { id: 44, name: "Vajira Ai", endpoint: "/api/vajiraai", category: "ai", param: "q", description: "Native AI chat engine.", example: "Explain life", method: "GET", status: "active" },
            { id: 45, name: "Vajira Ai Image", endpoint: "/api/vajiraai-image", category: "ai", param: "q", description: "AI Image generator.", example: "Quantum cat", method: "GET", status: "active" },
            { id: 46, name: "Gdrive Video Download", endpoint: "/api/gdrivedl", category: "downloaders", param: "url", description: "Download Gdrive videos.", example: "Gdrive Link", method: "GET", status: "active" },
            { id: 47, name: "123mkv Search", endpoint: "/api/123mkv", category: "movie", param: "q", description: "Search on 123mkv.", example: "Action", method: "GET", status: "active" },
            { id: 48, name: "123mkv Download", endpoint: "/api/123mkvdetails", category: "movie", param: "url", description: "Download from 123mkv.", example: "123mkv URL", method: "GET", status: "active" },
            { id: 49, name: "Dailymotion Download", endpoint: "/api/dailymotion", category: "downloaders", param: "url", description: "Extract Dailymotion videos.", example: "Dailymotion URL", method: "GET", status: "active" },
            { id: 50, name: "Capcut Download", endpoint: "/api/capcut", category: "downloaders", param: "url", description: "Download Capcut templates.", example: "Capcut URL", method: "GET", status: "active" },
            { id: 51, name: "Pinterest Video Download", endpoint: "/api/pinterest", category: "downloaders", param: "url", description: "Download Pinterest videos.", example: "Pinterest URL", method: "GET", status: "active" },
            { id: 52, name: "Lyrics Search", endpoint: "/api/lyrics", category: "ai", param: "q", description: "Find song lyrics globally.", example: "Shape of You", method: "GET", status: "active" },
            { id: 53, name: "Youtube Channel Details", endpoint: "/api/ytchannel", category: "downloaders", param: "url", description: "Get YT channel info.", example: "Channel URL", method: "GET", status: "active" },
            { id: 54, name: "Text to Video", endpoint: "/api/text2video", category: "ai", param: "q", description: "Generate video from text.", example: "Cat dancing", method: "GET", status: "active" },
            { id: 55, name: "Pc Game downloader", endpoint: "/api/pcgame", category: "downloaders", param: "q", description: "Download PC games.", example: "NFS", method: "GET", status: "active" },
            { id: 56, name: "Wildshare downloader", endpoint: "/api/wildshare", category: "downloaders", param: "url", description: "Extract Wildshare files.", example: "Wildshare URL", method: "GET", status: "active" },
            { id: 57, name: "Naijaprey Movie search", endpoint: "/api/Naijaprey", category: "movie", param: "q", description: "Search Naijaprey movies.", example: "2025", method: "GET", status: "active" },
            { id: 58, name: "Naijaprey Downloader", endpoint: "/api/naijapreydetails", category: "movie", param: "url", description: "Download from Naijaprey.", example: "Naijaprey URL", method: "GET", status: "active" },
            { id: 59, name: "Gofile downloader", endpoint: "/api/gofile", category: "downloaders", param: "url", description: "Download from Gofile.", example: "Gofile URL", method: "GET", status: "active" },
            { id: 60, name: "mlfbd Movie search", endpoint: "/api/mlfbds", category: "movie", param: "text", description: "Search mlfbd movies.", example: "Movie URL", method: "GET", status: "active" },
            { id: 61, name: "mlfbd downloader", endpoint: "/api/mlfbddl", category: "movie", param: "url", description: "Download from mlfbd.", example: "Movie URL", method: "GET", status: "active" },
            { id: 62, name: "Movielover Movie search", endpoint: "/api/movielovers", category: "movie", param: "text", description: "Search Movielover films.", example: "Movie URL", method: "GET", status: "active" },
            { id: 63, name: "Movielover downloader", endpoint: "/api/movieloverdl", category: "movie", param: "url", description: "Download from Movielover.", example: "Movie URL", method: "GET", status: "active" },
            { id: 64, name: "MyFlix Movie search", endpoint: "/api/myflixs", category: "movie", param: "text", description: "Search MyFlix content.", example: "Movie URL", method: "GET", status: "active" },
            { id: 65, name: "MyFlix downloader", endpoint: "/api/myflixdl", category: "movie", param: "link", description: "Download from MyFlix.", example: "Movie URL", method: "GET", status: "active" },
            { id: 66, name: "Youtube search", endpoint: "/api/ytsearch", category: "downloaders", param: "q", description: "YouTube content search.", example: "Music", method: "GET", status: "active" },
            { id: 67, name: "Notun Movie search", endpoint: "/api/notuns", category: "movie", param: "text", description: "Search Notun movies.", example: "Movie URL", method: "GET", status: "active" },
            { id: 68, name: "Notun downloader", endpoint: "/api/notundl", category: "movie", param: "url", description: "Download from Notun.", example: "Movie URL", method: "GET", status: "active" },
            { id: 69, name: "Vega Movie search", endpoint: "/api/vegamovies", category: "movie", param: "text", description: "Search Vega movies.", example: "Movie URL", method: "GET", status: "active" },
            { id: 70, name: "Vega downloader", endpoint: "/api/vegamoviedl", category: "movie", param: "link", description: "Download from Vega.", example: "Movie URL", method: "GET", status: "active" },
            { id: 71, name: "Xhamster search", endpoint: "/api/xhamsters", category: "movie", param: "text", description: "Adult search hub.", example: "Name", method: "GET", status: "active" },
            { id: 72, name: "mediafire search", endpoint: "/api/mediafiredl", category: "movie", param: "url", description: "Download Mediafire files.", example: "Mediafire URL", method: "GET", status: "active" },
            { id: 73, name: "Animostlk search", endpoint: "/api/animostlk", category: "movie", param: "q", description: "Search Animostlk movies.", example: "Anime name", method: "GET", status: "active" },
            { id: 74, name: "Animostlk downloader", endpoint: "/api/animostlkdl", category: "movie", param: "url", description: "Download from Animostlk.", example: "Movie URL", method: "GET", status: "active" },
            { id: 75, name: "Cinesubz search", endpoint: "/api/cinesubz", category: "movie", param: "q", description: "Search Cinesubz movies.", example: "Movie name", method: "GET", status: "active" },
            { id: 76, name: "Cinesubz details", endpoint: "/api/cinesubzdetails", category: "movie", param: "url", description: "Cinesubz info.", example: "Movie URL", method: "GET", status: "active" },
            { id: 77, name: "Cinesubz Tvshow details", endpoint: "/api/cinesubztvshowdetails", category: "movie", param: "url", description: "Tvshow info.", example: "Tv URL", method: "GET", status: "active" },
            { id: 78, name: "Telegram Downloader", endpoint: "/api/telegramdl", category: "downloaders", param: "url", description: "Download Telegram files.", example: "Telegram Link", method: "GET", status: "active" },
            { id: 79, name: "Ytsbz Search", endpoint: "/api/ytsbz", category: "movie", param: "q", description: "Ytsbz movie search.", example: "2025", method: "GET", status: "active" },
            { id: 80, name: "All Torrent Downloader", endpoint: "/api/alltorrentdl", category: "movie", param: "url", description: "Magnet link downloader.", example: "Magnet link", method: "GET", status: "active" },
            { id: 81, name: "Moviebox search", endpoint: "/api/movieboxs", category: "movie", param: "query", description: "Moviebox content search.", example: "Movie name", method: "GET", status: "active" },
            { id: 76, name: "Movie box stream details", endpoint: "/api/movieboxdls", category: "movie", param: "subjectId=PUT_ID&detailPath=PUT_PATH&season=0&episode=0", description: "Fetch media resolutions, streams, and captions.", example: "Text Eg:- subjectId=4009074076768698256&detailPath=transformers-one-wwiZVkjB9M4", method: "GET", status: "active", lastChecked: null, responseTime: null },
            { id: 83, name: "Movibd search", endpoint: "/api/movibd", category: "movie", param: "search", description: "Search Movibd.", example: "Movie name", method: "GET", status: "active" },
            { id: 84, name: "Movibd downloader", endpoint: "/api/movibddl", category: "movie", param: "url", description: "Download from Movibd.", example: "Movie URL", method: "GET", status: "active" },
            { id: 85, name: "Moviect Search", endpoint: "/api/moviect", category: "movie", param: "search", description: "Search Moviect.", example: "Movie name", method: "GET", status: "active" },
            { id: 86, name: "Moviect downloader", endpoint: "/api/moviectdl", category: "movie", param: "url", description: "Download from Moviect.", example: "Movie URL", method: "GET", status: "active" },
            { id: 87, name: "PornHub Search", endpoint: "/api/pornhub", category: "ai", param: "query", description: "Adult site search.", example: "Mia", method: "GET", status: "active" },
            { id: 88, name: "Fitgirl search", endpoint: "/api/fitgirls", category: "movie", param: "q", description: "Search Fitgirl games.", example: "Game name", method: "GET", status: "active" },
            { id: 89, name: "Fitgirl details", endpoint: "/api/fitgirldetails", category: "movie", param: "url", description: "Fitgirl info.", example: "Game URL", method: "GET", status: "active" },
            { id: 90, name: "Fitgirl dl", endpoint: "/api/fitgirldl", category: "movie", param: "url", description: "Direct Fitgirl download.", example: "Rar URL", method: "GET", status: "active" },
            { id: 92, name: "Youtube Metadata", endpoint: "/api/ytmetadata", category: "downloaders", param: "url", description: "Get YT video metadata.", example: "Video URL", method: "GET", status: "active" },
            { id: 93, name: "Xhamster search", endpoint: "/api/xhamster", category: "downloaders", param: "text", description: "Adult content indexer.", example: "Xhamster name", method: "GET", status: "active" }
        ];

        window.onload = () => {
            setTimeout(() => {
                document.getElementById('loader').style.opacity = '0';
                setTimeout(() => document.getElementById('loader').style.display = 'none', 500);
            }, 2000);
            
            checkActiveSession();
            renderLists();
            setupNav();
            setupSidebarToggle();
            setInterval(updateRealPerf, 3000);
            setInterval(simulateLogs, 4000);
            updateRealPerf();
        };

function toggleAuthView(view) {
    document.getElementById('login-block').style.display = view === 'login' ? 'block' : 'none';
    document.getElementById('signup-block').style.display = view === 'signup' ? 'block' : 'none';
    document.getElementById('reset-block').style.display = view === 'reset' ? 'block' : 'none';
    
    // Clear alerts
    document.querySelectorAll('.auth-alert').forEach(a => a.style.display = 'none');
}

        
       /* function toggleAuthView(view) {
            document.getElementById('login-error').style.display = 'none';
            document.getElementById('login-success').style.display = 'none';
            document.getElementById('signup-error').style.display = 'none';

            if (view === 'signup') {
                document.getElementById('login-block').style.display = 'none';
                document.getElementById('signup-block').style.display = 'block';
            } else {
                document.getElementById('signup-block').style.display = 'none';
                document.getElementById('login-block').style.display = 'block';
            }
        }*/

        function checkActiveSession() {
            const activeUser = localStorage.getItem('v_auth_user');
            if (activeUser) grantSystemAccess(activeUser);
        }

        function grantSystemAccess(username) {
            document.getElementById('auth-container').style.display = 'none';
            document.querySelector('.main-container').style.display = 'block';
            const userBadge = document.getElementById('auth-user-badge');
            userBadge.innerHTML = `<i class="fas fa-user-circle"></i> NODE: ${username.toUpperCase()}`;
            userBadge.style.display = 'block';
        }

        function terminateSession() {
            localStorage.removeItem('v_auth_user');
            document.getElementById('auth-user-badge').style.display = 'none';
            document.querySelector('.main-container').style.display = 'none';
            document.getElementById('login-form').reset();
            document.getElementById('auth-container').style.display = 'flex';
            toggleAuthView('login');
        }




async function handleResetRequest(e) {
    e.preventDefault();
    const email = document.getElementById('reset-email').value.trim();
    const alertBox = document.getElementById('reset-alert');

    try {
        alertBox.className = "auth-alert";
        alertBox.textContent = "Verifying registry...";
        alertBox.style.display = 'block';

        // 1. Check if email exists in database
        const query = `${SUPABASE_URL}/rest/v1/users?email=eq.${encodeURIComponent(email)}&select=username`;
        const response = await fetch(query, {
            headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` }
        });
        const data = await response.json();

        if (data && data.length > 0) {
            // 2. Logic: In a real app, you would trigger a serverless function here
            // to send a unique reset link to the user's email.
            alertBox.className = "auth-alert success";
            alertBox.textContent = "Recovery instructions sent to " + email;
            console.log("Reset initiated for:", data[0].username);
        } else {
            throw new Error("Email not found in terminal registry.");
        }
    } catch (err) {
        alertBox.className = "auth-alert error";
        alertBox.textContent = "[ERROR]: " + err.message;
    }
}

        
        async function handleRegistration(e) {
            e.preventDefault();
            const username = document.getElementById('signup-name').value.trim();
            const email = document.getElementById('signup-email').value.trim();
            const password = document.getElementById('signup-pass').value;
            const confirm = document.getElementById('signup-confirm').value;
            const errorAlert = document.getElementById('signup-error');

            errorAlert.style.display = 'none';

            if (password !== confirm) {
                errorAlert.textContent = "[ERROR]: Passwords do not match.";
                errorAlert.style.display = 'block';
                return;
            }

            try {
                // Prepare the payload strictly
                const payload = {
                    username: username,
                    email: email,
                    password: password
                };

                const registerUrl = `${SUPABASE_URL}/rest/v1/users`;
                const response = await fetch(registerUrl, {
                    method: 'POST',
                    headers: {
                        'apikey': SUPABASE_ANON_KEY,
                        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                        'Content-Type': 'application/json',
                        'Prefer': 'return=representation' // Changed from minimal to see if it returns the object
                    },
                    body: JSON.stringify(payload)
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    console.error("Supabase Error Details:", errorData);
                    throw new Error(errorData.message || "Database rejected the transaction.");
                }

                alert("Registration successful!");
                toggleAuthView('login');

            } catch (err) {
                errorAlert.textContent = `[EXCEPTION]: ${err.message}`;
                errorAlert.style.display = 'block';
            }
        }



async function handleResetRequest(e) {
    e.preventDefault();
    const email = document.getElementById('reset-email').value.trim();
    const alertBox = document.getElementById('reset-alert');

    // Reset UI state
    alertBox.className = "auth-alert";
    alertBox.textContent = "Verifying registry...";
    alertBox.style.display = 'block';

    try {
        // 1. Check if email exists in database
        // We look up the user record first
        const query = `${SUPABASE_URL}/rest/v1/users?email=eq.${encodeURIComponent(email)}&select=username`;
        
        const response = await fetch(query, {
            headers: { 
                'apikey': SUPABASE_ANON_KEY, 
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                'Content-Type': 'application/json'
            }
        });
        
        const data = await response.json();

        if (data && data.length > 0) {
            // 2. Logic: Success notification
            // Since this is a client-side app, you cannot send actual emails directly.
            // You must use a backend (like a Supabase Edge Function) for that.
            // For now, this confirms the account was found.
            alertBox.className = "auth-alert success";
            alertBox.textContent = "Recovery request sent to " + email + ". Check your inbox.";
            console.log("Reset initiated for user:", data[0].username);
        } else {
            // User not found
            throw new Error("Email address not registered in system.");
        }
    } catch (err) {
        alertBox.className = "auth-alert error";
        alertBox.textContent = "[ERROR]: " + err.message;
        alertBox.style.display = 'block';
    }
}

        
        
async function handleLogon(e) {
    e.preventDefault();
    const identifier = document.getElementById('login-user').value.trim();
    const pass = document.getElementById('login-pass').value.trim(); // .trim() ensures no hidden spaces
    const errorAlert = document.getElementById('login-error');

    errorAlert.style.display = 'none';

    try {
        // Build the query to check if email OR username matches
        // We do NOT filter by password in the URL initially to see if the user exists at all
        let query = identifier.includes('@') 
            ? `${SUPABASE_URL}/rest/v1/users?email=eq.${encodeURIComponent(identifier)}&select=username,password`
            : `${SUPABASE_URL}/rest/v1/users?username=eq.${encodeURIComponent(identifier)}&select=username,password`;

        const response = await fetch(query, {
            method: 'GET',
            headers: {
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        // Check if we found the user
        if (data && data.length > 0) {
            const userRecord = data[0];
            
            // Now compare the password manually in JavaScript
            if (userRecord.password === pass) {
                localStorage.setItem('v_auth_user', userRecord.username);
                grantSystemAccess(userRecord.username);
            } else {
                throw new Error("Incorrect password provided.");
            }
        } else {
            throw new Error("No user found with that identifier.");
        }

    } catch (err) {
        errorAlert.textContent = `[DENIED]: ${err.message}`;
        errorAlert.style.display = 'block';
    }
}

        function setupSidebarToggle() {
            const sidebar = document.querySelector('.sidebar');
            const toggleBtn = document.getElementById('sidebar-toggle');
            
            toggleBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                sidebar.classList.toggle('open');
            });

            document.addEventListener('click', (e) => {
                if (!sidebar.contains(e.target) && e.target !== toggleBtn && !toggleBtn.contains(e.target)) {
                    sidebar.classList.remove('open');
                }
            });
        }

        function simulateLogs() {
            const logs = [
                `[ROUTER]: Handshake complete for secure consumer connection.`,
                `[API_CORE]: Indexing token arrays against active memory clusters.`,
                `[GATEWAY]: Request processed via Node_02 cluster in ${Math.floor(Math.random()*40)+10}ms`,
                `[SYSTEM]: Health definitions verified. Status: 100% Operational.`
            ];
            const logBox = document.getElementById('console-log');
            if(logBox) {
                logBox.innerHTML += `<br>` + logs[Math.floor(Math.random() * logs.length)];
                logBox.scrollTop = logBox.scrollHeight;
            }
        }

        function renderLists() {
            const sections = {
                'featured-list': apiData.slice(0, 5),
                'list-downloaders': apiData.filter(a => a.category === 'downloaders'),
                'list-movie': apiData.filter(a => a.category === 'movie'),
                'list-ai': apiData.filter(a => a.category === 'ai'),
                'list-images': apiData.filter(a => a.category === 'images')
            };

            for (const [id, data] of Object.entries(sections)) {
                const el = document.getElementById(id);
                if (el) {
                    el.innerHTML = '';
                    data.forEach((api, idx) => {
                        const line = createApiRow(api);
                        line.style.animationDelay = `${idx * 0.05}s`;
                        el.appendChild(line);
                    });
                }
                const countId = id.replace('list-', 'count-');
                if(document.getElementById(countId)) document.getElementById(countId).textContent = data.length;
            }

            const fullRegistry = document.getElementById('full-registry');
            if (fullRegistry) {
                fullRegistry.innerHTML = '';
                
                const platformGroups = {
                    youtube: { title: "YOUTUBE MODULE ENDPOINTS", icon: "fab fa-youtube", apis: [] },
                    socials: { title: "SOCIAL MEDIA ENGINE CORES (FB / IG / TWITTER / TIKTOK)", icon: "fas fa-share-nodes", apis: [] },
                    spotify: { title: "SPOTIFY & AUDIO RETRIEVAL ARRAYS", icon: "fas fa-music", apis: [] },
                    movies: { title: "CINEMATIC DOMAIN APIS (MLFBD / VEGA / CINESUBZ / MOVIEBOX)", icon: "fas fa-film", apis: [] },
                    ai: { title: "NEURAL COGNITION SYSTEM APIS (GEMINI / VAJIRA-AI)", icon: "fas fa-brain", apis: [] },
                    adult: { title: "ADULT ARCHITECTURE OVERLAYS (XNXX / PORNHUB)", icon: "fas fa-user-slash", apis: [] },
                    general: { title: "SYSTEM OPERATIONS & GENERIC UTILITIES", icon: "fas fa-sliders", apis: [] }
                };

                apiData.forEach(api => {
                    const name = api.name.toLowerCase();
                    const ep = api.endpoint.toLowerCase();

                    if (name.includes('youtube') || ep.includes('yt')) {
                        platformGroups.youtube.apis.push(api);
                    } else if (name.includes('facebook') || name.includes('fbdl') || name.includes('instagram') || name.includes('igdl') || name.includes('twitter') || name.includes('tiktok') || ep.includes('tt') || name.includes('pinterest') || name.includes('capcut') || name.includes('telegram') || name.includes('dailymotion')) {
                        platformGroups.socials.apis.push(api);
                    } else if (name.includes('spotify') || name.includes('lyrics') || ep.includes('spoti')) {
                        platformGroups.spotify.apis.push(api);
                    } else if (name.includes('movie') || name.includes('animexin') || name.includes('123mkv') || name.includes('naijaprey') || name.includes('mlfbd') || name.includes('notun') || name.includes('vega') || name.includes('animostlk') || name.includes('cinesubz') || name.includes('ytsbz') || name.includes('torrent') || name.includes('movibd') || name.includes('moviect')) {
                        platformGroups.movies.apis.push(api);
                    } else if (name.includes('ai') || name.includes('gemini') || name.includes('blackbox') || name.includes('gpt') || ep.includes('img') || name.includes('video')) {
                        platformGroups.ai.apis.push(api);
                    } else if (name.includes('xnxx') || name.includes('xhamster') || name.includes('pornhub')) {
                        platformGroups.adult.apis.push(api);
                    } else {
                        platformGroups.general.apis.push(api);
                    }
                });

                Object.entries(platformGroups).forEach(([key, group]) => {
                    if (group.apis.length > 0) {
                        const block = document.createElement('div');
                        block.className = 'registry-sector-block';

                        const header = document.createElement('div');
                        header.className = 'registry-sector-header';
                        header.innerHTML = `<i class="${group.icon}"></i> ${group.title} <span class="count-badge">${group.apis.length} TERMINALS</span>`;

                        const list = document.createElement('div');
                        list.className = 'api-list';

                        group.apis.forEach((api, index) => {
                            const row = createApiRow(api);
                            row.style.animationDelay = `${index * 0.02}s`;
                            list.appendChild(row);
                        });

                        block.appendChild(header);
                        block.appendChild(list);
                        fullRegistry.appendChild(block);
                    }
                });
            }
        }

        function createApiRow(api) {
            const line = document.createElement('div');
            line.className = 'api-row';
            const url = `${BASE_URL}${api.endpoint}?apikey=YOUR_KEY&${api.param}=...`;
            line.innerHTML = `
                <div class="api-meta">
                    <div class="api-icon"><i class="fas fa-${getIcon(api.category)}"></i></div>
                    <div>
                        <span class="api-name"><span class="status-dot status-${api.status === 'active' ? 'active' : 'dead'}"></span>${api.name} <span class="method">${api.method}</span></span>
                        <p style="color:var(--text-dim); font-size:0.85rem; margin-top:5px;">${api.description}</p>
                    </div>
                </div>
                <div style="display:flex; gap:15px;">
                    <button class="btn btn-ghost" onclick="copyLink('${url}')"><i class="fas fa-copy"></i> COPY</button>
                    <button class="btn" onclick='openTerminal(${JSON.stringify(api)})'><i class="fas fa-play"></i> TEST</button>
                </div>
            `;
            return line;
        }

        function getIcon(cat) { return { downloaders: 'cloud-download-alt', movie: 'film', ai: 'brain', images: 'palette' }[cat] || 'link'; }

        function copyLink(url) {
            const key = localStorage.getItem('v-key') || 'YOUR_KEY';
            navigator.clipboard.writeText(url.replace('YOUR_KEY', key));
            alert("Endpoint URL Copied!");
        }

        function openPremiumModal() { document.getElementById('modal-premium').style.display = 'flex'; }
        function closeModal() { 
            document.querySelectorAll('.modal').forEach(m => m.style.display = 'none'); 
            document.getElementById('term-res').style.display = 'none';
        }

        function generateSecureKey() {
            const ts = Date.now();
            const rnd = Math.random().toString(36).substring(2, 10);
            const sum = rnd.split('').reduce((a, b) => a + b.charCodeAt(0), 0) % 100;
            const key = `vajira-${rnd}${sum.toString().padStart(2, '0')}-${ts}`;
            localStorage.setItem('v-key', key);
            document.getElementById('disp-key').textContent = key;
            document.getElementById('disp-date').textContent = new Date().toLocaleDateString();
            document.getElementById('modal-key-info').style.display = 'flex';
        }

        function copyActiveKey() {
            navigator.clipboard.writeText(localStorage.getItem('v-key') || PREMIUM_KEY);
            alert("Key Copied!");
        }

      /*  let currentApi = null;
        window.openTerminal = (api) => {
            currentApi = api;
            document.getElementById('term-title').textContent = `EXECUTE: ${api.name}`;
            document.getElementById('term-key').value = localStorage.getItem('v-key') || '';
            document.getElementById('term-val').value = '';
            document.getElementById('term-res').style.display = 'none';
            document.getElementById('terminal-modal').style.display = 'flex';
        };*/

        let currentApi = null;

window.openTerminal = (api) => {
    currentApi = api;
    document.getElementById('term-title').textContent = `EXECUTE: ${api.name}`;
    document.getElementById('term-key').value = localStorage.getItem('v-key') || '';
    document.getElementById('term-res').style.display = 'none';
    
    const container = document.getElementById('term-params-container');
    container.innerHTML = ''; // Clear out any previous boxes

    // Split parameters by '&' to find out how many distinct keys exist
    // Example: "subjectId=PUT_ID&detailPath=PUT_PATH" -> ["subjectId=PUT_ID", "detailPath=PUT_PATH"]
    const paramPairs = api.param.split('&');

    paramPairs.forEach(pair => {
        const parts = pair.split('=');
        const paramName = parts[0]; 
        const defaultValue = parts[1] || '';

        // Create a new input field for this specific parameter
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'tech-input dynamic-param';
        input.dataset.paramName = paramName; // Safely store the query key name
        input.placeholder = `ENTER ${paramName.toUpperCase()}`;
        
        // If it isn't a placeholder indicator, auto-fill it (like season=0 or episode=0)
        if (!defaultValue.includes('PUT_') && defaultValue !== '...') {
            input.value = defaultValue;
        }

        container.appendChild(input);
    });

    document.getElementById('terminal-modal').style.display = 'flex';
};


        document.getElementById('term-run').addEventListener('click', async () => {
    const key = document.getElementById('term-key').value;
    const resBox = document.getElementById('term-res');
    
    if (!key) return alert("Access Key credentials are required.");
    
    // Collect all values from our generated data parameter boxes
    const paramInputs = document.querySelectorAll('.dynamic-param');
    let queryString = `apikey=${encodeURIComponent(key)}`;
    let validationFailed = false;

    paramInputs.forEach(input => {
        const name = input.dataset.paramName;
        const value = input.value.trim();

        if (!value) {
            alert(`Parameter [${name}] is required.`);
            validationFailed = true;
            return;
        }
        queryString += `&${name}=${encodeURIComponent(value)}`;
    });

    if (validationFailed) return;

    resBox.style.display = 'block'; 
    resBox.textContent = ">>> Sending processing bits to cluster node...\n>>> Formatting response body...";
    
    try {
        // Constructs URL seamlessly whether there is 1 parameter or 4 parameters
        const finalUrl = `${BASE_URL}${currentApi.endpoint}?${queryString}`;
        console.log("Executing Request to:", finalUrl);

        const response = await fetch(finalUrl);
        const data = await response.json();
        resBox.textContent = JSON.stringify(data, null, 4);
    } catch(e) { 
        resBox.textContent = ">>> Target Exception: " + e.message; 
    }
});


        function setupNav() {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.onclick = (e) => {
                    e.preventDefault();
                    if(link.hasAttribute('onclick')) return; 
                    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
                    document.getElementById(`${link.dataset.page}-page`).style.display = 'block';
                    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                    document.querySelector('.sidebar').classList.remove('open');
                    window.scrollTo(0,0);
                }
            });
        }



function terminateSession() {
    // 1. Remove the authentication token/user from local storage
    localStorage.removeItem('v_auth_user');
    
    // 2. Hide the main dashboard
    document.querySelector('.main-container').style.display = 'none';
    
    // 3. Show the login/signup container again
    document.getElementById('auth-container').style.display = 'block';
    
    // 4. Optionally reload to clear any remaining in-memory state
    window.location.reload(); 
}


        
        function updateRealPerf() {
            const start = Date.now();
            fetch(window.location.href, { mode: 'no-cors' }).then(() => {
                const lat = Date.now() - start;
                if(document.getElementById('val-lat')) document.getElementById('val-lat').textContent = lat + "ms";
                if(document.getElementById('real-ping')) document.getElementById('real-ping').textContent = "LATENCY: " + lat + "ms";
            }).catch(() => {});
            if (window.performance && window.performance.memory) {
                document.getElementById('val-mem').textContent = Math.round(window.performance.memory.usedJSHeapSize / 1048576) + "MB";
            }
        }
    </script>
