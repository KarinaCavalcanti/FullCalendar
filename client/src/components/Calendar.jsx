import React, { useRef, useState } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import CreateEventModal from "./CreateEventModal";
import api from "../api";
import moment from 'moment';

export default function Calendar() {

    const [modalOpen, setModalOpen] = useState(false);
    const [events, setEvents] = useState([]);
    const calendarRef = useRef(null);

    const onEventAdded = event => {
        let calendarApi = calendarRef.current.getApi(api);
        calendarApi.addEvent({
            id: event.id,
            start: moment(event.start).toDate(),
            end: moment(event.end).toDate(),
            title: event.title,
        });
    }

    async function handleEventAdd(data) {
        await api.post('/create', data.event);
    }

    async function handleDatesSet(data) {
        const response = await api.get(`/read?start=${moment(data.start).toISOString()}&end=${moment(data.end).toISOString()}`);
        setEvents(response.data);
    }

    return (
        <section>  
            <button onClick={() => setModalOpen(true)}>Create event</button>
            <br />

            <div style={{ position: "relative", zIndex: 0 }}>
                <FullCalendar
                    ref={calendarRef}
                    events={events}
                    plugins={[ dayGridPlugin ]}
                    initialView="dayGridMonth"
                    eventAdd={(event) => handleEventAdd(event)}
                    datesSet={date => handleDatesSet(date)}
                />
            </div>

            <CreateEventModal isOpen={modalOpen} onClose={() => setModalOpen(false)}  onEventAdded={event => onEventAdded(event)}/>

        </section>
    );
}