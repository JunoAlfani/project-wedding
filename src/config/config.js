const config = {
    data: {
        // Main invitation title that appears on the page
        title: "Pernikahan Sri & Akbar",
        // Opening message/description of the invitation
        description: "Kami akan menikah dan mengundang Anda untuk turut merayakan momen istimewa ini.", // Nanti ini dibikin random
        // Groom's name
        groomName: "Sri",
        // Bride's name
        brideName: "Akbar",
        // Groom's parents names
        parentGroom: "Bapak Heru Sangkana, S.Pd & Ibu Sugiati, S.Pd (Almh)",
        // Bride's parents names
        parentBride: "Bapak Dede Winarya & Ibu Juju, S.Pd",
        // Wedding date (format: YYYY-MM-DD)
        date: "2025-12-13",
        // Google Maps link for location (short clickable link)
        maps_url: "https://maps.app.goo.gl/nWAHob1ntJdzdnWU7?g_st=aw",
        // Google Maps embed code to display map on website
        // How to get: open Google Maps → select location → Share → Embed → copy link
        maps_embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.229069828426!2d107.5329211!3d-6.9822729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68ef8b414178db%3A0x25762aa53c15a253!2sKODIM%200624%20Kab.%20Bandung!5e0!3m2!1sid!2sid!4v1763711358202!5m2!1sid!2sid",
        // Event time (free format, example: "10:00 - 12:00 WIB")
        time: "08.00 - Selesai",
        // Venue/building name
        location: "KODIM 0624",
        // Full address of the wedding venue
        address: "Jl. Terusan soreang-cipatik jatisari cipedung (kodim 0624/kab.Bandung)",
        // Image that appears when link is shared on social media
        ogImage: "/images/og-image.jpg",
        // Icon that appears in browser tab
        favicon: "/images/favicon.ico",
        // List of event agenda/schedule
        agenda: [{
                // First event name
                title: "Akad Nikah",
                // Event date (format: YYYY-MM-DD)
                date: "2025-12-13",
                // Start time (format: HH:MM)
                startTime: "08:00",
                // End time (format: HH:MM)
                endTime: "Selesai",
                // Event venue
                location: "KODIM 0624",
                // Full address
                address: "Jl. Terusan soreang-cipatik jatisari cipedung (kodim 0624/kab.Bandung)",
            },
            {
                // Second event name
                title: "Resepsi Nikah",
                date: "2025-12-13",
                startTime: "11:00",
                endTime: "14.00",
                location: "KODIM 0624",
                address: "Jl. Terusan soreang-cipatik jatisari cipedung (kodim 0624/kab.Bandung)",
            }
            // You can add more agenda items with the same format
        ],

        // Background music settings
        audio: {
            // Music file (choose one or replace with your own file)
            src: "/audio/RaisaBarsenaBestandhi.mp3", // or /audio/nature-sound.mp3
            // Music title to display
            title: "Awal Kisah Selamanya", // or Nature Sound
            // Whether music plays automatically when website opens
            autoplay: true,
            // Whether music repeats continuously
            loop: true
        },

        // List of bank accounts for digital envelope/gifts
        banks: [{
                // Bank name
                bank: "Bank bjb",
                // Account number
                accountNumber: "0126779690100",
                // Account holder name (all uppercase)
                accountName: "Neng Sri Apstati Saadah ",
            },
            {
                bank: "Bank bjb",
                accountNumber: "0113852356100",
                accountName: "Akbar Nur Ramdhani Pratama",
            }
            // You can add more banks with the same format
        ]
    }
};

export default config;