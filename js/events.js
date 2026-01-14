/**
 * EventService
 * Handles storage and retrieval of events using localStorage.
 * Acts as a centralized "database" for the frontend.
 */

const EventService = {
    STORAGE_KEY: 'novex_events',

    // Initial Mock Data (used if storage is empty)
    initialData: [
        {
            id: 1,
            title: "AI/ML Hackathon 2026",
            date: "2026-01-15",
            deadline: "2026-01-10",
            status: "closing-soon",
            organizer: "Tech Club",
            category: "hackathon",
            tags: ["AI/ML", "Hackathon", "Advanced"],
            location: "Online",
            registrationLink: "#",
            description: "Join us for a 48-hour hackathon focused on AI and Machine Learning innovations."
        },
        {
            id: 2,
            title: "Web Development Workshop",
            date: "2026-01-20",
            deadline: "2026-01-18",
            status: "upcoming",
            organizer: "CS Department",
            category: "workshop",
            tags: ["Web Development", "Workshop", "Beginner Friendly"],
            location: "Lab 301",
            registrationLink: "#",
            description: "Learn the basics of modern web development with React and Tailwind CSS."
        },
        {
            id: 3,
            title: "Annual Cultural Fest",
            date: "2026-02-05",
            deadline: "2026-01-25",
            status: "upcoming",
            organizer: "Student Council",
            category: "cultural",
            tags: ["Music", "Dance", "Cultural Fest"],
            location: "Main Auditorium",
            registrationLink: "#",
            description: "The biggest cultural event of the year! Music, dance, and drama."
        },
        {
            id: 4,
            title: "Cyber Security Seminar",
            date: "2026-01-12",
            deadline: "2026-01-08",
            status: "closing-soon",
            organizer: "Security Club",
            category: "seminar",
            tags: ["Cyber Security", "Seminar", "Intermediate"],
            location: "Conference Hall",
            registrationLink: "#",
            description: "Expert talk on the latest trends in network security and ethical hacking."
        },
        {
            id: 5,
            title: "Design Thinking Competition",
            date: "2026-01-25",
            deadline: "2026-01-20",
            status: "upcoming",
            organizer: "Innovation Lab",
            category: "competition",
            tags: ["Design/UI-UX", "Competition", "Open for All Years"],
            location: "Innovation Center",
            registrationLink: "#",
            description: "Solve real-world problems using design thinking methodologies."
        }
    ],

    // Initialize storage with mock data if empty
    init: function () {
        if (!localStorage.getItem(this.STORAGE_KEY)) {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.initialData));
            console.log('EventService: Initialized with mock data.');
        }
    },

    // Get all events
    getEvents: function () {
        this.init();
        const events = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
        // Sort by date (newest first) by default or by status logic
        return events.sort((a, b) => new Date(a.date) - new Date(b.date));
    },

    // Get single event by ID
    getEventById: function (id) {
        const events = this.getEvents();
        return events.find(e => e.id === Number(id));
    },

    // Save (Create or Update) an event
    saveEvent: function (eventData) {
        let events = this.getEvents();

        if (eventData.id) {
            // Update existing
            const index = events.findIndex(e => e.id === Number(eventData.id));
            if (index !== -1) {
                // Recalculate status if dates are provided, otherwise keep existing or calculate from merged
                const mergedEvent = { ...events[index], ...eventData };
                mergedEvent.status = this.determineStatus(mergedEvent.date, mergedEvent.deadline);
                events[index] = mergedEvent;
            }
        } else {
            // Create new
            const newEvent = {
                ...eventData,
                id: Date.now(), // Simple unique ID
                status: this.determineStatus(eventData.date, eventData.deadline)
            };
            events.push(newEvent);
        }

        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(events));
        return true;
    },

    // Delete an event
    deleteEvent: function (id) {
        let events = this.getEvents();
        const newEvents = events.filter(e => e.id !== Number(id));
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(newEvents));
        return true;
    },

    // Helper: Determine status based on dates
    determineStatus: function (dateStr, deadlineStr) {
        const today = new Date();
        const eventDate = new Date(dateStr);
        const deadlineDate = new Date(deadlineStr);

        // Reset times for date comparison
        today.setHours(0, 0, 0, 0);

        if (deadlineDate < today) {
            return 'closed';
        }

        const daysToDeadline = Math.ceil((deadlineDate - today) / (1000 * 60 * 60 * 24));
        if (daysToDeadline <= 3 && daysToDeadline >= 0) {
            return 'closing-soon';
        }

        return 'upcoming';
    }
};

// Auto-initialize
EventService.init();
