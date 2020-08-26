import React, { useState } from 'react';
import { Text, Modal, Portal } from 'react-native-paper';

const ModifyRoundModal = props => {
    return (
        <Portal style={...props.style}>
            <Modal visible={props.visible} onDismiss={props.hideModalHandler}>
                <Text>Example Modal</Text>
            </Modal>
        </Portal>
    );
};

export default ModifyRoundModal;