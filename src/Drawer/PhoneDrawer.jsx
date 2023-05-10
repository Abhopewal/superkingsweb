import React from 'react'
import Modal from 'react-modal';
import { FaBlogger } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {
    FcFaq, FcNook, FcAbout, FcHome,
} from "react-icons/fc";


export const PhoneDrawer = (props) => {

    const customStyles = {
        content: {
            top: '50%',
            left: '80%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-30%',
            transform: 'translate(-50%, -50%)',
            height: '100%',
            width:"90%",
            overflowY: 'auto',
            zIndex: 1
        },
    };


    const closeModal = () => {
        props.setIsOpen(false);

    }

    return (
        <>
            <Modal

                isOpen={props.modalIsOpen}
                contentLabel="Example Modal"
                className="Modal"
                overlayClassName="Overlay"
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div className="container">
                    <div className="navlinks mt-4">
                        <ul>
                            <li><FcHome /><Link to='/'> Home</Link> </li>
                            <li><FaBlogger /><Link to='/blog'> About Us</Link></li>
                            <li><FcNook /> <Link to='/blog'> Services</Link></li>
                            <li><FcFaq /> <Link to='/technologies' > Technologies</Link></li>
                            <li><FcAbout /> <Link to='/blog'> Protfolio</Link></li>
                          
                        </ul>
                    </div>

              
                </div>
            </Modal>
        </>
    )
}

