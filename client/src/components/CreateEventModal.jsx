import React, { useState } from 'react';
import Modal from 'react-modal';
import Datetime from 'react-datetime';

export default function CreateEventModal({ isOpen, onClose, onEventAdded}) {

    const [id, setId] = useState();
    const [title, setTitle] = useState();
    const [start, setStart] = useState(Date());
    const [end, setEnd] = useState(Date());

    const onSubmit = (event) => {
        event.preventDefault();

        onEventAdded({
            id,
            title,
            start,
            end
        });
        onClose();
    }

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}>
            <form onSubmit={onSubmit}>

                <input 
                    type="number" 
                    placeholder="id" 
                    value={id}
                    onChange={e => setId(e.target.value)}
                />
                <br />
                <input 
                    type="text" placeholder="Title" 
                    value={title} 
                    onChange={e => setTitle(e.target.value)}
                />

                <div>
                    <label>Start</label>
                    <Datetime 
                        value={start} 
                        onChange={date => setStart(date)}
                    />
                </div>
                <div>
                    <label>End</label>
                    <Datetime 
                        value={end} 
                        onChange={date => setEnd(date)}
                    />
                </div>

                <button>Create</button>
            </form>
        </Modal>
    );
}