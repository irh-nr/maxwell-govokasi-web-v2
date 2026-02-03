"use client";

import { EventsHeader } from "@/components/events/events-header";
import { EventCard, EventProps } from "@/components/events/event-card";
import { Button } from "@/components/ui/button";

// Mock Data
const SPEAKERS = [
    { name: "Sarah J.", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d", role: "CEO" },
    { name: "David K.", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d", role: "CTO" },
    { name: "Emily R.", avatar: "https://i.pravatar.cc/150?u=a04258114e29026302d", role: "Lead" },
    { name: "Michael C.", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d", role: "Director" },
];

const UPCOMING_EVENTS: EventProps[] = [
    {
        id: "1",
        title: "Future Tech Hackathon 2024",
        description: "Collaborate with top developers and designers to solve real-world challenges using AI and Blockchain technology.",
        image: "/events/hackathon.png",
        date: "Aug 20, 2024",
        address: "Grand Indonesia West Mall, Jakarta",
        speakers: [SPEAKERS[1], SPEAKERS[0], SPEAKERS[2]],
        category: "Upcoming",
    },
    {
        id: "2",
        title: "Global Leadership Summit",
        description: "An exclusive gathering of industry leaders discussing the future of work and corporate governance.",
        image: "/events/workshop.png",
        date: "Sep 05, 2024",
        address: "The Ritz-Carlton, Pacific Place",
        speakers: [SPEAKERS[0], SPEAKERS[3]],
        category: "Upcoming",
    },
    {
        id: "3",
        title: "Annual Career Fair Expo",
        description: "Connect with over 100+ hiring companies and explore career opportunities in various industries.",
        image: "/events/hackathon.png", // Reusing for demo
        date: "Sep 12, 2024",
        address: "Jakarta Convention Center",
        speakers: [SPEAKERS[2], SPEAKERS[1], SPEAKERS[3], SPEAKERS[0]],
        category: "Upcoming",
    },
];

const LIVE_EVENTS: EventProps[] = [
    {
        id: "4",
        title: "Digital Marketing Mastery",
        description: "Live workshop on advanced SEO and content marketing strategies for 2024.",
        image: "/events/workshop.png",
        date: "Live Now",
        address: "Online / Zoom Webinar",
        speakers: [SPEAKERS[3], SPEAKERS[2]],
        category: "Live",
    },
    {
        id: "5",
        title: "Startup Funding 101",
        description: "Learn how to pitch your idea to VCs and secured seed funding for your venture.",
        image: "/events/hackathon.png",
        date: "Starts in 1h",
        address: "CoHive coworking Space, Kuningan",
        speakers: [SPEAKERS[0], SPEAKERS[1]],
        category: "Live",
    },
    {
        id: "6",
        title: "Data Science Bootcamp Intro",
        description: "Introduction to Python for Data Analysis. Perfect for beginners looking to switch careers.",
        image: "/events/workshop.png",
        date: "Today, 19:00",
        address: "Maxwell HQ, South Jakarta",
        speakers: [SPEAKERS[1], SPEAKERS[2], SPEAKERS[3]],
        category: "Live",
    },
    {
        id: "7",
        title: "UI/UX Design Trends",
        description: "Explore the latest trends in interface design and user experience.",
        image: "/events/hackathon.png",
        date: "Tomorrow, 10:00",
        address: "Creative Hub, Jakarta",
        speakers: [SPEAKERS[0], SPEAKERS[2]],
        category: "Live",
    }
];

export default function EventsPage() {
    return (
        <div className="min-h-screen bg-muted/30 pb-20 pt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <EventsHeader />

                <div className="space-y-12">
                    {/* Upcoming Section */}
                    <section className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-bold tracking-tight text-foreground">Upcoming Events</h2>
                                <p className="text-muted-foreground mt-1">Stay updated with the next major gatherings.</p>
                            </div>
                            <Button variant="ghost" className="text-primary hover:text-primary/80 hover:bg-primary/5">
                                See All Events
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {UPCOMING_EVENTS.map((event) => (
                                <EventCard key={event.id} {...event} />
                            ))}
                        </div>
                    </section>

                    {/* Live & Upcoming Section */}
                    <section className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-bold tracking-tight text-foreground">Live & Upcoming</h2>
                                <p className="text-muted-foreground mt-1">Happening now and later this week.</p>
                            </div>
                            <Button variant="ghost" className="text-primary hover:text-primary/80 hover:bg-primary/5">
                                See All Schedule
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {LIVE_EVENTS.map((event) => (
                                <EventCard key={event.id} {...event} />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
