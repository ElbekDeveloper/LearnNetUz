import React, {useState} from "react";
import Modal from "../../../components/modal/Modal";

function TaskOne (){
    
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    }
    
    const closeModal = () =>{
        setModalOpen(false);
    }
    return (
        <div>
            <button onClick={openModal}> Vazifalarni ko'rish </button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
            <p><strong>O'zingiz haqingizda README.md file yarating. Shartlar:</strong></p>
            <ol>
                    <ul>
                        <li><strong>1.1</strong> Sarlavha bo'lsin</li>
                        <li><strong>1.2</strong> Matn bo'lsin</li>
                        <li><strong>1.3</strong> Rasm bo'lsin</li>
                        <li><strong>1.4</strong> Ro'yxat bo'lsin</li>
                        <li><strong>1.5</strong> Havola bo'lsin</li>
                    </ul>
            </ol>
            </Modal>
        </div>
    );
}

export default TaskOne;