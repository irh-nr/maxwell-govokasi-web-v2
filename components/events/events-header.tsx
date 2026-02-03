"use client";

import { Search, SlidersHorizontal, ArrowUpDown, LayoutGrid, List } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function EventsHeader() {
    return (
        <div className="flex flex-col space-y-6 md:space-y-8 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <h1 className="text-3xl font-bold tracking-tight">Events</h1>
                </div>

                {/* User Profile / Notifications could go here if needed, consistent with ref */}
            </div>

            <div className="flex flex-col xl:flex-row gap-4 items-start xl:items-center justify-between bg-white/50 dark:bg-black/20 p-2 rounded-2xl backdrop-blur-xs border border-border/40">
                <div className="flex flex-col sm:flex-row gap-3 w-full xl:w-auto">
                    <Tabs defaultValue="events" className="w-[200px]">
                        <TabsList className="grid w-full grid-cols-2 rounded-xl h-10 bg-muted/50">
                            <TabsTrigger value="events" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">Events</TabsTrigger>
                            <TabsTrigger value="schedules" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">Schedules</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>

                <div className="flex flex-1 gap-3 w-full xl:w-auto items-center">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search events..."
                            className="pl-9 h-10 rounded-xl bg-white/60 dark:bg-black/20 border-border/50 focus:bg-white transition-colors"
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="h-10 rounded-xl gap-2 bg-white/60 dark:bg-black/20 border-border/50">
                            <ArrowUpDown className="h-3.5 w-3.5" />
                            <span className="hidden sm:inline">Sort</span>
                        </Button>
                        <Button variant="outline" size="sm" className="h-10 rounded-xl gap-2 bg-white/60 dark:bg-black/20 border-border/50">
                            <SlidersHorizontal className="h-3.5 w-3.5" />
                            <span className="hidden sm:inline">Filter</span>
                        </Button>

                        <div className="h-6 w-px bg-border/60 mx-1 hidden sm:block" />

                        <div className="flex items-center bg-muted/50 rounded-xl p-1 border border-border/50">
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg bg-white shadow-sm">
                                <LayoutGrid className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg text-muted-foreground hover:text-foreground">
                                <List className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
