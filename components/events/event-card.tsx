"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Speaker {
    name: string;
    avatar: string;
    role: string;
}

export interface EventProps {
    id: string;
    image: string;
    title: string;
    description: string;
    date: string;
    address: string;
    speakers: Speaker[];
    category?: string;
}

export function EventCard({
    image,
    title,
    description,
    date,
    address,
    speakers,
}: EventProps) {
    return (
        <div className="group relative bg-card rounded-3xl p-4 transition-all duration-300 hover:shadow-lg border border-border/50 hover:border-primary/20 flex flex-col h-full card-depth">
            {/* Image Container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl mb-4">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                {/* Date and Location Badges on Image */}
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-white text-xs font-medium">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-white text-xs font-medium">
                        <MapPin className="w-3.5 h-3.5" />
                        <span className="max-w-[150px] truncate">{address}</span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow space-y-3">
                <div>
                    <h3 className="text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                        {title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                        {description}
                    </p>
                </div>

                <div className="mt-auto pt-4 flex items-center justify-between">
                    {/* Speakers */}
                    <div className="flex -space-x-3">
                        {speakers.slice(0, 3).map((speaker, i) => (
                            <Avatar key={i} className="border-2 border-background w-8 h-8">
                                <AvatarImage src={speaker.avatar} alt={speaker.name} />
                                <AvatarFallback className="text-[10px] bg-primary/10 text-primary">
                                    {speaker.name.charAt(0)}
                                </AvatarFallback>
                            </Avatar>
                        ))}
                        {speakers.length > 3 && (
                            <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-background bg-muted text-[10px] font-medium text-muted-foreground">
                                +{speakers.length - 3}
                            </div>
                        )}
                    </div>

                    {/* Action Button */}
                    <Button variant="outline" size="sm" className="rounded-full gap-1 hover:bg-primary hover:text-white group-hover:border-primary/50">
                        Details <ArrowRight className="w-3 h-3" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
