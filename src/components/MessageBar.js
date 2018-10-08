import React from 'react';
import PropTypes from 'prop-types';

const getPositionFromString = (type) => {
    switch (type) {
        case 'topLeft': return {
            left: 0,
            top: 0
        };
        case 'topRight': return {
            top: 0,
            right: 0
        };
        case 'bottomLeft': return {
            left: 0,
            bottom: 0
        };
        case 'bottomRight': return {
            right: 0,
            bottom: 0
        };
    }
}

class MessageBar extends React.Component {
    componentDidUpdate(prevProps) {
        if (prevProps.isOpen !== this.props.isOpen) {
            const { onClose, autoHideDuration = 3000 } = this.props;
        setTimeout(onClose, autoHideDuration);
        }

    }
    render() {
        const { message, isOpen, position } = this.props;
        const positionStyle = getPositionFromString(position);
        return (
            isOpen && <div style={{
                position: 'fixed',
                margin: '5px',
                padding: '5px',
                border: '1px solid',
                borderRadius: '3px',
                zIndex: 500,
                ...positionStyle
            }}>
                {message}
            </div>
        )
    }
}

MessageBar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    autoHideDuration: PropTypes.number,
    onClose: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired
}

export default MessageBar;
