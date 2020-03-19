import React,{ Component } from "react";
import PropTypes, {func} from 'prop-types';
import MessageView from "./message-view";

class MessageList extends Component{
    state = {
        messages:  [
            {
                from: 'John',
                message: 'The event will start next week',
                status: 'unread'
            },
            {
                from: 'Martha',
                message: 'I will be traveling soon',
                status: 'read'
            },
            {
                from: 'Jacob',
                message: 'Talk later. Have a great day!',
                status: 'read'
            }
        ]
    };

    render() {
        const MessageViews = this.state.messages.map(function(value, index, array){
           return(
               <MessageView key={index} message={value} />
           );
        });
        return(
            <div>
                <h1>List of Messages</h1>
                {MessageViews}
            </div>
        );
    }
}

export default MessageList;