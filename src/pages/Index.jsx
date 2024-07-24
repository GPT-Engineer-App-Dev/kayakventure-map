import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import KayakingMap from "./KayakingMap";

const Index = () => {
  const [date, setDate] = useState();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-2">Kayaking Trip Planner</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Plan Trip</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <KayakingMap />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Plan Your Trip</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="start" className="block text-sm font-medium text-gray-700">Start Location</label>
                <Input type="text" id="start" placeholder="Enter start location" />
              </div>
              <div>
                <label htmlFor="end" className="block text-sm font-medium text-gray-700">End Location</label>
                <Input type="text" id="end" placeholder="Enter end location" />
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date of Trip</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <label htmlFor="participants" className="block text-sm font-medium text-gray-700">Number of Participants</label>
                <Input type="number" id="participants" min="1" placeholder="Enter number of participants" />
              </div>
              <Button type="submit" className="w-full">Plan Trip</Button>
            </form>
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 p-4 mt-8">
        <div className="container mx-auto text-center">
          <a href="#" className="text-blue-600 hover:underline mr-4">Contact Us</a>
          <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;