import React, { useEffect, useState } from 'react';
import './ChatPopup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const ChatPopup = ({ users }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isChatAvctive, setIsChatActive] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(0);
    const [currentChatUser, setCurrentChatUser] = useState({})

    const handleToggleChat = () => {
        if (isChatAvctive && isOpen) {
            setIsChatActive(!isChatAvctive);
        }
        setIsOpen(!isOpen);
    };

    const handleToggleActiveChat = (userId) => {
        if (!isChatAvctive) {
            setIsChatActive(!isChatAvctive);
        }
        setSelectedUserId(userId);
    };

    useEffect(() => {
        const currentUser = users.find((user) => user.id === selectedUserId);
        setCurrentChatUser(currentUser);
    }, [selectedUserId])

    return (
        <div className="chat-button">
            <button className="chat-toggle-btn" onClick={handleToggleChat}>
                <div className='chat-avatar'><FontAwesomeIcon icon={faComment} className="icon" />
                    <p>Chat</p></div>

                {isOpen ? (
                    <FontAwesomeIcon icon={faChevronUp} className="arrow-icon" />
                ) : (
                    <FontAwesomeIcon icon={faChevronDown} className="arrow-icon" />
                )}
            </button>
            {isOpen && (
                <div className="chat-content">
                    {users.map((user) => (
                        <div key={user.id} className="message-user" onClick={() => handleToggleActiveChat(user.id)}>
                            <img src={user.profilepicture} alt={user.name} />
                            <h4>{user.name}</h4>
                        </div>
                    ))}
                </div>
            )}
            {(isChatAvctive && currentChatUser) && (
                <div className="actice-chat-content">
                    <div className='active-chat-header' onClick={handleToggleActiveChat}>
                        <div className='active-chat-info'>
                            <img src={currentChatUser.profilepicture} alt={currentChatUser.name} />
                            <h4>{currentChatUser.name}</h4>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faChevronDown} className="active-chat-arrow-icon" />
                        </div>
                    </div>
                    <div className='active-chat-details'>
                        <img src="/chat.png" alt="chat" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatPopup;
