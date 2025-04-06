import React, { useState } from 'react';
import { ChevronRight, Circle } from 'lucide-react';
import './PastRecruiter.scss'; // Assuming you have some CSS for styling
const timelineEvents = [
  {
    id: 1,
    date: "2024 Q1",
    title: "Project Inception",
    summary: "Initial planning and team formation",
    description: "Comprehensive project kickoff including detailed planning sessions, team structure establishment, and initial resource allocation. Key milestones were defined and preliminary technical architecture was drafted."
  },
  {
    id: 2,
    date: "2024 Q2",
    title: "Development Phase",
    summary: "Core features implementation",
    description: "Intensive development period focusing on core functionality. The team implemented key features, established CI/CD pipelines, and conducted initial security audits."
  },
  {
    id: 3,
    date: "2024 Q3",
    title: "Beta Launch",
    summary: "Limited release to beta users",
    description: "Successful beta launch to selected users. Gathered crucial feedback, identified performance bottlenecks, and implemented user-suggested improvements."
  },
  {
    id: 4,
    date: "2024 Q4",
    title: "Public Release",
    summary: "Official product launch",
    description: "Full public release of the platform. Marketing campaign launched, support systems established, and monitoring systems implemented for production environment."
  }
];

const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="min-h-screen, fom">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Timeline */}
        <div className="w-full lg:w-1/2">
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-[#2ecc71] to-[#2980b9]"></div>
            
            {timelineEvents.map((event) => (
              <div key={event.id} className="mb-8 relative">
                <div 
                  className={`
                    absolute left-0 w-8 h-8 rounded-full cursor-pointer
                    transform transition-all duration-300
                    ${selectedEvent?.id === event.id 
                      ? 'bg-gradient-to-r from-[#2ecc71] to-[#2980b9] scale-125 shadow-[0_0_8px_rgba(46,204,113,0.6)]'
                      : 'bg-white border-2 border-[#2ecc71] hover:scale-110'
                    }
                  `}
                  onClick={() => setSelectedEvent(event)}
                >
                  {selectedEvent?.id === event.id && (
                    <Circle className="w-full h-full p-1 text-white animate-pulse" />
                  )}
                </div>
                
                <div 
                  className={`
                    timeline-container ml-12 p-4 rounded-lg transition-all duration-300
                    ${selectedEvent?.id === event.id
                      ? 'bg-gradient-to-r from-[#2ecc71] to-[#2980b9] text-white shadow-[0_8px_15px_rgba(0,0,0,0.2)]'
                      : 'bg-white hover:shadow-lg cursor-pointer'
                    }
                  `}
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{event.title}</h3>
                    <span className="text-sm opacity-75">{event.date}</span>
                  </div>
                  <p className="mt-2 text-sm">{event.summary}</p>
                  <ChevronRight 
                    className={`
                      mt-2 transition-transform duration-300
                      ${selectedEvent?.id === event.id ? 'rotate-90' : ''}
                    `}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Details Panel */}
        <div className="w-full lg:w-1/2 lg:sticky lg:top-32 h-fit">
          {selectedEvent ? (
            <div className="bg-white rounded-lg p-6 shadow-[0_8px_20px_rgba(0,0,0,0.12)] transform transition-all duration-300">
              <div className="bg-gradient-to-r from-[#2ecc71] to-[#2980b9] text-white p-4 -mx-6 -mt-6 rounded-t-lg">
                <h2 className="text-2xl font-bold">{selectedEvent.title}</h2>
                <p className="text-sm opacity-75 mt-1">{selectedEvent.date}</p>
              </div>
              <div className="mt-6">
                <p className="text-[#2c3e50] leading-relaxed">{selectedEvent.description}</p>
              </div>
            </div>
          ) : (
            <div className="bg-white/50 rounded-lg p-6 backdrop-blur-sm border border-white/20 text-center">
              <p className="text-[#2c3e50]">Select an event to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;